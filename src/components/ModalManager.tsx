import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Modal } from './Modal';

export const ModalManager = () => {
  const modals = useSelector((state: RootState) => state.modal.modals);

  return (
    <>
      {modals.map((modalConfig) => (
        <Modal
          key={modalConfig.id}
          id={modalConfig.id}
          title={modalConfig.title}
          content={modalConfig.content}
          buttons={modalConfig.buttons}
          animate={modalConfig.animate}
          maxWidth={modalConfig.maxWidth}
        />
      ))}
    </>
  );
};
