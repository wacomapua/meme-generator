import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FormInput from './components/FormInput';
import Button from './components/Button';
import GetImage from './components/GetImage';

function App() {
  return (
    <div className='place-content-center grid place-items-center'>
    <Navbar />
    <FormInput />
    <Button />
    <GetImage />
    </div>
  );
}

export default App;
