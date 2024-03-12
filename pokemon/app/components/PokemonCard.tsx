export default function PokemonEvolutionCard() {
  return (
    <div className="bg-green-400 p-4 rounded-xl max-w-sm mx-auto">
      <div className="flex flex-col items-center">
        <div className="text-white text-xl font-bold mb-2">Leveling up</div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col items-center">
            <img className="w-24 h-24" src="/chikorita.png" alt="Chikorita" />
            <span className="text-white font-bold">Chikorita</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-10 h-10"
              src="/evolution-item.png"
              alt="Evolution"
            />
            <span className="text-white">Level 16+</span>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-24 h-24" src="/bayleef.png" alt="Bayleef" />
            <span className="text-white font-bold">Bayleef</span>
          </div>
        </div>
      </div>
    </div>
  );
}
