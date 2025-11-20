
import React,{useState,useEffect,useRef} from 'react';
const backgroundImage="https://images.unsplash.com/photo-1761839257046-84e95464cc52?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


export default function App(){
      const [isRunning,setIsRunning]=useState(false);
      const [elapsedTime,setElapsedTime]=useState(0);
      const intervalIdRef=useRef(null);
      const startTimeRef=useRef(0);

      useEffect(()=>{
        if(isRunning){
          intervalIdRef.current=setInterval(()=>{
            setElapsedTime(Date.now() - startTimeRef.current);
          },10)
        }
        return()=>{
          clearInterval(intervalIdRef.current);
        }
      },[isRunning]);

      function start(){
        setIsRunning(true);
        startTimeRef.current=Date.now()-elapsedTime;

      }
      function stop(){
        setIsRunning(false);

      }
      function reset(){
        setElapsedTime(0);
        setIsRunning(false);
      }
      function format(){

        let hr=Math.floor(elapsedTime / (1000 * 60 * 60));
        let min=Math.floor(elapsedTime / (1000 * 60 ) % 60);
        let sec=Math.floor(elapsedTime / (1000)% 60);
        let milli=Math.floor((elapsedTime % 1000)/10);

        function addZero(number){
          return number<10?"0"+number:""+number;
        }
        return `${addZero(min)}:${addZero(sec)}:${addZero(milli)}`;
      }

    return(<>
    <div className="bg-cover w-screen flex items-center justify-center h-screen bg-[url(https://images.unsplash.com/photo-1761839257046-84e95464cc52?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
    <div className="backdrop-blur-[7px] text-3xl p-25 rounded-lg ">
    <h1 className=" m-10  text-center text-5xl font-extrabold font-mono">{format()}</h1>
    <button className="bg-green-100 m-3 rounded-lg px-5 py-1 active:scale-85 active:duration-150 shadow-lg" onClick={start}>start</button>
    <button className="bg-yellow-100 m-3 rounded-lg px-5 py-1 active:scale-85 active:duration-150 shadow-lg" onClick={stop}>stop</button>
    <button className="bg-red-100 m-3 rounded-lg px-5 py-1 active:scale-85 active:duration-150 shadow-lg" onClick={reset}>reset</button>
    </div></div>
    </>)
}
