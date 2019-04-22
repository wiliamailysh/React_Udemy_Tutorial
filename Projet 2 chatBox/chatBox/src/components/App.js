import React from 'react';

// Other components
import Formulaire from './Formulaire';
import Message from './Message';

class App extends React.Component {
  render() {
    return (
      <div className="box">
        <div>
          <div className="messages">
            <Message pseudo="Victor"/>
          </div>
          <Formulaire />
        </div>
      </div>
    )
  }
}

export default App;
