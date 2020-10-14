import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { fetchAllPokemons } from "./network/pokemon-api";
import { createResource } from "./utils";

const pokemonsResource = createResource(fetchAllPokemons());

function App() {
  return (
    <>
      <ErrorBoundary
        fallbackRender={({ error }) => <div>{error?.message}</div>}
      >
        <React.Suspense fallback={<div>Loading...</div>}>
          <PokemonList />
        </React.Suspense>
      </ErrorBoundary>
    </>
  );
}

function PokemonList(): JSX.Element {
  const { pokemons } = pokemonsResource.read();

  return (
    <>
      {pokemons?.map((pokemon) => (
        <div key={pokemon?.id}>{pokemon?.name}</div>
      ))}
    </>
  );
}

export default App;
