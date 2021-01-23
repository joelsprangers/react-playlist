import React from "react";
import SongHeader from "./SongHeader";

const SongList = (props) => {
  const filteredByGenre = (songs) => {
    if (props.songsAndFilter.byGenre !== "default") {
      let filter = props.songsAndFilter.songs.filter(
        (song) => song.genre === props.songsAndFilter.byGenre
      );

      return filter;
    } else return songs;
  };

  const filteredByRating = (songs) => {
    if (props.songsAndFilter.byRating !== "default") {
      let filter = songs.filter(
        (song) =>
          parseInt(song.rating) === parseInt(props.songsAndFilter.byRating)
      );

      return filter;
    } else return songs;
  };

  const filteredByAzArtist = (songs) => {
    if (props.songsAndFilter.azArtist) {
      let filter = songs.sort((a, b) => a.artist.localeCompare(b.artist));
      return filter;
    } else return songs;
  };

  const filteredByAzSong = (songs) => {
    if (props.songsAndFilter.azSong) {
      let filter = songs.sort((a, b) => a.title.localeCompare(b.title));
      return filter;
    } else return songs;
  };

  let filteredSongs = (songs) => {
    let azArtist = filteredByAzArtist(songs);
    let azSong = filteredByAzSong(azArtist);
    let genreFilter = filteredByGenre(azSong);
    let ratingFilter = filteredByRating(genreFilter);
    return ratingFilter;
  };

  let filteredSongList = filteredSongs(props.songsAndFilter.songs);

  return (
    <table className="song-table grid-main">
      <SongHeader />
      <tbody className="song-list">
        {filteredSongList.map((song) => {
          return (
            <tr key={song.id} className="song-row">
              <td key="song-item-title" className="song-item">
                {song.title === "" ? "unknown song" : song.title}
              </td>
              <td key="song-item-artist" className="song-item">
                {song.artist === "" ? "unknown artist" : song.artist}
              </td>
              <td key="song-item-genre" className="song-item">
                {song.genre === "" ? "unknown genre" : song.genre}
              </td>
              <td key="song-item-rating" className="song-item">
                {song.rating === "" ? "not rated" : song.rating}
              </td>
              <td
                className="song-item-delete"
                id={song.id}
                key={song.id}
                onClick={props.deleteSong}
              >
                {" "}
                delete{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SongList;
