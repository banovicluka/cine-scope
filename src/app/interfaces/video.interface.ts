export interface Video {
    type: string;
    site: string;
    key: string;
}

export interface VideoResults{
    results: Video[];
}