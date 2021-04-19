import {
  Heading,
  Image,
  Stack,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import { rem } from 'polished';
import type { StackProps } from '@chakra-ui/react';

import logo from './logo.svg';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Step 4. Updating our logo component
// - We want to be able to change the image size and the heading size of our logo
// - There are a few ways we could do this, have a group discussion!
// - For bonus points once you're done make the values responsive

type Props = StackProps;

const Logo: React.FC<Props> = props => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`;

  return (
    <Stack isInline alignItems="center" spacing={4} {...props}>
      <Image animation={animation} boxSize={rem('64px')} src={logo} />
      <Heading fontSize={rem('48px')}>chakra</Heading>
    </Stack>
  );
};

export default Logo;
