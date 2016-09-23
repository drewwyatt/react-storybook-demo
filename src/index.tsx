import * as React from 'react';
import { render } from 'react-dom';
import { Buttons, Inputs } from './components';

const { RedButton, BlueButton } = Buttons;
const { TextField } = Inputs;

class App extends React.Component<void, void> {
  render(): JSX.Element {
    return (
      <main>
        <section>
          <h1>Storybook Demo</h1>
          <p>This is a demo application meant to show off react-storybook</p>
        </section>
        <section>
          <h2>Some Components</h2>
          <p>These are a few components in my app</p><br />

          <TextField /><br />

          <RedButton>This is a red button</RedButton>
          <BlueButton>This is a blue button</BlueButton>
        </section>
      </main>
    );
  }
}

render(<App/>, document.getElementById('root'));