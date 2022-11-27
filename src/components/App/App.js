import './App.css';
import Title from '../Title/Title';
import { Outlet } from 'react-router-dom';
// import POPOSList from './components/POPOSList/POPOSList';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='main'>
      
      <div className='header'>
        <Title />
      </div>
      <div className='wrapper'>

      <Outlet />
      </div>
      <div className='page-footer'>

      <Footer />
      </div>
    </div>
  );
}

export default App;
