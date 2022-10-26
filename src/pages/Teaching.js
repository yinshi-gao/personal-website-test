import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/teaching.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Teaching = () => (
  <Main
    title="Research"
    description="Learn about Yinshi Gao's teaching experience"
  >
    <article className="post markdown" id="teaching">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/teaching">Teaching</Link></h2>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Teaching;
