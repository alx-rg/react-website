import './App.css';
import Title from '../Title/Title';
import { Outlet } from 'react-router-dom';
// import POPOSList from './components/POPOSList/POPOSList';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='main'>
      <Title />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
