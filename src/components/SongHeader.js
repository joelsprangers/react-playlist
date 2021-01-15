import React from "react";

const SongHeader = () => {
  return (
    <thead>
      <tr className="song-header">
        <th className="song-row__item">Song</th>
        <th className="song-row__item">Artist</th>
        <th className="song-row__item">Genre</th>
        <th className="song-row__item">Rating</th>
      </tr>
    </thead>
  );
};

export default SongHeader;
