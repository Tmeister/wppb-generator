import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description:
    'My Toolkit: Trusted Software, Favorite Gadgets, and Top Recommendations',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="My Toolkit: Trusted Software, Favorite Gadgets, and Top Recommendations"
      intro="Discover the tools that power my day-to-day — from software solutions that streamline my workflow to gadgets that add joy to everyday tasks. Here’s a curated list of my tried and true recommendations that you might find valuable, too."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool
            title="14” MacBook Pro, M1 Max, 16GB RAM (2021)"
            href="https://76.digital/mbp"
          >
            Apple&apos;s 2021 release features the powerful M1 Max chip and 16GB
            of RAM, offering impressive processing speeds and a vibrant 14-inch
            Liquid Retina XDR display.
          </Tool>
          <Tool title="TOPSKY Electric Adjustable Standing Desk" href="">
            A versatile standing desk solution that allows for smooth height
            adjustments with the touch of a button promoting a healthier work
            environment by encouraging regular position changes from sitting to
            standing.
          </Tool>
          <Tool
            title="4K SAMSUNG Monitor 28'"
            href="https://76.digital/samsung-28"
          >
            A Samsung&apos;s 28-inch 4K UHD monitor provides a high-resolution
            display and detailed image quality, enhancing productivity and
            visual experiences for gaming or multimedia applications.
          </Tool>
          <Tool
            title="Plugable Universal Docking Station"
            href="https://76.digital/dock"
          >
            A device that enables the connection of multiple peripherals to your
            laptop or PC through a single USB connection, simplifying the setup
            and providing a more organized workstation.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="PHPStorm" href="https://76.digital/phpstorm">
            A popular integrated development environment (IDE) specifically
            designed for PHP developers, offering a range of tools and features
            that streamline the coding process, including code completion and
            debigging functionalities.
          </Tool>
          <Tool title="VSCode" href="https://76.digital/vscode">
            A free, open-source code editor developed by Microsoft, known for
            its flexibility and supported by a wide variety of extensions,
            making it adaptable to various programming languages and frameworks.
          </Tool>
          <Tool title="iTerm2" href="https://76.digital/iterm2">
            A macOS terminal replacement that offers enhanced functionality over
            the default terminal, including features such as split panes,
            search, and autocomplete.
          </Tool>
          <Tool title="Tinkerwell" href="https://76.digital/tinkerwell">
            A magical code editor that allows developers to run PHP code
            instantly, locally or via SSH, offering a simplified and rapid
            development workflow.
          </Tool>
          <Tool title="TablePlus" href="https://76.digital/tableplus">
            A modern, native tool with a clean user interface that allows
            developers to manage and organize databases more efficiently,
            supporting a variety of database types.
          </Tool>
          <Tool title="Laravel Valet" href="https://76.digital/valet">
            A Laravel development environment for Mac minimalists, offering a
            great way to swiftly set up a robust development environment with
            fewer resources.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma" href="https://76.digital/figma">
            A collaborative interface design tool that allows teams to work
            together in real time, facilitating the creation of digital design
            projects, from wireframes to interactive prototypes.
          </Tool>
        </ToolsSection>
        <ToolsSection title="WordPress Themes">
          <Tool title="Hello Elementor" href="https://76.digital/hello-theme">
            A lightweight and highly customizable WordPress theme designed to
            work seamlessly with the Elementor page builder, offering a canvas
            for designers to create their websites.
          </Tool>
          <Tool title="Astra" href="https://76.digital/wpastra">
            A popular WordPress theme is known for its speed and lightweight
            structure, offering a range of pre-designed templates and high
            customization options through various page builders.
          </Tool>
          <Tool title="GeneratePress" href="https://76.digital/generatepress">
            A fast, powerful, and easy-to-use WordPress theme offering a focus
            on speed and usability, providing a stable foundation for any
            website project.
          </Tool>
          <Tool title="Sage by Roots" href="https://76.digital/sage">
            A starter theme for WordPress that helps developers build
            well-structured themes while utilizing modern development tools and
            practices, providing a better workflow and advanced capabilities.
          </Tool>
        </ToolsSection>
        <ToolsSection title="WordPress Plugins">
          <Tool title="WP Rocket" href="https://76.digital/wp-rocket">
            A caching plugin for WordPress that helps to improve website loading
            times, enhancing site performance and user experience through
            various optimization features.
          </Tool>
          <Tool
            title="ACF (Advanced Custom Fields)"
            href="https://76.digital/acf"
          >
            A WordPress plugin that allows users to add and display custom
            fields on their website, offering a user-friendly interface and
            enhancing the content management process.
          </Tool>
          <Tool title="Elementor Pro" href="https://76.digital/elementor">
            A premium page builder plugin for WordPress, offering a
            drag-and-drop interface that allows users to create complex layouts
            and design elements without any coding knowledge.
          </Tool>
          <Tool
            title="JetEngine (Crocoblock)"
            href="https://76.digital/crocoblock"
          >
            A dynamic content plugin that extends the functionality of
            Elementor, offering tools to create custom post types, custom
            fields, and display them dynamically on the website.
          </Tool>
          <Tool title="Rank Math" href="https://76.digital/rankmath">
            A WordPress SEO plugin that helps to optimize website content for
            search engines, offering a range of features including keyword
            analysis and SEO performance tracking.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="RayCast" href="https://76.digital/raycast">
            A productivity tool that streamlines the process of accessing
            applications, documents, and executing commands on macOS through a
            spotlight-like search interface, aiming to boost efficiency and save
            time for users.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
