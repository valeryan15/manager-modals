import { Provider } from 'react-redux';
import { store } from './store/store';
import { Demo } from './components/Demo';
import { ModalManager } from './components/ModalManager';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Demo />
      <ModalManager />
    </Provider>
  );
}

export default App;
