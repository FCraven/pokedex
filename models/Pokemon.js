import mongoose from 'mongoose';

const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

export default mongoose.models.Pokemon || mongoose.model('Pokemon', PokemonSchema);
