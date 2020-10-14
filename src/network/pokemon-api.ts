import gql from "graphql-tag";
import { print } from "graphql/language/printer";
import { GetAllPokemonsQuery } from "../generated/graphql";

export async function fetchAllPokemons(): Promise<GetAllPokemonsQuery> {
  const query = gql`
    query GetAllPokemons {
      pokemons(first: 151) {
        ...Pokemon
      }
    }
    fragment Pokemon on Pokemon {
      id
      number
      image
      name
      types
      attacks {
        fast {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
        image
        types
      }
    }
  `;

  const res = await fetch("https://graphql-pokemon2.vercel.app", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: print(query),
    }),
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error(json.errors.map((e: any) => e.message).join("\n"));
  }
  return json.data;
}
