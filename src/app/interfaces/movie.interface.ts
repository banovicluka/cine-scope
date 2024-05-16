export interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
    vote_average:number;
    origin_country: string[],
    genres: Genre[];
    imdb_id:string;
}

export interface MovieResults{
    results: Movie[];
}

export interface Genre {
    id: number;
    name: string;
}