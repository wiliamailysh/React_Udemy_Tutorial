import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';

// CSS
import './index.css';

// Rooter
import { BrowserRouter, Route, Switch } from 'react-router';

// Components
import Connexion from './components/Connexion';
import App from './components/App';
import NotFound from './components/NotFound';

// Component Stateless
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exactly path='/' component={Connexion} />
        <Route path='/pseudo/:pseudo' component={App} />
        <Route component={NotFound} />
      </div>
    </BrowserRouter>
  )
}


render(
  <Root />,
  document.getElementById('root')
);
