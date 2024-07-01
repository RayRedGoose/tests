import {Preview} from '@storybook/react';
import '@workday/canvas-tokens-web/css/base/_variables.css';
import '@workday/canvas-tokens-web/css/brand/_variables.css';
import '@workday/canvas-tokens-web/css/system/_variables.css';

import './global.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Docs', 'Icons', 'Visual Tests'],
      },
    },
  },
};

export default preview;
