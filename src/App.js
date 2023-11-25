// import { useState } from 'react';
// import Counter from './Counter';
import './App.css';
import Tours from './component/Tours';
import Data from './component/Data';
import { useState } from 'react';



function App() {

  const [tours,setTours]=useState(Data);

  function removeTour(id){
        const newTour =tours.filter(tour=> tour.id!==id);
        setTours(newTour);
        console.log("tap to ho gya hai");
  }

  if (tours.length===0) {
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button onClick={()=>setTours(Data)}>Refresh</button>
      </div>
    )}

  return(
    <>
     <Tours tours={tours} removeTour={removeTour}></Tours>
    </>
  );
}

export default App;
