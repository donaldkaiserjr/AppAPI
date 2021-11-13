export default function CharacterCount({ text }) {
  return (
    <div className="charCount">
      {`The sentence:  `}
      <i>{` "${text}"`}</i>
      {" has "}
      {text.length ? <strong>{text.length}</strong> : "No"}
      {" characters"}
    </div>
  );
}
