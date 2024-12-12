import { useEffect, useState } from "react"
import { FetchStatus, PokemonApi } from "../interfaces/pokemonApi.interface";

const localCache: { [key: string]: PokemonApi } = {};

export const useFetch = ( url: string ) => {

  const [state, setState] = useState<FetchStatus>({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  }

  const getFetch = async () => {
    // Verificar si la data ya esta en cache
    if ( localCache[url] ) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    setLoadingState();
    const resp = await fetch( url );

    if( !resp.ok ) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        }
      });
      return;
    }

    const data = await resp.json();
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    })

    // Manejo de cache
    localCache[url] = data;
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
