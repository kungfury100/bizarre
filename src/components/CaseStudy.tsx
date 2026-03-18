import { useEffect, useRef, type ReactNode } from 'react'
import '../styles/CaseStudy.css'

type CaseStudyMetaItem = {
  label: ReactNode
  value: ReactNode
  href?: string
}

type CaseStudyImage = {
  src: string
  alt: string
}

type CaseStudyImageLayout = 'stack' | 'grid-3'

type CaseStudyMediaBlock = {
  layout?: CaseStudyImageLayout
  images: CaseStudyImage[]
}

type CaseStudyProps = {
  title: string
  description: ReactNode[]
  meta?: CaseStudyMetaItem[]
  imageLayout?: CaseStudyImageLayout
  images?: CaseStudyImage[]
  media?: CaseStudyMediaBlock[]
}

function CaseStudy({
  title,
  description,
  meta,
  imageLayout = 'stack',
  images,
  media,
}: CaseStudyProps) {
  const metaRef = useRef<HTMLDivElement | null>(null)
  const mediaBlocks = media?.length
    ? media
    : images?.length
      ? [{ layout: imageLayout, images }]
      : []

  useEffect(() => {
    const metaContainer = metaRef.current

    if (!metaContainer) {
      return
    }

    const metaItems = metaContainer.querySelectorAll('.meta-item')

    if (!metaItems.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    metaItems.forEach((item) => observer.observe(item))

    return () => {
      observer.disconnect()
    }
  }, [meta])

  return (
    <section className='case-study'>
      <div className='case-study__meta'>
        <div className='case-study__meta-inner'>
          

          <div className='case-study__description'>
            <h2 className='case-study__title'>{title}</h2>
            {description.map((paragraph, index) => (
              <p key={`${title}-${index}`}>{paragraph}</p>
            ))}
          </div>

          {meta?.length ? (
            <div ref={metaRef} className='case-study__details'>
              {meta.map((item, index) => (
                <div key={`${title}-meta-${index}`} className='case-study__detail-row meta-item'>
                  <p className='case-study__detail-label'>{item.label}</p>
                  <p className='case-study__detail-value'>
                    {item.href ? (
                      <a href={item.href} target='_blank' rel='noopener noreferrer'>
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className='case-study__media'>
        {mediaBlocks.map((block, blockIndex) => (
          <div
            key={`${title}-media-${blockIndex}`}
            className={`case-study__media-block case-study__media-block--${block.layout ?? 'stack'}`}
          >
            {block.images.map((image) => (
              <div key={image.src + image.alt} className='case-study__media-item container'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='case-study-image'
                  loading='lazy'
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaseStudy