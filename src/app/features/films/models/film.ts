export interface Film {
  id: number;
  title: string;
  originalTitle: string;
  overview: string;
  releaseDate: string;
  note: number;
  voteCount: number;
  posterUrl: string;
  backdropUrl: string;
  genres: number[]; // ou string[] si tu veux les noms
  originalLanguage: string;
  isAdult: boolean;
}
