import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useAllPokemons } from "./useAllPokemons";

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
  const { pokemons } = useAllPokemons();

  return (
    <>
      {pokemons?.map((pokemon) => (
        <div key={pokemon?.id}>{pokemon?.name}</div>
      ))}
    </>
  );
}

export default App;
