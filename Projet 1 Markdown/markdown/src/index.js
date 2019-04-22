import React from 'react';
import { render } from 'react-dom';

// class
import './style/css/bootstrap.min.css';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea value="Tapez votre texte" cols="30" rows="10"></textarea>
          </div>
          <div className="col-sm-6">
            <h1>Résultat</h1>
          </div>
        </div>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById("root")
);
