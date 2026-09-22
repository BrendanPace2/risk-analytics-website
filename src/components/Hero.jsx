import { Button } from '@utahdts/utah-design-system';

export function Hero({ children }) {
  return (
    <div className="hero">
      {/* <div className="home-banner-title">USU<br />Analytics<br />Team</div>*/}
      <div className="home-banner-sidebar">
        {children}
        <div className="hero-buttons">
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
                  const element = document.getElementById('boxes');
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

  );
}
