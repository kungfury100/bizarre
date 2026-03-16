const moonImageShowcase = '/moon/showcase.png'
const moonImageContextualModes = '/moon/contextualmodes.png'
const moonImageSemanticTokens = '/moon/semantictokens.png'
const moonImageComponentTokens = '/moon/componenttokens.png'
const moonImageColorModes = '/moon/colormodes.png'
const moonImageTagProperties = '/moon/tagproperties.jpg'


function Moon() {
  return (
    <div>
      <div className='page-stack text-left'>
        <h1>Moon Design System</h1>
        <div className='page-stack--tight'>
          <h2>Snapshot</h2>
          <p>
            MDS is a design system used across products at Yolo Group. It was created to give design and engineering one shared language and a more consistent way of working. The scope included design tokens, components, templates, documentation, and adoption across teams.
          </p>
          <p>
            In shaping Moon, we also looked at mature systems like <span>Uber Base</span>, <span>Shopify Polaris</span>, <span>Atlassian Design System</span> and <span>eBay Evo</span> to understand how leading companies structure governance, tokens and documentation. These references helped us benchmark our ambition.
          </p>
          <p>
            My role was Lead Product Designer from 2024 to 2025.
          </p>
        </div>
        <div className='page-stack--tight'>
          <div className='container'>
            <img
              src={moonImageShowcase}
              alt='Moon design system screenshot'
              className='case-study-image'
              loading='lazy'
            />
          </div>
          <p className='subtitle'>
            Showcase
          </p>
        </div>
        <div className='page-stack--tight'>
          <h2>Focus of this case</h2>
          <p>I'll walk through:</p>
          <ul>
              <li>the business goal and the main challenge</li>
              <li>how we validated design decisions</li>
              <li>how cross-functional collaboration shaped the outcome</li>
          </ul>
        </div>
        <div className='page-stack--tight'>
          <h2>What was delivered</h2>
          <p>
            In practical terms, the work resulted in a shared system that teams could use, contribute to, and scale.
          </p>
          <ul>
            <li>
              a design system architecture that supported consistency across <a href='https://ui.moondesignsystem.com/' target='_blank' rel='noopener noreferrer'>CSS</a>, <a href='https://react.moondesignsystem.com/' target='_blank' rel='noopener noreferrer'>React</a>, and <a href='https://liveview.moondesignsystem.com/' target='_blank' rel='noopener noreferrer'>LiveView</a>
            </li>
            <li>
              documentation built with <a href='https://moondesignsystem.com/' target='_blank' rel='noopener noreferrer'>Next.js</a> that showed real components and usage guidance for designers and developers
            </li>
            <li>
              collaboration patterns that helped align designers and engineers across different product teams
            </li>
            <li>
              supporting tools and libraries, including the <a href='https://www.figma.com/community/plugin/1511418798684061954/variables-management' target='_blank' rel='noopener noreferrer'>Variables Management</a> plugin and public <a href='https://www.figma.com/@moon_design' target='_blank' rel='noopener noreferrer'>Figma libraries</a>
            </li>
          </ul>
        </div>
        <div className='page-stack--tight'>
          <div className='container container--narrow'>
            <img
              src={moonImageTagProperties}
              alt='Moon design system screenshot'
              className='case-study-image case-study-image--narrow'
              loading='lazy'
            />
          </div>
          <p className='subtitle'>
            Tag component properties
          </p>
        </div>
        <div className='page-stack--tight'>
          <h2>What was the business goal and the design challenge?</h2>
          <p>
            The company had multiple products, and teams were building UI components and patterns independently. Over time, this created inconsistent user experiences, more manual work, and a slower product development process.
          </p>
          <p>
            The business goal was simple: <span>increase delivery speed while improving consistency across products.</span>
            From a system perspective, the organization needed one trusted source of truth for design tokens and components.
          </p>
          <p>The challenge was that we weren't starting from scratch. We had:</p>
          <ul>
            <li>
              legacy inconsistencies
            </li>
            <li>strong product-specific needs</li>
            <li>
              multiple active deadlines
            </li>
            <li>
              support for multiple brands and themes
            </li>
          </ul>
          <p>
            If the system became too abstract or too complicated, teams would simply continue building their own solutions. Adoption was just as important as architecture.
          </p>
        </div>
        <div className='page-stack--tight'>
          <div className='container'>
            <img
              src={moonImageContextualModes}
              alt='Moon design system screenshot'
              className='case-study-image'
              loading='lazy'
            />
          </div>
          <p className='subtitle'>
            Contextual modes
          </p>
        </div>
        <div className='page-stack--tight'>
          <h2>Which approaches did I explore, and how did I make a decision?</h2>
            <p>For file architecture, we compared:</p>
            <ul>
              <li>
                one large shared library
              </li>
              <li>
                modular component libraries
              </li>
              <li>
                hybrid approach
              </li>
            </ul>
            <p>
              A single large shared library would be simple at first, but hard to scale. Fully modular libraries would give flexibility, but also risk fragmentation.
            </p>
            <p>
              We chose a hybrid model for file architecture to support the different needs of the products.
              <span>To validate the structure, we tested the libraries in real product scenarios and iterated based on usage.</span>
            </p>
            <p>
              We treated token strategy as a separate but related decision. For tokens, we tested different levels:
            </p>
            <ul>
              <li>primitive level tokens</li>
              <li>semantic level tokens</li>
              <li>component level tokens</li>
            </ul>
        </div>
        <div className='page-stack--tight'>
          <div className='container'>
            <img
              src={moonImageSemanticTokens}
              alt='Moon design system screenshot'
              className='case-study-image'
              loading='lazy'
            />
          </div>
          <p className='subtitle'>
            Semantic tokens
          </p>
        </div>
        <div className='page-stack--tight'>
          <p>
            We decided to use <span>component level tokens</span> to make components easier to control, theme and scale without breaking the whole system:
          </p>
          <p>
            Instead of every component directly using global colors or spacing values, each component has its own token layer, for example:
          </p>
          <ul>
            <li>
                button-background
            </li>
            <li>
              input-border
            </li>
          </ul>
          <p>
            This approach gave us better flexibility for theming and brand variations, especially across multiple products.
          </p>
          <p>
            Our design criteria was very practical and pragmatic:
          </p>
          <ul>
            <li>
              scalability
            </li>
            <li>
              clarity in design-to-dev handoff
            </li>
            <li>
              simple adoption
            </li>
            <li>
              flexibility
            </li>
            <li>
              theming support
            </li>
          </ul>
        </div>
        <div className='page-stack--tight'>
          <div className='container'>
            <img
              src={moonImageComponentTokens}
              alt='Moon design system screenshot'
              className='case-study-image'
              loading='lazy'
            />
          </div>
          <p className='subtitle'>
            Component tokens
          </p>
        </div>
      
        <div className='page-stack--tight'>
          <h2>How did I know it was the right direction?</h2>
          <p>The biggest signal was adoption:</p>
          <ul>
            <li>
              more teams started reusing shared components and token layers
            </li>
            <li>
              design and engineering collaboration became faster and more precise
            </li>
            <li>
              documentation was actively referred to and became a daily working tool
            </li>
          </ul>
          <p>
            Overall, the system became a more stable foundation that teams could rely on. Through mentoring and advocacy, I helped build shared understanding around why design system adoption mattered.
          </p>
        </div>
        <div className='page-stack--tight'>
          <div className='container'>
            <img
              src={moonImageColorModes}
              alt='Moon design system screenshot'
              className='case-study-image'
              loading='lazy'
            />
          </div>
          <p className='subtitle'>
            Color modes
          </p>
        </div>
        <div className='page-stack--tight'>
          <h2>Links & evidence</h2>
          <p>
            A few public references from the work are available below.
          </p>
          <ul>
            <li>
              Documentation: <a href='https://moondesignsystem.com/' target='_blank' rel='noopener noreferrer'>moondesignsystem.com</a>
            </li>
            <li>
              CSS library: <a href='https://ui.moondesignsystem.com/' target='_blank' rel='noopener noreferrer'>ui.moondesignsystem.com</a>
            </li>
            <li>
              Figma plugin: <a href='https://www.figma.com/community/plugin/1511418798684061954/variables-management' target='_blank' rel='noopener noreferrer'>Variables Management</a>
            </li>
            <li>
              Figma libraries: <a href='https://www.figma.com/community/file/1555909167114397510/mds-core' target='_blank' rel='noopener noreferrer'>MDS Core</a> and <a href='https://www.figma.com/community/file/1568872598563722814/mds-complete' target='_blank' rel='noopener noreferrer'>MDS Complete</a>
            </li>
          </ul>
        </div>
        <div className='page-stack--tight'>
          <h2>Reflection</h2>
          <p>
            One key learning is that strong design systems are built through iteration, not one big launch. <span>We couldn't get everything right the first time.</span>
          </p>
          <p>
            Adoption depends heavily on creating a collaborative environment where clear communication and understanding product specifics are essential.
          </p>
          <p>
            If I had the chance to continue the work, the next steps would include:
          </p>
          <ul>
            <li>
              tracking adoption more systematically across teams, measuring usage, contribution and impact
            </li>
            <li>
              integrating AI into the design system workflow
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Moon