import { useEffect, useState } from 'react'
import { Cards } from './gameView'

import './App.css'

function App() {
  const [names, setNames] = useState([])
  const [images, setImages] =useState('')
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon");
        const apiData = await response.json()
        const Cardname = apiData.results
        
        
        
        
        setNames(Cardname)
       
       
      }catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };fetchData();
  },[]);
  
  useEffect(() => {
    let array= names;
    
    
    function randomNumber(arr){
    for(let i =arr.length-1; i>0; i--){
      let j = Math.floor(Math.random()* (i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
      
    }
    }
    
    randomNumber(array)
    console.log(array)
    
    
   
  }, []); 
  return (
    <>
   
    <Cards cardNames={names}/>
    </>
   
  );
}

export default App
