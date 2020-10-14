import { useQuery } from "react-query";
import { GetAllPokemonsQuery } from "../generated/graphql";
import { fetchAllPokemons } from "../network/pokemon-api";

export function useAllPokemons(): {
  pokemons: GetAllPokemonsQuery["pokemons"];
} {
  const { data } = useQuery<GetAllPokemonsQuery>({
    queryKey: "pokemons",
    queryFn: fetchAllPokemons,
  });

  return { pokemons: data?.pokemons ?? [] };
}
