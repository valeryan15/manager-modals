export interface ModalButton {
  text: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  variant?: 'text' | 'outlined' | 'contained';
}

export interface ModalConfig {
  id: string;
  title: string;
  content: React.ReactNode;
  buttons?: ModalButton[];
  animate?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
