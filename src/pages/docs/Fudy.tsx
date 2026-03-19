const fudyImageCover = '/fudy/story-reference-1.jpg'
const fudyImageCustomerInterface = '/fudy/customer-interface.jpg'
const fudyImageOrderingFlow = '/fudy/ordering-flow.jpg'
const fudyImageProductView = '/fudy/product-view.jpg'
const fudyImageComponentVariants = '/fudy/component-variants.jpg'
const fudyImageComponentProperties = '/fudy/component-properties.jpg'
const fudyImageStylesToVariablesMigration = '/fudy/styles-to-variables-migration.jpg'
const fudyImageAtomicComponent = '/fudy/atomic-component.jpg'
const fudyImageModularDesignModules = '/fudy/modular-design-modules.jpg'
const fudyImageVariableModesTheming = '/fudy/variable-modes-theming.jpg'

function Fudy() {
  return (
    <div>
      <div className='page-stack text-left'>

        <h1>Fudy Order &amp; Pay</h1>

        <div className='page-stack--tight'>
          <h2>Snapshot</h2>
          <p>
            I joined Fudy in the middle of 2023 as Lead Product Designer and led the product design of Order &amp; Pay, a QR-ordering product for restaurants, bars, and other venues.
          </p>
          <p>
            At the time, the company was transitioning from a food delivery service into a hospitality sales and marketing platform. Earlier customer and restaurant staff interactions had been entirely online. With Order &amp; Pay, we were designing for an immediate, in-person dining experience instead.
          </p>
          <p>
            My work covered both product UI and system foundations. I designed web apps for customers and kitchens, created QR sticker templates, and built the basis of a component library with design tokens so the product could scale as a white-label platform.
          </p>
          <p>
            This case study focuses on the design system work behind that product: why it was needed, how the architecture took shape, and how product design requirements influenced the system decisions.
          </p>
        </div>

        <div className='page-stack--tight'>
          <div className='container'>
            <img
              src={fudyImageCover}
              alt='Migration from styles to variables in Figma'
              className='case-study-image'
              loading='lazy'
            />
          </div>
        </div>

        <div className='page-stack--tight'>
          <h2>Focus of this case</h2>
          <p>I&apos;ll walk through:</p>
          <ul>
            <li>the business goal and the main design challenge</li>
            <li>how Order &amp; Pay product needs shaped the design system</li>
            <li>how token architecture supported white-label theming and reuse</li>
          </ul>
        </div>

        <div className='page-stack--tight'>
          <h2>What was delivered</h2>
          <p>
            In practice, this work resulted in both a shipped product experience and a stronger system behind it.
          </p>
          <ul>
            <li>a QR-ordering experience designed for customers in physical hospitality venues</li>
            <li>supporting interfaces for restaurant and kitchen operations</li>
            <li>a component library structure with variables and reusable patterns</li>
            <li>a token model that supported theming and white-label product direction</li>
            <li>supporting assets such as QR code sticker templates for venue use</li>
          </ul>
        </div>

        <div className='page-stack--tight'>
          <div className='media-grid media-grid--three-up'>
            <div className='container'>
              <img
                src={fudyImageCustomerInterface}
                alt='Fudy Order and Pay customer interface'
                className='case-study-image'
                loading='lazy'
              />
            </div>
            <div className='container'>
              <img
                src={fudyImageOrderingFlow}
                alt='Fudy Order and Pay restaurant ordering flow'
                className='case-study-image'
                loading='lazy'
              />
            </div>
            <div className='container'>
              <img
                src={fudyImageProductView}
                alt='Fudy Order and Pay product view'
                className='case-study-image'
                loading='lazy'
              />
            </div>
          </div>
          <p className='subtitle'>
            Order &amp; Pay
          </p>
        </div>

        <div className='page-stack--tight'>
          <h2>What was the business goal and the design challenge?</h2>
          <p>
            The business goal was to help Fudy expand from food delivery into hospitality software. That meant launching a new Order &amp; Pay experience for real-world venues while also giving the company a product foundation it could reuse and adapt.
          </p>
          <p>
            The design challenge was that the existing system was not ready for that shift. Like many early-stage products, it had been assembled quickly during fast delivery cycles, and the lack of structure was already slowing the team down.
          </p>
          <p>
            The challenge was made harder by separate codebases across iOS, Android, and web. A design system should act as a shared source of truth that speeds up product development. In this case, it had become the opposite.
          </p>
        </div>

        <div className='page-stack--tight'>
          <div className='media-grid media-grid--split'>
            <div className='container'>
              <img
                src={fudyImageComponentVariants}
                alt='Fudy component variants'
                className='case-study-image'
                loading='lazy'
              />
            </div>
            <div className='container'>
              <img
                src={fudyImageComponentProperties}
                alt='Fudy component properties'
                className='case-study-image'
                loading='lazy'
              />
            </div>
          </div>
          <p className='subtitle'>
            Component properties
          </p>
        </div>

        <div className='page-stack--tight'>
          <h2>Which approaches did I explore, and how did I make a decision?</h2>
          <p>
            We quickly realized that rebuilding would be more effective than trying to salvage the existing component library. A major catalyst was the launch of Figma Variables, which finally gave us the right technical foundation for a more scalable system.
          </p>
          <p>
            That decision was also shaped by the product itself. Order &amp; Pay was not just another interface to style. It introduced new flows, new venue-specific requirements, and stronger theming needs. The system had to support real product work, not exist separately from it.
          </p>
        </div>

        <div className='page-stack--tight'>
          <h2>Design tokens and variables</h2>
          <p>
            Figma Variables are the representation of design tokens, and we wanted to create a shared language across the codebase. Variables made it possible to build the layered token structure that a white-label platform required.
          </p>
          <p>
            The previous design system relied on Figma Styles for color and typography, but those did not translate well into code. The first step was migrating that setup into variables.
          </p>
          <p>
            I created a collection for base color variables and migrated the existing values into that structure. Each color was organized into subcollections and expanded into ramps inspired by Material Design.
          </p>
        </div>

        <div className='page-stack--tight'>
          <div className='container'>
            <img
              src={fudyImageStylesToVariablesMigration}
              alt='Migration from styles to variables in Figma'
              className='case-study-image'
              loading='lazy'
            />
          </div>
          <p className='subtitle'>
            Migration from Styles to Variables
          </p>
        </div>

        <div className='page-stack--tight'>
          <p>
            The next step was creating semantic variables and naming them by purpose to show how and where they were used. I grouped tokens by usage area: surfaces, buttons, text, icons, cards, labels, forms, alerts, and more.
          </p>
          <p>
            Within each group, I further organized tokens by specific usage, for example <span>primary-button-surface</span>, <span>primary-button-text</span>, and <span>primary-button-icon</span>.
          </p>
          <p>
            It was tempting to stay minimal, but in practice it proved wiser to have more tokens rather than fewer. That gave the system more flexibility for theming, product variation, and future reuse beyond a single interface.
          </p>
        </div>

        <div className='page-stack--tight'>
          <h2>Atomic design</h2>
          <p>
            I adopted Atomic Design principles to break the UI into small, reusable parts. At the atomic level, I defined text styles, icons, and elevations. Atoms were combined into molecules, and multiple molecules formed organisms.
          </p>
        </div>

        <div className='page-stack--tight'>
          <div className='container'>
            <img
              src={fudyImageAtomicComponent}
              alt='Atomic component example'
              className='case-study-image'
              loading='lazy'
            />
          </div>
          <p className='subtitle'>
            Atomic component
          </p>
        </div>

        <div className='page-stack--tight'>
          <p>
            I defined text styles, icons, and elevations as atoms. Atoms were then combined into molecules through nested instances. A button molecule, for example, contained text and icon atoms.
          </p>
          <p>
            Multiple molecules then formed an organism. Two buttons nested in an auto-layout container became one simple example of that logic.
          </p>
          <p>
            This made components easier to reuse while keeping the interface consistent. It also gave the team a shared vocabulary for understanding how the system was constructed across both product design and implementation.
          </p>
        </div>

        <div className='page-stack--tight'>
          <h2>Modular design</h2>
          <p>
            Modular design breaks the system into smaller parts, where each module serves a specific function or displays a specific type of content. These modules can then be combined and reused across the UI.
          </p>
          <p>
            Many of the modules also contained nested instances such as atoms and molecules, which could be swapped out as needed. That made the system easier to maintain, debug, and scale while still supporting different product contexts.
          </p>
        </div>

        <div className='page-stack--tight'>
          <div className='container'>
            <img
              src={fudyImageModularDesignModules}
              alt='Modular design system modules'
              className='case-study-image'
              loading='lazy'
            />
          </div>
          <p className='subtitle'>
            Modules
          </p>
        </div>

        <div className='page-stack--tight'>
          <h2>Theming</h2>
          <p>
            Variables and tokens allowed us to create modes, or themes, with much less friction. That aligned directly with the business goal of giving hospitality clients room to preserve their own brand identity.
          </p>
          <p>
            Some business users preferred light mode, while others preferred dark mode depending on their environment. Many venues also wanted to maintain a recognizable brand experience when customers used the product on site. That made theming a product requirement, not just a visual preference.
          </p>
        </div>

        <div className='page-stack--tight'>
          <div className='container'>
            <img
              src={fudyImageVariableModesTheming}
              alt='Theming with variable modes'
              className='case-study-image'
              loading='lazy'
            />
          </div>
          <p className='subtitle'>
            Theming with variable modes
          </p>
        </div>

        <div className='page-stack--tight'>
          <h2>Impact</h2>
          <p>
            The new design system gave the team a more reliable foundation for shipping Order &amp; Pay and for extending the product further. It improved consistency, made decisions easier to communicate across design and development, and created a clearer base for theming and reuse.
          </p>
          <p>
            Just as importantly, it connected system thinking to a real product outcome. The component library was not an isolated internal exercise. It was shaped by the needs of a live hospitality product and made that product easier to design and evolve.
          </p>
        </div>

        <div className='page-stack--tight'>
          <h2>Conclusion</h2>
          <p>
            I later came across Josh Clark&apos;s article, <a target='_blank' rel='noopener noreferrer' href='https://bigmedium.com/ideas/design-system-pace-layers-slow-fast.html'>Ship Faster by Building Design Systems Slower</a>, which introduced the idea of Pace Layers. Products move quickly, while design systems move more slowly and provide stability. When the system is poorly built, it slows the product layer down instead of supporting it.
          </p>
          <p>
            That principle matched this project closely. I had seen first-hand what happens when a system is rushed and the product ends up carrying the cost.
          </p>
          <p>
            What made this project valuable was the combination of system design and product design. The work was not only about building cleaner foundations. It was about building the right foundations for a new in-person ordering experience and a product the team could continue to scale.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Fudy