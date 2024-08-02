import Link from 'next/link';
import Image from 'next/image';

const typeColors = {
  grass: 'bg-green-400',
  fire: 'bg-red-400',
  water: 'bg-blue-400',
  bug: 'bg-green-600',
  normal: 'bg-gray-400',
  poison: 'bg-purple-600',
  electric: 'bg-yellow-400',
  ground: 'bg-yellow-600',
  fairy: 'bg-pink-400',
  fighting: 'bg-red-600',
  psychic: 'bg-pink-600',
  rock: 'bg-gray-600',
  ghost: 'bg-purple-800',
  ice: 'bg-blue-200',
  dragon: 'bg-indigo-600',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  flying: 'bg-blue-200',
};

const PokemonTile = ({ name, image, types }) => {
  const mainType = types[0]?.toLowerCase();
  const backgroundColor = typeColors[mainType] || 'bg-gray-200';

  return (
    <Link href={`/pokemon/${name}`} passHref>
      <div className={`${backgroundColor} rounded-lg shadow-md p-4 max-w-xs cursor-pointer hover:bg-opacity-80 transition duration-200 transform hover:-translate-y-1 hover:scale-105 border-4 border-gray-200 relative`}>
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-white flex items-center justify-center border-4 border-gray-200">
          <div className="w-8 h-8 rounded-full bg-red-500"></div>
        </div>
        <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white flex items-center justify-center border-4 border-gray-200">
          <div className="w-8 h-8 rounded-full bg-red-500"></div>
        </div>
        <Image src={image} alt={name} width={100} height={100} className="mx-auto" />
        <h2 className="text-lg font-bold text-center mt-2 capitalize">{name}</h2>
        <div className="flex justify-center mt-2 space-x-2">
          {types.map((type, index) => (
            <span key={index} className="bg-white text-black px-2 py-1 rounded-full capitalize">
              {type}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonTile;
