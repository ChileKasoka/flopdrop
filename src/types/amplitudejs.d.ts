declare module "amplitudejs" {
  interface Song {
    name: string;
    artist: string;
    album?: string;
    url: string;
    cover_art_url?: string;
  }

  interface AmplitudeConfig {
    songs: Song[];
    playlists?: Record<string, { songs: number[] }>;
    volume?: number;
    autoplay?: boolean;
  }

  interface AmplitudeStatic {
    init(config: AmplitudeConfig): void;
    play(): void;
    pause(): void;
    stop(): void;
    next(): void;
    prev(): void;
    setVolume(volume: number): void;
    getActiveSongMetadata(): Song | null;
    bind(event: string, callback: (...args: any[]) => void): void;
  }

  const Amplitude: AmplitudeStatic;
  export default Amplitude;
}
