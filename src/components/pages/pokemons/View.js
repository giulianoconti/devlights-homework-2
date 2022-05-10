import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "../../loading/Loading";

export const View = () => {
  const [loading, setLoading] = useState(true);
  const [pokemonCard, setPokemonCard] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const pokemonInfo = async () => {
      setLoading(true);
      await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((response) => {
          setPokemonCard(response);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    pokemonInfo();
  }, [id]);

  const navigatePrev = () => navigate(`/pokemon/${parseInt(id) - 1}`);

  const navigateNext = () => navigate(`/pokemon/${parseInt(id) + 1}`);

  if (loading) return <Loading />;

  return (
    <div className="h-screen flex">
      <div className="w-full max-w-lg m-auto h-max">
        <div className="bg-white shadow-md rounded px-8 pt-5 pb-5">
          <div className="text-xl font-bold">
            {pokemonCard.name.toUpperCase()}
          </div>
          <img
            className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 h-64"
            src={pokemonCard.sprites.other.dream_world.front_default}
            alt={pokemonCard.name}
          />
          <div className="container mx-auto h-48">
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded bg-gray-100 py-2">
                <div className="flex text-sm m-auto font-bold">Types: </div>
                <h2 className="flex text-sm m-auto">
                  {pokemonCard.types[0].type.name}
                </h2>
                <h2 className="flex text-sm m-auto">
                  {pokemonCard.types[1]?.type.name}
                </h2>
                <h2 className="flex text-sm m-auto">
                  {pokemonCard.types[2]?.type.name}
                </h2>
              </div>

              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded bg-gray-100 py-2">
                <div className="flex text-sm m-auto font-bold">HP: </div>
                <div className="flex text-sm m-auto">
                  {pokemonCard.stats[0].base_stat}
                </div>
              </div>
              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded bg-gray-100 py-2">
                <div className="flex text-sm m-auto font-bold">Attack: </div>
                <div className="flex text-sm m-auto">
                  {pokemonCard.stats[1].base_stat}
                </div>
              </div>

              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded bg-gray-100 py-2">
                <div className="flex text-sm m-auto font-bold">Abilities: </div>
                <div className="flex text-sm m-auto">
                  {pokemonCard.abilities[0].ability.name}
                </div>
                <div className="flex text-sm m-auto">
                  {pokemonCard.abilities[1]?.ability.name}
                </div>
                <div className="flex text-sm m-auto">
                  {pokemonCard.abilities[2]?.ability.name}
                </div>
              </div>
              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded bg-gray-100 py-2">
                <div className="flex text-sm m-auto font-bold">Defense: </div>
                <div className="flex text-sm m-auto">
                  {pokemonCard.stats[2].base_stat}
                </div>
              </div>
              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded bg-gray-100 py-2">
                <div className="flex text-sm m-auto font-bold">Speed: </div>
                <div className="flex text-sm m-auto">
                  {pokemonCard.stats[5].base_stat}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              className={`text-sm font-bold text-gray-${
                pokemonCard.id === 1 ? "400" : "700"
              }`}
              onClick={navigatePrev}
              disabled={id === "1"}
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
      </div>
    </div>
  );
};
