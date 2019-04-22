import React from 'react';
import { render } from 'react-dom';

// CSS
import './style/css/bootstrap.min.css';
import './index.css';

// Personal Javascript file with sampleText
import { sampleText } from './sampleText';

// Import Marked.js library
import marked from 'marked';


// Component
class App extends React.Component {

  state = {
    text: sampleText
  }

  editText = (event) => {
    const text = event.target.value;
    this.setState({text: text});
    // this.setState({text});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              value={this.state.text}
              cols="30"
              rows="30"
              onChange={(e) => this.editText(e)}>
            </textarea>
          </div>
          <div className="col-sm-6">
            <div>{this.state.text}</div>
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
