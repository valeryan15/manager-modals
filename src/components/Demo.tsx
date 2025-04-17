import { Button, Stack, Typography } from '@mui/material';
import { useModal } from '../hooks/useModal';

export const Demo = () => {
  const { open } = useModal();

  const openSimpleModal = () => {
    open({
      title: 'Простое модальное окно',
      content: 'Это простое модальное окно с одной кнопкой закрытия',
    });
  };

  const openCustomButtonsModal = () => {
    open({
      title: 'Модальное окно с кнопками',
      content: 'Это модальное окно с настраиваемыми кнопками',
      buttons: [
        {
          text: 'Отмена',
          color: 'error',
          variant: 'outlined',
          onClick: (_e, handleClose) => {
            handleClose();
          },
        },
        {
          text: 'Подтвердить',
          color: 'success',
          variant: 'contained',
          onClick: (_e, handleClose) => {
            console.log('Подтверждено!');
            handleClose();
          },
        },
      ],
    });
  };

  const openNoAnimationModal = () => {
    open({
      title: 'Без анимации',
      content: 'Это модальное окно открывается без анимации',
      animate: false,
    });
  };

  const openLargeModal = () => {
    open({
      title: 'Большое модальное окно',
      content: (
        <Typography>
          Это модальное окно с настраиваемым размером и сложным контентом. Можно передавать любые
          React компоненты в качестве содержимого.
        </Typography>
      ),
      maxWidth: 'lg',
    });
  };

  const openNestedModals = () => {
    open({
      title: 'Первое модальное окно',
      content: 'Это первое модальное окно, из которого можно открыть второе',
      buttons: [
        {
          text: 'Закрыть',
          onClick: (_, handleClose) => {
            handleClose();
          }
        },
        {
          text: 'Открыть второе окно',
          color: 'primary',
          variant: 'contained',
          onClick: () => {
            open({
              title: 'Второе модальное окно',
              content: 'Это второе модальное окно, открытое из первого',
              maxWidth: 'sm',
              buttons: [
                {
                  text: 'Закрыть',
                  color: 'primary',
                  variant: 'text',
                  onClick: (_, handleClose) => {
                    handleClose();
                  }
                },
              ],
            });
          },
        },
      ],
    });
  };

  return (
    <Stack spacing={2} p={4}>
      <Button variant="contained" onClick={openSimpleModal}>
        Открыть простое модальное окно
      </Button>
      <Button variant="contained" onClick={openCustomButtonsModal}>
        Открыть окно с кнопками
      </Button>
      <Button variant="contained" onClick={openNoAnimationModal}>
        Открыть окно без анимации
      </Button>
      <Button variant="contained" onClick={openLargeModal}>
        Открыть большое модальное окно
      </Button>
      <Button variant="contained" onClick={openNestedModals}>
        Открыть вложенные окна
      </Button>
    </Stack>
  );
};
