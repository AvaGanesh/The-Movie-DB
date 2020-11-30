import { Genre } from './genre-response';

export interface MovieResponse {
    results: Movies[];
    total_results: number;
    page: number;
    total_pages: number;
}

export interface Movies {
    popularity: number;
    vote_count: number;
    release_date: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    title: string;
    tagline?: string;
    runtime?: number;
    genres: Genre[];
    genre_ids: number[];
    original_language: string;
    original_title: string;
    poster_path: string;
    overview: string;
    video: boolean;
    vote_average: number;
}
