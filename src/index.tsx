import * as React from 'react';
import {render} from 'react-dom';

class App extends React.Component<void, void> {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('root'));