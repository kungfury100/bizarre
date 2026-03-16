import '../styles/CaseStudy.css'

type CaseStudyProps = {
  title: string
  description: string[]
  images: Array<{
    src: string
    alt: string
  }>
}

function CaseStudy({
  title,
  description,
  images,
}: CaseStudyProps) {
  return (
    <section className='case-study'>
      <div className='case-study__meta'>
        <div className='case-study__meta-inner'>
          <h2 className='case-study__title'>{title}</h2>

          <div className='case-study__description'>
            {description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className='case-study__media'>
        {images.map((image) => (
          <div key={image.src + image.alt} className='container'>
            <img
              src={image.src}
              alt={image.alt}
              className='case-study-image'
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaseStudy