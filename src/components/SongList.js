import React from "react";
import SongHeader from "./SongHeader";

const SongList = (props) => {
  return (
    <table className="song-header" style={{ width: "100%" }}>
      <SongHeader />
      <tbody>
        {props.songs.map((song) => {
          return (
            <tr key={song.id} className="song">
              <td key="song-item-title" className="song-item-title">
                {song.title === "" ? "unknown song" : song.title}
              </td>
              <td key="song-item-artist" className="song-item-artist">
                {song.artist === "" ? "unknown artist" : song.artist}
              </td>
              <td key="song-item-genre" className="song-item-genre">
                {song.genre === "" ? "unknown genre" : song.genre}
              </td>
              <td key="song-item-rating" className="song-item-rating">
                {song.rating === "" ? "not rated" : song.rating}
              </td>
              <td id={song.id} key={song.id} onClick={props.deleteSong}>
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
