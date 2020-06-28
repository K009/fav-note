import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button>Hello Dominik</Button>)
  .add('Secondary', () => <Button>Hello Natalie</Button>);
