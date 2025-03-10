import requestAxios from "./index";

export function fetchPokemonList(limit = 151, offset = 0) {
  return requestAxios.get(`/pokemon`, {
    params: { limit, offset },
  });
}

export function fetchPokemonDetails(nameOrId: string | number) {
  return requestAxios.get(`/pokemon/${nameOrId}`);
}

export function fetchPokemonSpecies(nameOrId: string | number) {
  return requestAxios.get(`/pokemon-species/${nameOrId}`);
}
