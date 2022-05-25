import Header from './Header';
import Main from './Main';
import SectionInfos from './SectionInfos';
import logo from '../img/logo_msj_mac_colored.png';
import s from '../img/s_noir.png';
import bluesky from '../img/blue_sky_bkg.jpg'
import elephant from '../img/elephant_corde.png'
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
      <Main>
      <div className='main container'></div>
          <SectionInfos>
            <img src={bluesky} className="skyblue" alt="background sky blue" />
            <img src={elephant} className="elephant" alt="background elephant" />

          </SectionInfos>
      </Main>
    </div>
  );
}

export default App;
