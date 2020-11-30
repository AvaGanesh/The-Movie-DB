export interface TVResponse {
    page: number;
    total_pages: number;
    results: TV[];
    total_results: number;
}

export interface TV {
    original_language: string;
    origin_country: string[];
    poster_path: string;
    id: number;
    first_air_date: string;
    popularity: number;
    overview: string;
    name: string;
    original_name: string;
    backdrop_path: string;
    vote_average: number;
    genre_ids: number[];
    vote_count: number;
}