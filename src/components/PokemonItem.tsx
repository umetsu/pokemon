import React from "react";
import { PokemonFragment } from "../generated/graphql";

type Props = {
  pokemon: PokemonFragment;
};

export function PokemonItem({ pokemon }: Props) {
  return (
    <div>
      <div>{pokemon.image && <img src={pokemon.image} />}</div>
      <p>#{pokemon.number}</p>
      <p>{pokemon.name}</p>
    </div>
  );
}
