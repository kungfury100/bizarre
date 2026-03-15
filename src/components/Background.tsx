import { useEffect, useRef } from 'react'
import {
  Application,
  Assets,
  Container,
  DisplacementFilter,
  Sprite,
  Texture,
} from 'pixi.js'
import mainBackground from '../assets/main-bg-1.jpg'

type PointerMoveEvent = {
  global?: { x: number; y: number }
  data?: {
    global?: { x: number; y: number }
  }
}

function Background() {
  const hostRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let cancelled = false
    let pixiApp: Application | null = null

    const init = async () => {
      if (!hostRef.current) return

      const app = new Application()
      await app.init({
        resizeTo: hostRef.current,
        antialias: true,
      })

      if (cancelled) {
        app.destroy(true)
        return
      }

      pixiApp = app
      hostRef.current.appendChild(app.canvas)

      await Assets.load([
        mainBackground,
      ])

      if (cancelled) return

      app.stage.eventMode = 'static'
      app.stage.hitArea = app.screen

      const container = new Container()
      app.stage.addChild(container)

      const displacementCanvas = document.createElement('canvas')
      displacementCanvas.width = 512
      displacementCanvas.height = 512
      const context = displacementCanvas.getContext('2d')

      if (!context) return

      context.fillStyle = 'rgb(128, 128, 128)'
      context.fillRect(0, 0, displacementCanvas.width, displacementCanvas.height)

      const gradient = context.createRadialGradient(256, 256, 8, 256, 256, 240)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
      gradient.addColorStop(0.28, 'rgba(220, 220, 255, 0.72)')
      gradient.addColorStop(0.72, 'rgba(138, 138, 138, 0.32)')
      gradient.addColorStop(1, 'rgba(128, 128, 128, 0)')

      context.fillStyle = gradient
      context.beginPath()
      context.arc(256, 256, 240, 0, Math.PI * 2)
      context.fill()

      const displacementSprite = Sprite.from(Texture.from(displacementCanvas))
      const displacementFilter = new DisplacementFilter({
        sprite: displacementSprite,
        scale: 560,
      })

      app.stage.addChild(displacementSprite)
      container.filters = [displacementFilter]

      displacementSprite.anchor.set(0.5)
      displacementSprite.scale.set(3.2)

      const bg = Sprite.from(mainBackground)
      bg.width = app.screen.width
      bg.height = app.screen.height
      bg.alpha = 0.9
      container.addChild(bg)

      let targetX = app.screen.width * 0.5
      let targetY = app.screen.height * 0.5
      let currentX = targetX
      let currentY = targetY

      displacementSprite.position.set(currentX - 25, currentY)

      const onPointerMove = (event: PointerMoveEvent) => {
        const global = event.global ?? event.data?.global
        if (!global) return

        targetX = global.x
        targetY = global.y
      }

      app.stage.on('mousemove', onPointerMove).on('touchmove', onPointerMove)

      app.ticker.add((time) => {
        const easing = 1 - Math.pow(1 - 0.14, time.deltaTime)
        currentX += (targetX - currentX) * easing
        currentY += (targetY - currentY) * easing

        displacementSprite.position.set(currentX - 25, currentY)
      })

      app.renderer.on('resize', (newWidth: number, newHeight: number) => {
        bg.width = newWidth
        bg.height = newHeight
      })
    }

    init()

    return () => {
      cancelled = true
      pixiApp?.destroy(true)
    }
  }, [])

  return <div ref={hostRef} className='app-background' aria-hidden='true' />
}

export default Background