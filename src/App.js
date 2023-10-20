import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'

function App() {

  const Videoref=useRef()
  
  const handleplay=()=>{
    Videoref.current.play();

}

const handlepause=()=>{
   Videoref.current.pause();
}
  return (
    <div className="App">
     <button onClick={handleplay}>play</button>
     <button onClick={handlepause}>pause</button>
     <video width={400} height={300} ref={Videoref}>
      <source src='\Videos\pexels-rodnae-productions-8581127 (1080p).mp4'/>
     </video>
    </div>
  );
}

export default App;
