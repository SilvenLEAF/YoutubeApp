import mongoose, { Schema } from 'mongoose'
import MovieInterface from '../interfaces/databaseInterfaces/MovieInterface';








/* ------------------------------------------
.                MAIN SCHEMA
------------------------------------------ */
const MovieSchema: Schema = new mongoose.Schema({

  movieId: String,
  

  "poster_path": String,
  "release_date": String,
  tagline: String,
  title: String,
  "vote_average": Number,


  liked: {
    type: Boolean,
    default: false,
  },
  ownerId: String,
  createdAt: Date,

});







/* ------------------------------------------
.                MOVIE MODEL
------------------------------------------ */
export default mongoose.model<MovieInterface>('User', MovieSchema);