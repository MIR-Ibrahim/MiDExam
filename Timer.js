import React,{useState, useEffect} from 'react';
import ReactDom from 'raect-dom/client';
import App from './App';

function Timer(){
    const [time, setTime] = useState(10);

    
    const timerDecrement = function decrement(){
   if(time > 0){
        setTime(()=>{
            setTime(time-1);
        }, 1000);
        return timerDecrement;
    }
    else{
    return `Time's Up!`;
   }
   }

}

const root = ReactDOM.createRoot(document.getElementById('App'));
root.render(
    <div>
    <button onClick={Timer}>
        <span>{Timer.timerdecrement}</span>
    </button>
    </div>
    );

export default Timer;