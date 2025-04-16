import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Fade } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/modalSlice';
import { ModalButton } from '../types/modal';

interface ModalProps {
  id: string;
  title: string;
  content: React.ReactNode;
  buttons?: ModalButton[];
  animate?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal = ({
  id,
  title,
  content,
  buttons = [],
  animate = true,
  maxWidth = 'sm',
}: ModalProps) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal(id));
  };

  const TransitionComponent = animate ? Fade : undefined;

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      TransitionComponent={TransitionComponent}
      maxWidth={maxWidth}
      fullWidth
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        {buttons.length > 0 ? (
          buttons.map((button, index) => (
            <Button
              key={index}
              onClick={() => {
                button.onClick?.();
              }}
              color={button.color || 'primary'}
              variant={button.variant || 'text'}
            >
              {button.text}
            </Button>
          ))
        ) : (
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
