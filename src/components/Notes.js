const Notes = (props) => {
  return (
    <ul>
      {props.notes.map((note) => (
        <li key={note}>{note}</li>
      ))}
    </ul>
  );
};

export default Notes;
