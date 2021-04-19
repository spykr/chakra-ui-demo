import { extendTheme } from '@chakra-ui/react';

// Step 1. Customising our button component
// - We want to update all buttons to use a bold font weight
// - We also want to add a box shadow to our "Open modal" button
// - (Make sure the box shadow colour updates with dark mode)
// - Get started by checking out the following documentation:
// https://chakra-ui.com/docs/theming/customize-theme

const theme = extendTheme({
  styles: {
    global: {
      // Make our container full-height
      'html, body, #root': {
        height: '100%',
      },
    },
  },
});

export default theme;
