function Moon() {
  return (
    <div className='page-stack text-left'>
      <h1>Moon Design System</h1>
      <div className='page-stack--tight'>
        <h2>Snapshot</h2>
        <p>
          MDS is an open-source design system used across products at Yolo Group. It was created to give design and engineering one shared language and way of working. The scope included design tokens, components, templates, documentation and adoption across teams.
        </p>
        <p>
          In shaping Moon, we also looked at mature systems like <span>Uber Base</span>, <span>Shopify Polaris</span>, <span>Atlassian Design System</span> and <span>eBay Evo</span> to understand how leading companies structure governance, tokens and documentation. These references helped us benchmark our ambition.
        </p>
        <p>
          My role was Lead Product Designer from 2024 to 2025.
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
        <h2>What was the business goal and the design challenge?</h2>
        <p>
          Company had multiple products. Teams were building UI components and patterns independently. Over time, this created inconsistent user experiences, manual work and slower product development process.
        </p>
        <p>
          So the business goal was simple: <span>increase delivery speed while improving consistency across products.</span>
          From a system perspective, organization needed one trusted source of truth for design tokens and components.
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
            Single large file would be simple at first, but hard to scale. Fully modular libraries would give flexibility, but also risk fragmentation.
          </p>
          <p>
            We chose a hybrid model for file architecture, satisfying the diverse needs of the products.
            <span>To validate this structure, we constantly tested those libraries in real scenarios and iterated based on usage.</span>
          </p>
          <p>
            For tokens, we tested different levels:
          </p>
          <ul>
            <li>primitive level tokens</li>
            <li>semantic level tokens</li>
            <li>component level tokens</li>
          </ul>
      </div>
      <div className='page-stack--tight'>
        <p>
          We decided to use <span>component level tokens</span> to make components easier to control, theme and scale without breaking the whole system:
        </p>
        <p>
          Instead of every component directly using glocal colors or spacings, each component has its own unique layer, like
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
        <h2>How did I know it was the right direction?</h2>
        <p>The biggest signal was adoption:</p>
        <ul>
          <li>
            more teams started reusing shared components and token layers
          </li>
          <li>
            design and engineering collaboration improved became faster and more precise
          </li>
          <li>
            documentation was being refered to, it became a daily working tool
          </li>
        </ul>
        <p>
          Overall, the system became a stable platform that allowed products to rely on. Through mentoring and advocacy, it became clear to all teams why design system adaption is highly important.
        </p>
      </div>
      <div className='page-stack--tight'>
        <h2>Reflection</h2>
        <p>
          One key learning is that strong design systems are built through iteration, not one big launch. <span>We couldn't get everything right the first time.</span>
        </p>
        <p>
          Adotpion depends a lot on creating a collaborative environment, where communication and understanding product specifics is the key.
        </p>
        <p>
          If I had the change to continue the work, next steps would include:
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
  )
}

export default Moon