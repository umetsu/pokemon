import { fetchAllPokemons } from "./network/pokemon-api";
import { createResource } from "./utils";

const pokemonsResource = createResource(fetchAllPokemons());

export function useAllPokemons() {
  const { pokemons } = pokemonsResource.read();
  return { pokemons };
}
