import { Component } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import NotesForm from "./components/NotesForm";
import Notes from "./components/Notes";

class App extends Component {
  constructor() {
    super();
    this.state = { notes: [] };
  }

  addNote = (note) => {
    this.setState({ notes: [...this.state.notes, note] });
  };

  render() {
    return (
      <div className="app">
        <NavBar />
        <NotesForm afterSubmit={this.addNote} />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
