import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';
import MainContent from './components/MainContent';
import store from '../redux/store';
import { Provider } from 'react-redux';
  
ReactDOM.render(

<BrowserRouter>
<Provider store={store}>
       <Routes>
         <Route path="/" element={<App />} />
         <Route path=":id" element={<MainContent/>} />
       </Routes>
</Provider>
      </BrowserRouter>
, document.getElementById('root'))
