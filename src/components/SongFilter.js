import React from "react";

const SongFilter = (props) => {
  return (
    <form>
      <select
        className="filter-genre"
        value={props.byGenre}
        name="byGenre"
        onChange={props.onInput}
      >
        <option value="">filter by genre</option>
        <option value="default">default</option>
        <option value="pop">pop</option>
        <option value="indie">indie</option>
        <option value="metal">metal</option>
        <option value="rock">rock</option>
        <option value="pop">other</option>
      </select>
      <select
        className="filter-rating"
        value={props.byRating}
        name="byRating"
        onChange={props.onInput}
      >
        <option value="">filter by rating</option>
        <option value="default">default</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </form>
  );
};

export default SongFilter;
