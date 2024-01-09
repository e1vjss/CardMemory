import { useEffect, useState } from "react";
import {Score} from "./gameScore"

function Cards() {
  const [shuffledNames, setShuffledNames]= useState([]);
  const [cardScore, setCardScore] = useState(0)
  const [clickedCard, setClickedCards]= useState([]);
  
  
 
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await fetch ("https://pokeapi.co/api/v2/pokemon");
        const apiData = await response.json()
        const Cardname = apiData.results
        
        
        
        
        setShuffledNames(Cardname)
      
       
        
        
       
       
      }catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };fetchData();
  },[]);


  function pokemonImage(pokemon) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`;
  }
  function extractPokemonId(url) {
    const parts = url.split("/");
    const id = parts[parts.length - 2]; 
    return id;
    
    
  }
  
  function shuffleImages(id) {
    
  if(!clickedCard.includes(id)){
    const shuffled = [...shuffledNames]; 
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledNames(shuffled); 
    
    setClickedCards([...clickedCard, id])
    setCardScore(cardScore + 1)
    
    
  }
  else{
    setCardScore(0)
    setClickedCards([])
    alert("oops, you have cliked that card already, score will reset")
  }
  }
  
  
  return (
    <>
    <Score cardClicked= {cardScore}/>
    <div className="gameContainer">
    <div className="gameCards">
      {shuffledNames.slice(0,9).map((name, index) => (
        <>
          <div className="card">
            <li className="cardStyle" key={index}>
              {name.name}
            </li>
            <img src={pokemonImage(extractPokemonId(name.url))} alt="" onClick={() => shuffleImages(extractPokemonId(name.url))}  />
          </div>
        </>
      ))}
    </div>
    </div>
    
    </>
    
  );
}



export { Cards};
