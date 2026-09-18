// import { Accordion, ExternalLink } from '@utahdts/utah-design-system';
import { Button, Tooltip } from '@utahdts/utah-design-system';
// import { Link } from 'react-router-dom';
// import { useRef } from 'react';
// import { CardLink } from '../CardLink';
import { IconsWebsite } from '../IconsWebsite';
// import utLandscape from '../../assets/ut-landscape.jpg';
import healthImg from '../../assets/health.jpg';
import educationImg from '../../assets/education.jpg';
import transportationImg from '../../assets/transportation.jpg';

export function HomeLanding() {
  // const referenceElement = useRef();
  return (
    <section className="landing-page-template">
      <div className="home-banner">
        {/* <div className="home-banner-title">USU<br />Analytics<br />Team</div>*/}
        <div className="home-banner-sidebar">
          <h1>Computational Risk Analytics</h1>
          <p style={{ fontStyle: 'italic' }}>For data informed governance</p>
          <div className="banner-buttons">
            <Button
              appearance="outlined"
              color="none"
              id="button-sandbox-example-id"
              onClick={() => window.open('https://en.wikipedia.org/wiki/Monte_Carlo_method', '_blank')}
            >
              Learn More
              <span className="utds-new-tab-link-a11y">
                <span className="visually-hidden">, opens in a new tab</span>
                <span className="utds-icon-after-external-link" aria-hidden="true"></span>
              </span>
            </Button>
            <Button
              appearance="solid"
              color="primary"
              id="button-sandbox-example-id"
              onClick={() => {
                // Find the element on the page
                    const element = document.getElementById('our-process-section');
                    if (element) {
                      // Scroll smoothly down to it
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
              }}
            >
              Our process
            </Button>
          </div>
        </div>
      </div>

      <div className='welcome'>
        <div className="welcome-text">
          <h1 className="my-spacing">Welcome</h1>
          <p>We create tools for assessing impact of budget changes on people and programs</p>
          <p>We create tools for assessing impact of budget changes on people and programs. We create tools for assessing impact of budget changes on people and programs. We create tools for assessing impact of budget changes on people and programs. We create tools for assessing impact of budget changes on people and programs. We create tools for assessing impact of budget changes on people and programs. We create tools for assessing impact of budget changes on people and programs. We create tools for assessing impact of budget changes on people and programs. We create tools for assessing impact of budget changes on people and programs. We create tools for assessing impact of budget changes on people and programs.</p>
          <p>We create tools for assessing impact of budget changes on people and programs. We create tools for assessing impact of budget changes on people and programs. We create tools for assessing impact of budget changes on people and programs. We create tools for assessing impact of budget changes on people and programs.</p>
        </div>

        <div className="welcome-cards">
          <button
            class="button button--solid button--primary-color button--large"
            id="button-sandbox-example-id"
            type="button"
            onClick="() => { /* ... do something ... */ }"
          >
            Explore interesting things here<span class="button--icon button--icon-right">
              <span
                class="utds-icon-after-arrow-right icon"
                aria-hidden="true"
              ></span>
            </span>
          </button>
        </div>
      </div>

      {/* <div className="section2">
        <div className="mycard card-one">
        </div>
        <div className="mycard card-two">
        </div>
        <div className="mycard card-three">
        </div>
      </div>*/}

      <div className="section2">
        <div className="mycard card-one">
          <img src={healthImg} alt="Healthcare" className="card-img" />
          {/* <p className="card-tag">Focus Area</p>*/}
          <h2>Healthcare</h2>
          <p>Assessing the impact of policy and budget changes on healthcare programs.</p>
        </div>

        <div className="mycard card-two">
          <img src={educationImg} alt="Education" className="card-img" />
          {/* <p className="card-tag">Focus Area</p>*/}
          <h2>Education</h2>
          <p>Simulating budget adjustments and resource allocation for schools.</p>
        </div>

        <div className="mycard card-three">
          <img src={transportationImg} alt="Transportation" className="card-img" />
          {/* <p className="card-tag">Focus Area</p>*/}
          <h2>Transportation</h2>
          <p>Evaluating infrastructure costs and transit funding changes.</p>
        </div>
      </div>

      <div id="our-process-section" className="methods">
        {/* <div className="content-width">
          <h1 className="my-spacing">How it works</h1>
          <p>Here is some generic text that makes no sense but it would be nice to have something here that says something useful about what our methods are for our work and simulations</p>
        </div>*/}
        <div className="content-width mt-spacing-l">
          <h2 className="text-center">Valuable Resources</h2>
          <p>
            Does the thought of choosing what colors to use, how much spacing should be applied to elements and what fonts you should use for
            body copy and headlines cause you stress at the beginning of a project?  No idea where to turn to ensure that your content,
            components and layouts are fully accessible?  Well, the Utah Design System can alleviate that stress without a copay.
          </p>
        </div>

        <div className="home-page__color-card-grid content-width">
          <div className="home-page__color-card home-page__card-wide">
            <h3 className="home-page__color-card-title">Color</h3>
            <p>
              How many design systems provide a color picker to assist you in selecting the primary and secondary colors of your site?
              How many show you in real-time what your components will look like once you&apos;ve selected these colors? Do they tell you if
              your color selections are accessible? With a resounding yes, the Utah Design System does all of this. Starting to feel better?
            </p>
          </div>

          <div className="home-page__color-card home-page__card-narrow home-page__color-card--secondary">
            <h3 className="home-page__color-card-title">Spacing</h3>
            <p>
              To simplify and ensure consistency in implementing spacing, the Utah Design System provides predefined classes and variables.
              These classes and variables can be readily used, making the process of managing spacing more convenient and uniform.
            </p>
          </div>

          <div className="home-page__color-card home-page__card-narrow home-page__color-card--secondary">
            <h3 className="home-page__color-card-title">Typography</h3>
            <p>
              Designed for optimal legibility and strict accessibility, the Utah Design System offers carefully selected
              font families and sizing options to elevate your digital content. To streamline your workflow, we provide
              explicit guidelines and recommended font pairings, ensuring a consistent, professional, and on-brand
              experience across all state applications.
            </p>
          </div>

          <div className="home-page__color-card home-page__card-wide">
            <h3 className="home-page__color-card-title">Accessibility</h3>
            <p>
              All web interfaces at the state of Utah should be designed with accessibility in mind.
              Let&apos;s be honest, many times the best accessibility is not always clear, approachable, or easy. Every component in the Utah Design System has
              been designed with an &quot;accessibility first&quot; approach. The goal is to make accessibility more accessible by providing clear guidance on
              every component. Thoughtful consideration has been give to each component to achieve the best possible user experience for everyone.
            </p>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="content-width">
          <IconsWebsite.IconChatBubbles isHidden />
          <h2 className="text-center mt-spacing-l">Reach out!</h2>
          <p>
            Have a question? Got a suggestion? <a href="mailto:caleb.dissel@gmail.com">Contact us</a>.<br />
            Your feedback will help us make our software better!
          </p>
        </div>
      </div>
    </section>
  );
}
