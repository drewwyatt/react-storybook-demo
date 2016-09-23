/// <reference path="./index.d.ts" />
import * as React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import { Buttons, Inputs } from '../src/components';

const { RedButton, BlueButton } = Buttons;
const { TextField } = Inputs;

var module: any;

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Inputs', module)
  .add('Text Field', () => (
    <TextField onChange={action('Typing...')} />
  ));

storiesOf('Button', module)
  .add('Red Button', () => (
    <RedButton onClick={action('clicked the red button')}>This is the red button from our app</RedButton>
  ))
  .add('Blue Button', () => (
    <BlueButton onClick={action('clicked the blue button')}>Clicking me will go to inputs</BlueButton>
  ));


