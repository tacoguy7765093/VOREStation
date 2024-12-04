import { useEffect, useState } from 'react';
import { Box } from 'tgui/components';
import { BoxProps } from 'tgui/components/Box';
import { Icon } from 'tgui-core/components';

export const AnimatedArrows = (props: { on: boolean } & BoxProps) => {
  const { on, ...rest } = props;

  const [activeArrow, setActiveArrow] = useState(0);

  // Lower to make it animate faster
  const SPEED = 200;

  useEffect(() => {
    const id = setInterval(() => {
      setActiveArrow((arrow) => (arrow + 1) % 3);
    }, SPEED);
    return () => clearInterval(id);
  }, []);

  return (
    <Box {...rest}>
      <Icon
        color={!on ? 'gray' : activeArrow === 0 ? 'green' : 'white'}
        name="chevron-right"
      />
      <Icon
        color={!on ? 'gray' : activeArrow === 1 ? 'green' : 'white'}
        name="chevron-right"
      />
      <Icon
        color={!on ? 'gray' : activeArrow === 2 ? 'green' : 'white'}
        name="chevron-right"
      />
    </Box>
  );
};
