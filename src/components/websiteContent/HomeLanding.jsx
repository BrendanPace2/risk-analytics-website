import { Hero } from '../Hero';
import { Boxes } from '../Boxes';
import { Contact } from '../Contact';
import { WelcomeInfo } from '../WelcomeInfo';
import { HomeCards } from '../HomeCards';

export function HomeLanding() {
  return (
    <section className="landing-page-template">
      <Hero>
        <h1>Computational Risk Analytics</h1>
        <p>For data informed governance</p>
      </Hero>
      <WelcomeInfo />
      <HomeCards />
      <Boxes />
      <Contact />
    </section>
  );
}
