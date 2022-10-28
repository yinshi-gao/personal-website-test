import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

const Index = () => (
  <Main
    description={"Yinshi Gao's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About me</Link></h2>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
//        renderers={{
//          Link: LinkRenderer,
//        }}
      />
      <p>My CV can be found <a href="/public/Gao_Yinshi(Agnes)_CV.pdf">HERE</a>.</p>
    </article>
  </Main>
  );

// const Index = () => (
//   <Main
//     description={"Yinshi Gao's personal website."}
//   >
//     <article className="post" id="index">
//       <header>
//         <div className="title">
//           <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
//         </div>
//       </header>
//       <p> Welcome to my website.
//         Please feel free to read more <Link to="/about">about me</Link>,
//         or you can check out my {' '}
//         <Link to="/research">research</Link>, {' '}
//         <Link to="/teaching">teaching</Link>, {' '}
//         or <Link to="/contact">contact</Link> me.
//       </p>
//     </article>
//   </Main>
// );

export default Index;
