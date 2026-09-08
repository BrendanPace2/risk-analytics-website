import { Accordion, ExternalLink } from '@utahdts/utah-design-system';
import { Button, Tooltip } from '@utahdts/utah-design-system';
// import { Link } from 'react-router-dom';
import { useRef } from 'react';

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
        more things!!!!!!!
      </div>

      <div className="section3">
        <div class="card p-spacing-xl">
          <div class="card__title">Title</div>
          <p>Sed ut perspiciatis unde omnis iste natus error.</p>
          <div class="flex justify-end">
            <button type="button" class="button">Contact Us</button>
            <button
              type="button"
              class="button button--solid ml-spacing"
            >
              <span>See More</span>
              <span class="button--icon button--icon-right">
                <span
                  class="utds-icon-before-arrow-right"
                  aria-hidden="true"
                ></span>
              </span>
            </button>
          </div>
        </div>

        <a
          class="action-card action-card--primary-color action-card--solid"
          href="/gettingStarted"
        >
          <div class="action-card__title">
              <h3>Getting Started</h3>
              <span class="button--icon button--icon-right">
                <span
                  class="utds-icon-before-arrow-right"
                  aria-hidden="true">
                </span>
              </span>
          </div>
          <div class="action-card__body">
              Learn how to implement the Design System.
          </div>
        </a>



      </div>


    </section>
  );
}
