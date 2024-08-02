import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from '../components';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokédex",
  description: "Pokemon API ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <header className="bg-red-600 p-4 border-b-8 border-b-yellow-300">
            <nav className="container mx-auto flex justify-between">
              <div>
                <Link href="/" className="font-bold text-2xl">
                  Pokédex
                </Link>
              </div>
              <div className="flex space-x-4">
                <Link href="/berries" className="text-l font-bold">
                  Berries
                </Link>
                <Link href="/contests" className="text-l font-bold">
                  Contests
                </Link>
                <Link href="/encounters" className="text-l font-bold">
                  Encounters
                </Link>
                <Link href="/evolution" className="text-l font-bold">
                  Evolution
                </Link>
                <Link href="/games" className="text-l font-bold">
                  Games
                </Link>
                <Link href="/items" className="text-l font-bold">
                  Items
                </Link>
                <Link href="/locations" className="text-l font-bold">
                  Locations
                </Link>
                <Link href="/machines" className="text-l font-bold">
                  Machines
                </Link>
                <Link href="/moves" className="text-l font-bold">
                  Moves
                </Link>
                <Link href="/pokemon" className="text-l font-bold">
                  Pokémon
                </Link>
              </div>
            </nav>
          </header>
          <main className="container mx-auto p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
