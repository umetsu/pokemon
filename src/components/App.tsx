import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { PokemonList } from "./PokemonList";

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

export default App;
