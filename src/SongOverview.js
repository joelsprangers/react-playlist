import React, { Component } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import SongFilter from "./components/SongFilter";
import NavBar from "./components/NavBar";
import Background from "./components/Background";
import "./css/SongOverview.css";

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
          title: "Fountain",
          artist: "Ionnalee",
          genre: "pop",
          rating: 2,
        },
        {
          id: 102,
          title: "The Rose",
          artist: "Lakshmi",
          genre: "indie",
          rating: 3,
        },
        {
          id: 103,
          title: "bla",
          artist: "BLACKPINK",
          genre: "rock",
          rating: 2,
        },
        {
          id: 104,
          title: "Therefore I am",
          artist: "Billie Eilish",
          genre: "indie",
          rating: 5,
        },
      ],
      byGenre: "default",
      byRating: "default",
      azArtist: false,
      azSong: false,
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
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({ [name]: value });
    //console.log(this.state);
  };

  render() {
    return (
      <div className="App-body app-grid">
        <NavBar />
        <Background />
        <SongForm addSong={this.addSong} onInput={this.onInput} />
        <SongList songsAndFilter={this.state} deleteSong={this.deleteSong} />
        <SongFilter filter={this.state} onInput={this.onInput} />
      </div>
    );
  }
}

export default SongOverview;
