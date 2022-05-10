import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../loading/Loading";

export const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const { pageId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const initPokemons = async () => {
      setLoading(true);
      await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${
          parseInt(pageId) * 20
        }&limit=20`
      )
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
    initPokemons();
  }, [pageId]);

  const navigatePrev = () => navigate(`/devlights-homework-2/list/${parseInt(pageId) - 1}`);

  const navigateNext = () => navigate(`/devlights-homework-2/list/${parseInt(pageId) + 1}`);

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto m-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pokemons.map((pokemon) => {
          const pokemonId = pokemon.url.split("/")[6];
          const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
          return (
            <Link to={"/pokemon/" + pokemonId} key={pokemonId}>
              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100 cursor-pointer hover:bg-gray-300">
                <h1 className="flex text-xl m-auto">{pokemon.name}</h1>
                <img className="m-auto" src={img} alt={pokemon.name}></img>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-between mt-4 bg-gray-100 border-2 border-gray-300 rounded-xl p-2">
        <button
          className={`text-sm font-bold text-gray-${
            pageId === "0" ? "400" : "700"
          }`}
          onClick={navigatePrev}
          disabled={pageId === "0"}
        >
          {"<- Previous"}
        </button>
        <button
          className="text-sm font-bold text-gray-700"
          onClick={navigateNext}
        >
          {"Next ->"}
        </button>
      </div>
    </div>
  );
};
