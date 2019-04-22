import React from 'react';
import { render } from 'react-dom';

// CSS
import './style/css/bootstrap.min.css';
import './index.css';

// Personal Javascript file with sampleText
import { sampleText } from './sampleText';


// Component
class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea value={sampleText} cols="30" rows="30"></textarea>
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
