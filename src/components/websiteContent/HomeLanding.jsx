import { Accordion, ExternalLink } from '@utahdts/utah-design-system';
import { Button, Tooltip } from '@utahdts/utah-design-system';
// import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { CardLink } from '../CardLink';
import { IconsWebsite } from '../IconsWebsite';

export function HomeLanding() {
  const referenceElement = useRef();
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
              onClick={() => { /* ... do something ... */ }}
            >
              Our process
            </Button>
          </div>
        </div>
      </div>

      <main id="main-content" className="px-spacing" style={{ minHeight: '80vh' }}>
        <h1 className="text-center my-spacing">Welcome</h1>
        <p>What should this page look like?</p>

        {/* <Button
          className="button icon-button button--outlined"
          onClick={() => { }}
          type="button"
        >
          <span className="utds-icon-before-gear" aria-hidden="true" />
          <span className="visually-hidden">Gear Icon</span>
        </Button>*/}

      </main>


      <div className="section2">
        <CardLink />
        <CardLink />
        <CardLink />
      </div>

      <div className="section3">
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

      </div>

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
