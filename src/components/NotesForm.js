import { Component } from "react";

class NotesForm extends Component {
  constructor() {
    super();
    this.state = { input: "" };
  }

  addNote = (event) => {
    event.preventDefault();
    this.props.afterSubmit(this.state.input);
    this.setState({ input: "" });
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addNote}>
        <h3>Notes</h3>
        <input
          name="note-input"
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type="submit">Add note</button>
      </form>
    );
  }
}

export default NotesForm;
