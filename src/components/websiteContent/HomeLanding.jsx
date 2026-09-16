import { Accordion, ExternalLink } from '@utahdts/utah-design-system';
import { Button, Tooltip } from '@utahdts/utah-design-system';
// import { Link } from 'react-router-dom';
// import { useRef } from 'react';
import { CardLink } from '../CardLink';
import { IconsWebsite } from '../IconsWebsite';
import utLandscape from '../../assets/ut-landscape.jpg';

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
              color="secondary"
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
              color="secondary"
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

          {/* <CardLink />*/}
          {/* <a
            className="action-card action-card--primary-color"
            href="/healthcare"
          >
            <div className="action-card__title">
                <h3>Check it out</h3>
                <span className="button--icon button--icon-right">
                  <span
                    className="utds-icon-before-arrow-right"
                    aria-hidden="true">
                  </span>
                </span>
            </div>
            <div className="action-card__body">
                Learn how to use our systems for decision-making
            </div>
          </a>*/}
        </div>


      </div>


      <div className="section2">
      </div>

      <div id="our-process-section" className="methods">
        <h1 className="my-spacing">How it works</h1>
        <p>Here is some generic text that makes no sense but it would be nice to have something here that says something useful about what our methods are for our work and simulations</p>
        <button
          class="button button--primary-color button--large"
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

      <div className="section2">
      </div>



      {/* <div className="section3">
        <h1>Something Interesting</h1>
        <p>More information here</p>
        <div className="card p-spacing-xl">
          <div className="card__title">Title</div>
          <p>Sed ut perspiciatis unde omnis iste natus error.</p>
          <div className="flex justify-end">
            <button type="button" className="button">Contact Us</button>
            <button
              type="button"
              className="button button--solid ml-spacing"
            >
              <span>See More</span>
              <span className="button--icon button--icon-right">
                <span
                  className="utds-icon-before-arrow-right"
                  aria-hidden="true"
                ></span>
              </span>
            </button>
          </div>
        </div>
        <div className="card p-spacing-xl">
          <div className="card__title">Title</div>
          <p>Sed ut perspiciatis unde omnis iste natus error.</p>
          <div className="flex justify-end">
            <button type="button" className="button">Contact Us</button>
            <button
              type="button"
              className="button button--solid ml-spacing"
            >
              <span>See More</span>
              <span className="button--icon button--icon-right">
                <span
                  className="utds-icon-before-arrow-right"
                  aria-hidden="true"
                ></span>
              </span>
            </button>
          </div>
        </div>

      </div>*/}

      {/* contact section */}
      <div className="contact mt-spacing-xl">
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
