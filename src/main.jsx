import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes/Routes'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer/globalReducer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/style.css'
import { RecoilRoot } from 'recoil';

const storeRedux = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    <Provider store={storeRedux}>
      <Routes />
    </Provider>
    </RecoilRoot>
  </React.StrictMode>
)
