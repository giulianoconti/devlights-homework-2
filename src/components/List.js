import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const initPokemons = async () => {
    setLoading(true);
    await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
      .then((response) => response.json())
      .then(({ results }) => {
        setPokemons(results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    initPokemons();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex text-center">
        <div className="w-full max-w-lg m-auto">
          <div className="bg-white shadow-md rounded px-8 pt-5 pb-5">
            Loading...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto m-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pokemons.map((pokemon) => {
          const pokemonId = pokemon.url.split("/")[6];
          const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
          return (
            <Link to={"/pokemon/" + pokemonId} key={pokemonId}>
              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100 cursor-pointer">
                <h1 className="flex text-xl m-auto">{pokemon.name}</h1>
                <img className="m-auto" src={img} alt={pokemon.name}></img>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
