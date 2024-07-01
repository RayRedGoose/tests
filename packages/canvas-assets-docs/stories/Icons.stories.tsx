import * as React from 'react';
import * as icons from '@workday/canvas-system-icons-web';
import {Grid} from '@workday/canvas-kit-react/layout';
import {Heading, Text} from '@workday/canvas-kit-react/text';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

export default {
  title: 'Icons',
};

export const SystemIcons = {
  render: () => {
    return (
      <div>
        <Heading size="large" cs={{marginBottom: '2rem'}}>
          System Icons Table
        </Heading>
        <Grid gridTemplateColumns="repeat(5, 1fr)" gridGap="1rem">
          {Object.keys(icons)
            .filter(iconName => iconName !== 'CanvasSystemIcons')
            .map(iconName => (
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  justifyContent: 'center',
                }}
              >
                <SystemIcon icon={icons[iconName]} size="2rem" />
                <Text>{iconName}</Text>
              </div>
            ))}
        </Grid>
      </div>
    );
  },
};
