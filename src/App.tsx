import { Button, Stack, useColorMode } from '@chakra-ui/react';

import Logo from './Logo';
import MyModal from './MyModal';

// Step 3. Getting our modal opening and closing
// - Hook up the modal and the button using Chakra's utility hook
// - Get started by reading the following documentation:
// https://chakra-ui.com/docs/hooks/use-disclosure

function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Stack
        alignItems="center"
        height="100%"
        justifyContent="center"
        spacing={8}
      >
        <Logo />
        <Button variant="ghost" onClick={toggleColorMode}>
          Toggle dark mode
        </Button>
        <Button variant="solid" colorScheme="teal">
          Open modal
        </Button>
      </Stack>
      <MyModal isOpen={true} onClose={() => {}} />
    </>
  );
}

export default App;
