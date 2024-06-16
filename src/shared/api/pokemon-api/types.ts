export type Pokemon = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
  name: string;
  height: number;
  weight: number;
  sprites: {
    // eslint-disable-next-line camelcase
    front_default: string;
  };
  types: Array<{ slot: number; type: { name: string; url: string } }>;
  // eslint-disable-next-line camelcase
  stats: Array<{ base_stat: number; stat: { name: string; url: string } }>;
  abilities: Array<{ ability: { name: string; url: string } }>;
};

export type PokemonsApiResponse = {
  id: number;
  abilities: string;
  name: string;
  url: string;
  results: Array<{ name: string; url: string }>;
};
