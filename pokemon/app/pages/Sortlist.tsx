"use client";
import React, { useEffect, useState } from "react";

type PokemonBasic = {
  name: string;
  url: string;
};

type PokemonDetail = {
  name: string;
  height: number;
  spriteUrl: string;
};

const PokemonList: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonDetail[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        // Fetch the initial list of Pokemon
        const listRes = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=20"
        );
        const listData = await listRes.json();

        // Fetch details for each Pokemon
        const detailsPromises = listData.results.map(
          async (pokemon: PokemonBasic) => {
            const detailsRes = await fetch(pokemon.url);
            const detailsData = await detailsRes.json();
            return {
              name: detailsData.name,
              height: detailsData.height,
              spriteUrl: detailsData.sprites.back_default,
            };
          }
        );

        const details = await Promise.all(detailsPromises);

        const sortedDetails = details.sort((a, b) => a.height - b.height);
        setPokemonData(sortedDetails);
      } catch (error) {
        console.error("Failed to fetch Pokemon data:", error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pokemon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonData.map((pokemon, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
          >
            <strong className="block">{pokemon.name}</strong>
            <span>Height: {pokemon.height}</span>
            <img
              src={pokemon.spriteUrl}
              alt={`Back of ${pokemon.name}`}
              className="mt-2 max-w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
