import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const View = () => {
  const [loading, setLoading] = useState(true);
  const [pokemonCard, setPokemonCard] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    pokemonInfo();
  }, [id]);

  const navigateBack = () => {
    navigate(`/pokemon/${parseInt(id) - 1}`);
  };
  const navigateNext = () => {
    navigate(`/pokemon/${parseInt(id) + 1}`);
  };

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
    <div className="h-screen flex">
      <div className="w-full max-w-lg m-auto">
        <div className="bg-white shadow-md rounded px-8 pt-5 pb-5">
          <div className="text-xl font-bold">
            {console.log(pokemonCard)}
            {pokemonCard.name.toUpperCase()}
          </div>
          <img
            className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 h-64"
            src={pokemonCard.sprites.other.dream_world.front_default}
            alt={pokemonCard.name}
          />
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded bg-gray-100 py-2">
                <div className="flex text-sm m-auto font-bold">Types: </div>
                <h2 className="flex text-sm m-auto">
                  {pokemonCard.types[0]?.type.name}
                </h2>
                <h2 className="flex text-sm m-auto">
                  {pokemonCard.types[1]?.type.name}
                </h2>
                <h2 className="flex text-sm m-auto">
                  {pokemonCard.types[2]?.type.name}
                </h2>
              </div>

              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded bg-gray-100 py-2">
                <div className="flex text-sm m-auto font-bold">Height: </div>
                <div className="flex text-sm m-auto">{pokemonCard.height}</div>
              </div>
              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded bg-gray-100 py-2">
                <div className="flex text-sm m-auto font-bold">Weight: </div>
                <div className="flex text-sm m-auto">{pokemonCard.weight}</div>
              </div>

              <div className="flex flex-col justify-center text-6xl border-2 border-gray-300 rounded bg-gray-100 py-2">
                <div className="flex text-sm m-auto font-bold">Abilities: </div>
                <div className="flex text-sm m-auto">
                  {pokemonCard.abilities[0]?.ability.name}
                </div>
                <div className="flex text-sm m-auto">
                  {pokemonCard.abilities[1]?.ability.name}
                </div>
                <div className="flex text-sm m-auto">
                  {pokemonCard.abilities[2]?.ability.name}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              className="text-sm font-bold text-gray-600"
              onClick={navigateBack}
            >
              {"<- back"}
            </button>
            <button
              className="text-sm font-bold text-gray-600"
              onClick={navigateNext}
            >
              {"next ->"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
