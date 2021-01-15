import React, { Component } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import SongFilter from "./components/SongFilter";

class SongOverview extends Component {
  constructor() {
    super();

    this.state = {
      songs: [
        {
          id: 100,
          title: "Therefore I am",
          artist: "Billie Eilish",
          genre: "indie",
          rating: 5,
        },
        {
          id: 101,
          title: "Therefore I am",
          artist: "Billie Eilish",
          genre: "rock",
          rating: 3,
        },
        {
          id: 102,
          title: "Therefore I am",
          artist: "Billie Eilish",
          genre: "indie",
          rating: 5,
        },
        {
          id: 103,
          title: "Therefore I am",
          artist: "Billie Eilish",
          genre: "pop",
          rating: 5,
        },
        {
          id: 104,
          title: "Therefore I am",
          artist: "Billie Eilish",
          genre: "rock",
          rating: 1,
        },
      ],
      byGenre: "default",
      byRating: "default",
    };

    this.deleteSong = this.deleteSong.bind(this);
    this.addSong = this.addSong.bind(this);
    this.onInput = this.onInput.bind(this);
  }

  addSong = (song) => {
    song.id = this.state.songs.length + Math.floor(Math.random() * 10000);
    this.setState({ songs: this.state.songs.concat(song) });
  };

  deleteSong = (event) => {
    let songId = event.target.id;
    let songToDelete = this.state.songs.filter(
      (song) => song.id === parseInt(songId)
    );
    let indexOfSong = this.state.songs.indexOf(songToDelete[0]);

    this.setState((prevState) => {
      let songsList = [...prevState.songs];
      songsList.splice(indexOfSong, 1);
      let newState = { ...prevState, songs: songsList };
      return newState;
    });
  };

  onInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    const filteredByGenre = (songs) => {
      if (this.state.byGenre !== "default") {
        let filter = this.state.songs.filter(
          (song) => song.genre === this.state.byGenre
        );

        return filter;
      } else return songs;
    };

    const filteredByRating = (songs) => {
      if (this.state.byRating !== "default") {
        let filter = songs.filter(
          (song) => song.rating === parseInt(this.state.byRating)
        );

        return filter;
      } else return songs;
    };

    let filteredSongs = (songs) => {
      let genreFilter = filteredByGenre(songs);
      let ratingFilter = filteredByRating(genreFilter);
      return ratingFilter;
    };

    return (
      <div>
        <SongForm addSong={this.addSong} onInput={this.onInput} />
        <SongList
          songs={filteredSongs(this.state.songs)}
          deleteSong={this.deleteSong}
        />
        <SongFilter filter={this.state.filter} onInput={this.onInput} />
      </div>
    );
  }
}

export default SongOverview;
