import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import video from './video/Pink Line Tunnel Illusion Motion Graphic Background Video Loop Animation Stock Footage No Copyright.mp4';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
</div>
    
      
       
    
  );
}



export default App;
