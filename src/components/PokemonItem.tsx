import React from "react";
import { PokemonFragment } from "../generated/graphql";

type Props = {
  pokemon: PokemonFragment;
};

export function PokemonItem({ pokemon }: Props) {
  return <div key={pokemon?.id}>{pokemon?.name}</div>;
}
