import { useDispatch } from 'react-redux';
import { openModal, closeModal, closeAllModals } from '../store/modalSlice';
import { v4 as uuidv4 } from 'uuid';
import { ModalConfig } from '../types/modal';

export const useModal = () => {
  const dispatch = useDispatch();

  const open = ({
    title,
    content,
    buttons,
    animate = true,
    maxWidth = 'sm',
  }: {
    title: string;
    content: React.ReactNode;
    buttons?: ModalConfig['buttons'];
    animate?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }) => {
    const id = uuidv4();
    dispatch(openModal({ id, title, content, buttons, animate, maxWidth }));
    return id;
  };

  const close = (id: string) => {
    dispatch(closeModal(id));
  };

  const closeAll = () => {
    dispatch(closeAllModals());
  };

  return { open, close, closeAll };
};
