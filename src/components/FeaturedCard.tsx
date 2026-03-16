import { Link } from 'react-router-dom'
import '../styles/FeaturedCard.css'

type FeaturedCardProps = {
  title: string
  description: string
  to: string
  image: string
  imageAlt: string
}

function FeaturedCard({
  title,
  description,
  to,
  image,
  imageAlt,
}: FeaturedCardProps) {
  return (
    <Link to={to} className='featured-card'>
      <img src={image} alt={imageAlt} className='featured-card__media' loading='lazy' />

      <div className='featured-card__content'>
        <h3 className='featured-card__title'>{title}</h3>
        <p className='featured-card__description'>{description}</p>
      </div>
    </Link>
  )
}

export default FeaturedCard