'use client';

import { useState } from 'react';
import axios from 'axios';

export default function AddPokemon() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [abilities, setAbilities] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/api/pokemon', {
        name,
        data: {
          type,
          height: Number(height),
          weight: Number(weight),
          abilities: abilities.split(',').map((ability) => ability.trim()),
        },
      });
      setResponse(res.data);
    } catch (error) {
      console.error('Error adding Pokémon:', error);
      setResponse({ success: false, message: error.message });
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Add a New Pokémon</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label className="block text-white">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 mt-1 block w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-white">Type:</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="p-2 mt-1 block w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-white">Height:</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="p-2 mt-1 block w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-white">Weight:</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="p-2 mt-1 block w-full rounded"
            required
          />
        </div>
        <div>
          <label className="block text-white">Abilities (comma separated):</label>
          <input
            type="text"
            value={abilities}
            onChange={(e) => setAbilities(e.target.value)}
            className="p-2 mt-1 block w-full rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4 rounded">
          Add Pokémon
        </button>
      </form>
      {response && (
        <div className="mt-4">
          {response.success ? (
            <div className="text-white">
              <h2>{response.name} Added!</h2>
              <pre>{JSON.stringify(response.data, null, 2)}</pre>
            </div>
          ) : (
            <p className="text-red-500">Error: {response.message}</p>
          )}
        </div>
      )}
    </div>
  );
}
