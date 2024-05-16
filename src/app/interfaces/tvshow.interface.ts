export interface TvShow {
    id: number;
    original_name: string;
    backdrop_path: string;
    overview: string;
    vote_average:number;
    origin_country: string[],
    genres: Genre[];
}

export interface TvShowResults{
    results: TvShow[];
}

export interface Genre {
    id: number;
    name: string;
}