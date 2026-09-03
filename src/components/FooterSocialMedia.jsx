import { FooterSocialMediaBar } from '@utahdts/utah-design-system';
import { IconsWebsite } from './IconsWebsite';

export function FooterSocialMedia() {
  return (
    <FooterSocialMediaBar title="Connect with us">
      <a
        href="mailto:caleb.dissel@gmail.com"
        className="icon-link"
        target="_blank"
        rel="noreferrer"
      >
        <span className="utds-icon-before-mail" aria-hidden="true" />
        <span className="visually-hidden">Email us, opens in a new tab</span>
      </a>
      <a
        href="https://github.com/josh-liddell/risk-analytics-website"
        className="icon-link"
        target="_blank"
        rel="noreferrer"
      >
        <IconsWebsite.IconGitHub />
        <span className="visually-hidden">Utah Design System Git Hub, opens in a new tab</span>
      </a>
    </FooterSocialMediaBar>
  );
}
