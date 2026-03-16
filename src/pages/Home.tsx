import Rive from '@rive-app/react-webgl2'
import hologramRiv from '../assets/hologram.riv?url'
import { Link } from 'react-router-dom'
import FeaturedCard from '../components/FeaturedCard'
import CaseStudy from '../components/CaseStudy'


function Home() {
  return (
    <div className='home-page'>
      <div className='home-intro'>
        <div className='container hero-rive'>
          <Rive
            className='hero-rive-inner'
            src={hologramRiv}
            stateMachines='Play'
          />
        </div>

        <div className='page-stack'>
          <div className='page-stack--tight'>
            <h1>Hello there explorer.</h1>
            <p>My name is Karl, I do product design and web development. On my journey, I've led design process for user-centric products and design systems.</p>
            <p>(Been designing for two <a href='https://www.lift99.co/walloffame' target='_blank' rel='noopener noreferrer'>#EstonianMafia</a> startups.)</p>
          </div>

          <div className='button-row'>
            <Link to='/docs/moon' className='button-link'>Check out my work</Link>
            <a href='/cv.pdf' target='_blank' rel='noopener noreferrer' className='button-link'>Read my CV</a>
          </div>
        </div>
      </div>

      <section className='home-showcase text-left'>
        <p>Featured projects</p>

        <div className='home-showcase__grid'>
          <FeaturedCard
            title='Moon Design System'
            description='Design tokens, components, documentation, and adoption across product teams.'
            to='/docs/moon'
            image='/moon/cover.jpg'
            imageAlt='Moon design system preview'
          />

          <FeaturedCard
            title='Fudy Order & Pay'
            description='QR-ordering product and design system work for in-person hospitality experiences.'
            to='/docs/fudy'
            image='/fudy/story-reference-1.jpg'
            imageAlt='Fudy Order and Pay customer interface preview'
          />
        </div>
      </section>

      <section className='case-studies text-left'>
        <p>Selected work</p>

        <div className='case-studies__list'>
          <CaseStudy
            title='Tempus'
            description={[
              'Tempus operates in the Web3 space. I contributed as a contractor to three DeFi projects: Nostra, WenWin, and Raft.',
              'Nostra is a decentralized exchange for lending, borrowing and trading crypto. WenWin is a blockchain lottery on Ethereum network and Raft is a platform to deposit collateral and earn yield.',
              'Web3 design was challenging since most UX patterns did not exist yet. I focused on incorporating gamification elements like token rewards while ensuring the interfaces remained intuitive for everyday users.',
            ]}
            images={[
              {
                src: '/moon/showcase.png',
                alt: 'Placeholder preview for Tempus case study',
              },
              {
                src: '/fudy/customer-interface.jpg',
                alt: 'Placeholder interface image for Tempus case study',
              },
              {
                src: '/fudy/product-view.jpg',
                alt: 'Placeholder product image for Tempus case study',
              },
              {
                src: '/fudy/product-view.jpg',
                alt: 'Placeholder product image for Tempus case study',
              },
              {
                src: '/fudy/product-view.jpg',
                alt: 'Placeholder product image for Tempus case study',
              },
              {
                src: '/moon/showcase.png',
                alt: 'Placeholder preview for Tempus case study',
              },
              {
                src: '/fudy/customer-interface.jpg',
                alt: 'Placeholder interface image for Tempus case study',
              },
              {
                src: '/fudy/product-view.jpg',
                alt: 'Placeholder product image for Tempus case study',
              },
              {
                src: '/fudy/product-view.jpg',
                alt: 'Placeholder product image for Tempus case study',
              },
              {
                src: '/fudy/product-view.jpg',
                alt: 'Placeholder product image for Tempus case study',
              },
            ]}
          />

          <CaseStudy
            title='Freya Foodbar'
            description={[
              'Designed and developed a website with WordPress and Elementor Page builder.',
              'Additionally, I developed a dynamic daily menu system using ACF that supports distinct menu structures for different audiences.',
              'The feature allows staff to manage daily menus from a central options page while custom PHP logic shows the current week and hides past days automatically.',
            ]}
            images={[
              {
                src: '/fudy/ordering-flow.jpg',
                alt: 'Placeholder website preview for Freya Foodbar',
              },
              {
                src: '/moon/showcase.png',
                alt: 'Placeholder page layout for Freya Foodbar',
              },
            ]}
          />

          <CaseStudy
            title='Motiveer'
            description={[
              'Motiveer is an AI-powered employee development platform. I designed a landing page and created visual content with Midjourney.',
              'I used the Niji 5 model for anime-driven, character-focused compositions that matched the brand direction.',
              'With the UI design, I wanted Motiveer to feel lightweight and promising to visitors.',
            ]}
            images={[
              {
                src: '/moon/showcase.png',
                alt: 'Placeholder landing page preview for Motiveer',
              },
              {
                src: '/fudy/story-reference-1.jpg',
                alt: 'Placeholder visual design image for Motiveer',
              },
              {
                src: '/fudy/story-reference-2.jpg',
                alt: 'Placeholder brand illustration image for Motiveer',
              },
            ]}
          />

          <CaseStudy
            title='Fiizy'
            description={[
              'Fiizy worked on fintech products, primarily as a marketplace for financial products and services.',
              'I was mainly doing UI design for lending applications in different markets, alongside coding and designing HTML emails.',
              'Later, I contributed to Fiizy\'s shift into Buy Now, Pay Later by designing a checkout concept and a rebranded website for the product.',
            ]}
            images={[
              {
                src: '/fudy/customer-interface.jpg',
                alt: 'Placeholder fintech interface preview for Fiizy',
              },
              {
                src: '/moon/showcase.png',
                alt: 'Placeholder product screen for Fiizy',
              },
              {
                src: '/fudy/variable-modes-theming.jpg',
                alt: 'Placeholder checkout concept for Fiizy',
              },
            ]}
          />
        </div>
      </section>
    </div>
  )
}

export default Home