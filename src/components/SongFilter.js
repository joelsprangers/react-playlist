import React from "react";

const SongFilter = (props) => {
  return (
    <form className="grid-side playlist-input-filter">
      <label className="input-filter">
        filter by genre
        <select
          className="input-filter-flex"
          value={props.filter.byGenre}
          name="byGenre"
          onChange={props.onInput}
        >
          <option value="default">default</option>
          <option value="pop">pop</option>
          <option value="indie">indie</option>
          <option value="metal">metal</option>
          <option value="rock">rock</option>
          <option value="pop">other</option>
        </select>
      </label>
      <label className="input-filter">
        filter by rating
        <select
          className="input-filter-flex"
          value={props.filter.byRating}
          name="byRating"
          onChange={props.onInput}
        >
          <option value="default">default</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <label className="input-filter">
        a-z (artist)
        <input
          className="input-filter-flex"
          type="checkbox"
          name="azArtist"
          checked={props.filter.azArtist}
          onChange={props.onInput}
        />
      </label>
      <label className="input-filter">
        a-z (songs)
        <input
          className="input-filter-flex"
          type="checkbox"
          name="azSong"
          checked={props.filter.azSong}
          onChange={props.onInput}
        />
      </label>
    </form>
  );
};

export default SongFilter;
