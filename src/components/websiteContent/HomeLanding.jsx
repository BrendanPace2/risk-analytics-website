// import { Accordion } from '@utahdts/utah-design-system';

// export function Home() {
//   return (
//     <>
//     </>
//   );
// }
/* eslint-disable @stylistic/max-len */
import { Accordion, ExternalLink } from '@utahdts/utah-design-system';
// import { Link } from 'react-router-dom';
// import layoutScreenshot from '../../../static/images/screenshots/layout.webp';
// import { LightBox } from '../lightbox/LightBox';
// import { pageUrls } from '../routing/pageUrls';
// import { IconsWebsite } from './IconsWebsite';
// import { WcagRulesBlock } from './guidelines/WcagRulesBlock';

export function HomeLanding() {
  return (
    <section className="landing-page-template">
      <div className="home-banner">
        <div className="home-banner-title">USU<br />Analytics<br />Team</div>
      </div>

      <main id="main-content" className="px-spacing" style={{ minHeight: '80vh' }}>
        <h1 className="text-center my-spacing">Welcome</h1>
        <p>What should this page look like?</p>
      </main>
    </section>
  );
}
