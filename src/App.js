import Violeta from './assets/pngtree-sky-color-clouds-climate-image_2205251.jpg';
import './App.css';
import ClimaApp from './Components/modulosClima/ClimaApp';
import TransporteApp from './Components/modulosTransito/TransporteApp';

function App() {
  return (
    <div className= "App" style={{backgroundImage: `url(${Violeta})`}}>
       <div className="left-half">
        <ClimaApp />
        
      </div>
      <div className="right-half">
        <TransporteApp />
      </div>
    </div>
  );
}

        

export default App;




