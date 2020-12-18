import React from 'react'
import MovieDataInterface from '../../interfaces/MovieData';




interface propsInterface {
  item: MovieDataInterface
}



function MovieListItem(props: propsInterface) {
  const { item } = props;
  const movieImage = item.poster_path ? "https://image.tmdb.org/t/p/w185" + item.poster_path : "/Logo.png";

  return (
    <li>
    <div className="myUserProfileIcon" style={{background: `url(${ movieImage }) center/cover` }}></div>
    <div>
      <div className="myUserName blue-text">
        {item.title}
      </div>

      <p className="grey-text">
        {item.tagline || "released on " + item.release_date}
      </p>
    </div>

    <div className="fa fa-star">
      { item.vote_average }
    </div>

  </li>
  )
}

export default MovieListItem
