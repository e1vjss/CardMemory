import { useEffect, useState } from "react";

function Cards({ cardNames}) {
  const [shuffledNames, setShuffledNames]= useState([...cardNames.slice(0, 9)]);
  const fullList = cardNames;
  
 
  useEffect(() => {
    // Shuffle the initial names when the component mounts
    shuffleImages();
  }, [cardNames]);


  function pokemonImage(pokemon) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`;
  }
  function extractPokemonId(url) {
    const parts = url.split("/");
    const id = parts[parts.length - 2]; // ID is the second last element
    return id;
  }
  
  function shuffleImages() {
    const shuffled = [...shuffledNames]; // Create a copy to avoid modifying the state directly
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledNames(shuffled); // Update the state with the shuffled array
  }
  
  return (
    <div className="gameCards">
      {shuffledNames.map((name, index) => (
        <>
          <div className="card">
            <li className="cardStyle" key={index}>
              {name.name}
            </li>
            <img src={pokemonImage(extractPokemonId(name.url))} alt="" onClick={shuffleImages} />
          </div>
        </>
      ))}
    </div>
  );
}

export { Cards };
