import mongoose, { Document } from 'mongoose'




/* ------------------------------------------
.            MAIN INTERFACE
------------------------------------------ */
export default interface MovieInterface extends Document {
  "movieId": string,
  

  "poster_path"?: string,
  "release_date"?: string,
  "tagline"?: string,
  "title"?: string,
  "vote_average"?: number,


  "liked": boolean,
  
}





