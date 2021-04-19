import { Modal } from '@chakra-ui/react';
import type { ModalProps } from '@chakra-ui/react';

// Step 2. Creating an accessible modal
// - Create a modal containing whatever you want
// - Get started by checking out the following documentation:
// https://chakra-ui.com/docs/overlay/modal
// - Make sure it's accessible by reading "3.9 Dialog (Modal)" in this document:
// https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal
// - For bonus points customise the look of the modal

type Props = Omit<ModalProps, 'children'>;

const MyModal: React.FC<Props> = props => {
  return <Modal {...props}>TODO</Modal>;
};

export default MyModal;
