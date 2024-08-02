// src/components/PokemonCard.js
import Image from 'next/image';

const PokemonCard = ({ name, image, types, height, weight, stats, abilities }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto flex flex-col justify-between text-black">
      <div>
        <Image src={image} alt={name} width={150} height={150} className="mx-auto" />
        <h2 className="text-2xl font-bold text-center mt-2 capitalize">{name}</h2>
        <div className="flex justify-center mt-2">
          {types.map((type, index) => (
            <span key={index} className={`type-${type.toLowerCase()} mx-1 px-2 py-1 rounded`}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-center"><strong>Height:</strong> {height} dm</p>
        <p className="text-center"><strong>Weight:</strong> {weight} hg</p>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Base Stats</h3>
          <ul>
            {stats.map((stat, index) => (
              <li key={index} className="flex justify-between">
                <span>{stat.name}</span>
                <span>{stat.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">Abilities</h3>
          <ul>
            {abilities.map((ability, index) => (
              <li key={index} className="capitalize">{ability}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
