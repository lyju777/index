export interface PokemonDetails {
  data: {
    id: number;
    name: string;
    sprites: {
      front_default: string;
      versions: {
        "generation-v": {
          "black-white": {
            animated: {
              front_default: string;
            };
          };
        };
      };
    };
    types: {
      type: {
        name: string;
      };
    }[];
  };
}
