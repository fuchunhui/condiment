export default function (): void {
  console.log('unions and intersections');

  function padLeft(value: string, padding: string | number): string | number {
    if (typeof padding === 'number') {
      return Array(padding + 1).join('') + value;
    }
    if (typeof padding === 'string') {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }
  const str = padLeft('Hello world', 4);
  console.log('union types: ', str);

  interface Bird {
    fly(): void;
    layEggs(): void;
  }
  interface Fish {
    swim(): void;
    layEggs(): void;
  }
  const bird: Bird = {
    fly() {
      console.log('I can fly.');
    },
    layEggs() {
      return 2;
    }
  };
  const fish: Fish = {
    swim() {
      console.log('I can swim.');
    },
    layEggs() {
      return 0;
    }
  };
  console.log(bird, fish);

  type NetworkLoadingState = {
    state: 'loading';
  };
  type NetworkFailedState = {
    state: 'failed';
    code: number;
  };
  type NetworkSuccessState = {
    state: 'success';
    response: {
      title: string;
      duration: number;
      summary: string;
    };
  };
  type NetworkState =
    | NetworkLoadingState
    | NetworkFailedState
    | NetworkSuccessState;

  function newworkStatus(state: NetworkState): string {
    switch (state.state) {
      case 'loading':
        return 'downloading...';
      case 'failed':
        return `Error ${state.code} downloading`;
      case 'success':
        return `downloaded ${state.response.title} - ${state.response.summary}`;
    }
  }
  const net: NetworkLoadingState = {
    state: 'loading'
  };
  console.log('Discriminating unions: ', newworkStatus(net));

  interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }
  interface ArtworksData {
    antworks: { title: string }[];
  }
  interface ArtistsData {
    artists: { name: string }[];
  }
  type ArtworksResponse = ArtworksData & ErrorHandling;
  type ArtistsResponse = ArtistsData & ErrorHandling;

  const handleArtistsResponse = (response: ArtistsResponse): void => {
    if (response.error) {
      console.log(response.error.message);
      return;
    }
    console.log(response.artists);
  };
  const res: ArtistsResponse = {
    artists: [{name: 'a'}, {name: 'b'}],
    success: false,
    error: {
      message: 'hello'
    }
  };
  const art: ArtworksResponse = {
    antworks: [{title: 'a'}, {title: 'b'}],
    success: false,
    error: {
      message: 'hello'
    }
  };
  console.log(handleArtistsResponse(res), {...art});
}
