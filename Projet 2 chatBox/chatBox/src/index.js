import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';

// CSS
import './index.css';

// Rooter
import { BrowserRouter, Match, Miss } from 'react-router';

// Components
import Connexion from './components/Connexion';
import App from './components/App';
import NotFound from './components/NotFound';

// Component Stateless
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Connexion} />
        <Match pattern="/pseudo/:pseudo" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
