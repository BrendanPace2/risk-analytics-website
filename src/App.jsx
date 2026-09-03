import { useEffect } from 'react';
import { setUtahHeaderSettings } from '@utahdts/utah-design-system-header';
import '@utahdts/utah-design-system/css/index.scss';
import './App.css'

import { Routes, Route, useNavigate } from 'react-router-dom';
import { HomeLanding } from './components/websiteContent/HomeLanding';
import { Healthcare } from './components/websiteContent/Healthcare';
import { Example } from './components/websiteContent/Example';
import { Education } from './components/websiteContent/Education';
import { FooterSocialMedia } from './components/FooterSocialMedia';

export function App() {
  const navigate = useNavigate();

  // there maybe be better way this was just one approach I found
  const buildMenuItem = (title, path) => ({
      title: title,
      actionFunctionUrl: {
        url: path,
        actionFunction: (e) => {
          e.preventDefault();
          navigate(path);
        }
      }
    });

  useEffect(() => {
    setUtahHeaderSettings({
      // title: 'My utah.gov Site',
      title: 'Utah Federal Funding Impact',
      domLocationTarget: {
        cssSelector: '#utah-header-target',
      },
      footer: {
        domLocationTarget: {
          cssSelector: '#footer-target',
        }
      },
      mainMenu: {
        menuItems: [
          buildMenuItem('Home', '/'),
          buildMenuItem('Healthcare', '/healthcare'),
          buildMenuItem('Education', '/education'),
          buildMenuItem('Transportation', '/transportation'),
          buildMenuItem('Example', '/example'),
          {
            actionUrl: {
              url: 'https://github.com/Josh-Liddell/risk-analysis-website',
              openInNewTab: true,
            },
            title: 'Code Repository',
          },
          {
            actionMenu: [
              {
                actionUrl: {
                  url: 'https://designsystem.utah.gov/library/utahHeader',
                  openInNewTab: true,
                },
                title: 'Utah Header',
              },
              {
                actionUrl: {
                  url: 'https://designsystem.utah.gov/library/utahFooter',
                  openInNewTab: true,
                },
                title: 'Utah Footer',
              }
            ],
            title: 'Learn More',
          },
        ],
        title: 'Menu'
      }
    });
  }, [navigate]);
  return (
    <>
      <div id="utah-header-target" />

      {/* <main id="main-content" className="px-spacing" style={{ minHeight: '80vh' }}>
      </main>*/}

      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/education" element={<Education />} />
        <Route path="/example" element={<Example />} />
      </Routes>

      {/* <footer id="footer-target" aria-label="page" className="mt-spacing-xl" />*/}

      <footer aria-label="page" className="mt-spacing-xl">
        <FooterSocialMedia />
        <div id="footer-target" />
      </footer>
    </>
  )
}
