import Header from './Header';
import logo from '../img/logo_msj_mac_colored.png';
import s from '../img/s_noir.png';
import '../styles/App.css';



function App() {
  return (
    <div className="App">
      <Header>
      <div className='container-logo'>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={s} className="s-logo" alt="logo" />
        <h1 className='main-title'>SUPERJOLI</h1>
        <h3 className='sub-title'>BEAUTIFUL COMMUNICATION</h3>
      </div>
      </Header>
    </div>
  );
}

export default App;
