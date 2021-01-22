import React, { Component } from "react";

class SongForm extends Component {
  state = {
    id: 0,
    title: "",
    artist: "",
    genre: "",
    rating: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    let song = this.state;
    this.props.addSong(song);
    this.setState({
      id: 0,
      title: "",
      artist: "",
      genre: "",
      rating: "",
    });
  };

  onInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <form className="grid-input playlist-input" onSubmit={this.onSubmit}>
        <input
          placeholder="title"
          name="title"
          onChange={this.onInput}
          value={this.state.title}
          className="input-primary"
        />
        <input
          placeholder="artist"
          name="artist"
          type="text"
          onChange={this.onInput}
          value={this.state.artist}
          className="input-primary"
        />

        <select
          className="input-primary"
          value={this.state.genre}
          name="genre"
          onChange={this.onInput}
        >
          <option value="">genre</option>
          <option value="pop">pop</option>
          <option value="indie">indie</option>
          <option value="metal">metal</option>
          <option value="rock">rock</option>
          <option value="pop">other</option>
        </select>

        <select
          className="input-primary"
          value={this.state.rating}
          name="rating"
          onChange={this.onInput}
        >
          <option value="">rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button className="button-primary" type="submit">
          add to Playlist
        </button>
      </form>
    );
  }
}

export default SongForm;
