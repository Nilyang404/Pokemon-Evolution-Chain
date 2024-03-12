import Image from "next/image";
import PokemonEvolutionCard from "./components/PokemonCard";
import PokemonList from "./pages/Sortlist";

export default function Home() {
  return (
    <div>
      <h1>Pokemon</h1>
      <PokemonList />
      <PokemonEvolutionCard />
    </div>
  );
}

/*
https://pokeapi.co/api/v2/pokemon/{id or name}/  id, name, height
https://pokeapi.co/api/v2/evolution-chain/{id}/

*/
