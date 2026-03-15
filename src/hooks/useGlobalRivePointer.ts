import { useEffect } from 'react'
import type { RefObject } from 'react'

function useGlobalRivePointer(hostRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let detachListeners: (() => void) | null = null

    const attachToCanvas = (canvas: HTMLCanvasElement) => {
      const EDGE_INSET = 0.5
      const EDGE_FALLOFF = 120

      const getMappedCoordinates = (event: PointerEvent) => {
        const canvasRect = canvas.getBoundingClientRect()
        const centerX = canvasRect.left + canvasRect.width / 2
        const centerY = canvasRect.top + canvasRect.height / 2

        const clampedX = Math.min(
          canvasRect.right - EDGE_INSET,
          Math.max(canvasRect.left + EDGE_INSET, event.clientX),
        )
        const clampedY = Math.min(
          canvasRect.bottom - EDGE_INSET,
          Math.max(canvasRect.top + EDGE_INSET, event.clientY),
        )

        const outsideX = Math.max(canvasRect.left - event.clientX, 0, event.clientX - canvasRect.right)
        const outsideY = Math.max(canvasRect.top - event.clientY, 0, event.clientY - canvasRect.bottom)
        const outsideDistance = Math.hypot(outsideX, outsideY)

        const insideEdgeDistance = Math.min(
          clampedX - canvasRect.left,
          canvasRect.right - clampedX,
          clampedY - canvasRect.top,
          canvasRect.bottom - clampedY,
        )

        const influence = outsideDistance > 0
          ? Math.min(1, outsideDistance / EDGE_FALLOFF)
          : Math.min(1, insideEdgeDistance / EDGE_FALLOFF)

        const clientX = centerX + (clampedX - centerX) * influence
        const clientY = centerY + (clampedY - centerY) * influence

        return {
          clientX,
          clientY,
          screenX: event.screenX,
          screenY: event.screenY,
          buttons: event.buttons,
        }
      }

      const forwardMouseEvent = (type: string, event: PointerEvent) => {
        const mapped = getMappedCoordinates(event)
        canvas.dispatchEvent(
          new MouseEvent(type, {
            bubbles: true,
            cancelable: true,
            composed: true,
            clientX: mapped.clientX,
            clientY: mapped.clientY,
            screenX: mapped.screenX,
            screenY: mapped.screenY,
            buttons: mapped.buttons,
          }),
        )
      }

      const handlePointerMove = (event: PointerEvent) => {
        forwardMouseEvent('mouseover', event)
        forwardMouseEvent('mousemove', event)
      }

      const handlePointerDown = (event: PointerEvent) => {
        forwardMouseEvent('mousedown', event)
      }

      const handlePointerUp = (event: PointerEvent) => {
        forwardMouseEvent('mouseup', event)
      }

      window.addEventListener('pointermove', handlePointerMove)
      window.addEventListener('pointerdown', handlePointerDown)
      window.addEventListener('pointerup', handlePointerUp)

      detachListeners = () => {
        window.removeEventListener('pointermove', handlePointerMove)
        window.removeEventListener('pointerdown', handlePointerDown)
        window.removeEventListener('pointerup', handlePointerUp)
      }
    }

    const existingCanvas = host.querySelector('canvas')
    if (existingCanvas instanceof HTMLCanvasElement) {
      attachToCanvas(existingCanvas)
    } else {
      const observer = new MutationObserver(() => {
        const nextCanvas = host.querySelector('canvas')
        if (nextCanvas instanceof HTMLCanvasElement) {
          observer.disconnect()
          attachToCanvas(nextCanvas)
        }
      })

      observer.observe(host, { childList: true, subtree: true })

      return () => {
        observer.disconnect()
        detachListeners?.()
      }
    }

    return () => {
      detachListeners?.()
    }
  }, [hostRef])
}

export default useGlobalRivePointer