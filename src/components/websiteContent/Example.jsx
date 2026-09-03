import { Accordion } from '@utahdts/utah-design-system';

export function Example() {
  return (
    <main id="main-content" className="px-spacing" style={{ minHeight: '80vh' }}>
      <h1 className="text-center my-spacing-l">React + Vite</h1>
      <p className="text-center">
        The header and footer are configured immediately after the initial render.<br />
        Check the <code>App.jsx</code> file for the full code.<br />
        Find more information on
        the <a href="https://designsystem.utah.gov" target="_blank">
          Utah Design System Website{''}
          <span className="utds-new-tab-link-a11y">
            <span className="visually-hidden">, opens in a new tab</span>
            <span className="utds-icon-after-external-link" aria-hidden="true"></span>
          </span>
        </a>.
      </p>
      <h2 className="text-center my-spacing">CSS</h2>
      <p className="text-center">
        The CSS imported from <code>'./App.css'</code>.<br />
        The design system colors are overridden.<br />
        Find more information on
        the <a href="https://designsystem.utah.gov/resources/gettingStartedDeveloper#h3-css-color-overrides" target="_blank">
          Getting Started for Developers Page{''}
          <span className="utds-new-tab-link-a11y">
            <span className="visually-hidden">, opens in a new tab</span>
            <span className="utds-icon-after-external-link" aria-hidden="true"></span>
          </span>
        </a>
      </p>
      <h2 className="text-center my-spacing">Learn More USU team!</h2>
      <div className="flex gap justify-center mb-spacing-xl">
        <a
          className="action-card action-card--primary-color action-card--solid"
          href="https://designsystem.utah.gov/library/utahHeader"
          target="_blank"
        >
          <div className="action-card__title">
            <h3>Utah Header</h3>
            <span className="button--icon button--icon-right">
              <span
                className="utds-icon-before-arrow-right"
                aria-hidden="true">
              </span>
            </span>
          </div>
          <div className="action-card__body">
            Learn how to implement the Utah Header.
          </div>
        </a>
        <a
          className="action-card action-card--secondary-color"
          href="https://designsystem.utah.gov/library/utahFooter"
          target="_blank"
        >
          <div className="action-card__title">
            <h3>Utah Footer</h3>
            <span className="button--icon button--icon-right">
              <span
                className="utds-icon-before-arrow-right"
                aria-hidden="true">
              </span>
            </span>
          </div>
          <div className="action-card__body">
            Learn how to implement the Utah Footer.
          </div>
        </a>
      </div>
      <div className="px-spacing-xl">
        <Accordion
          headerClassName="button--solid"
          headerContent={<span>Accordion</span>}
          headingLevel={2}
          id="accordion"
          isOpen={true}
        >
          <p>
            This component has been imported form the Utah Design System:<br />
            <code>import &#123; Accordion &#125; from '@utahdts/utah-design-system';</code><br />
          </p>
          <span>
            Find more information on
            the <a href="https://designsystem.utah.gov/library/components/containers/accordion" target="_blank">
              Accordion Page{''}
              <span className="utds-new-tab-link-a11y">
                <span className="visually-hidden">, opens in a new tab</span>
                <span className="utds-icon-after-external-link" aria-hidden="true"></span>
              </span>
            </a>.
          </span>
        </Accordion>
      </div>
    </main>
  );
}
