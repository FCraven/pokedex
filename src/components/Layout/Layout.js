'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <header className="bg-red-600 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div>
            <Link href="/" className="font-bold text-2xl">
              Pokédex
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/berries" className="text-xl">
              Berries
            </Link>
            <Link href="/contests" className="text-xl">
              Contests
            </Link>
            <Link href="/encounters" className="text-xl">
              Encounters
            </Link>
            <Link href="/evolution" className="text-xl">
              Evolution
            </Link>
            <Link href="/games" className="text-xl">
              Games
            </Link>
            <Link href="/items" className="text-xl">
              Items
            </Link>
            <Link href="/locations" className="text-xl">
              Locations
            </Link>
            <Link href="/machines" className="text-xl">
              Machines
            </Link>
            <Link href="/moves" className="text-xl">
              Moves
            </Link>
            <Link href="/pokemon" className="text-xl">
              Pokémon
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="md:hidden bg-red-600 p-4">
            <Link href="/berries" className="block text-xl mt-2">
              Berries
            </Link>
            <Link href="/contests" className="block text-xl mt-2">
              Contests
            </Link>
            <Link href="/encounters" className="block text-xl mt-2">
              Encounters
            </Link>
            <Link href="/evolution" className="block text-xl mt-2">
              Evolution
            </Link>
            <Link href="/games" className="block text-xl mt-2">
              Games
            </Link>
            <Link href="/items" className="block text-xl mt-2">
              Items
            </Link>
            <Link href="/locations" className="block text-xl mt-2">
              Locations
            </Link>
            <Link href="/machines" className="block text-xl mt-2">
              Machines
            </Link>
            <Link href="/moves" className="block text-xl mt-2">
              Moves
            </Link>
            <Link href="/pokemon" className="block text-xl mt-2">
              Pokémon
            </Link>
          </div>
        )}
      </header>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
};

export default Layout;
