
import FondoH from './assets/hot.jpg';
import Descriptions from './componentes/Descriptions';


function App() {
  
  return (
    <div className="app" style={{backgroundImage: `url(${FondoH})`}}>
     <div className='overlay'>
       <div className='conteiner'>
         <div className='icon'>
           <h2>Caucete, San Juan</h2>
           <img src=' https://openweathermap.org/img/wn/10d@2x.png' alt='weatherIcon'/>
           <h2>Nublado</h2>
         </div>
         <div className='temperature'>
          <h1>30°C</h1>
         </div>
       </div>
        <Descriptions/>
     </div>
    </div> 

);
    
}
   
       
    
        
        
    

  

export default App;




