import React from "react";
import { PokemonItem } from "./PokemonItem";
import { useAllPokemons } from "../hooks/useAllPokemons";

export function PokemonList(): JSX.Element {
  const { pokemons } = useAllPokemons();

  return (
    <>
      {pokemons?.map(
        (pokemon) =>
          pokemon && <PokemonItem key={pokemon.id} pokemon={pokemon} />
      )}
    </>
  );
}
