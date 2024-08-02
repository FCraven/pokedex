import { NextResponse } from 'next/server';
import connectToDatabase from '../../../../lib/mongodb';
import Pokemon from '../../../../models/Pokemon';

export async function GET() {
  await connectToDatabase();

  try {
    const pokemon = await Pokemon.find({});
    return NextResponse.json(pokemon, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, {
      status: 400
    });
  }
}

export async function POST(request) {
  const { name, data } = await request.json();
  await connectToDatabase();

  try {
    const existingPokemon = await Pokemon.findOne({ name });
    if (existingPokemon) {
      return NextResponse.json({ success: false, message: 'Pokemon already exists' }, { status: 400 });
    }

    const pokemon = new Pokemon({ name, data });
    await pokemon.save();
    return NextResponse.json(pokemon, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
