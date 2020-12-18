
interface genreInterface {
    "id": number,
    "name": string
}



interface productionCompaniesInterface {
    "id": number,
    "logo_path"?: string,
    "name": string,
    "origin_country"?: string
}



interface productionCountriesInterface {
    "iso_3166_1": string,
    "name": string
}


/* ------------------------------------------
.            MAIN INTERFACE
------------------------------------------ */
export default interface MovieDataInterface {
    adult: boolean,
    backdrop_path?: string,
    "belongs_to_collection"?: any,
    budget?: number,
    genres?: genreInterface[],



    homepage?: string,
    id: number,
    "imdb_id"?: string | number,
    "original_language"?: string,
    "original_title"?: string,



    overview?: string,
    popularity?: number,
    "poster_path"?: string,
    "production_companies"?: productionCompaniesInterface[],
    "production_countries"?: productionCountriesInterface[],






    "release_date"?: string,
    revenue?: number,
    runtime?: number,
    "spoken_languages"?: [],
    "status"?: string,





    "tagline"?: string,
    "title"?: string,
    "video"?: boolean,
    "vote_average"?: number,
    "vote_count": number,




    __v: any,
    _id: any
}

