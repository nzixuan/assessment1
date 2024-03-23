const AuthorList = ({ authors }) => {
  return (
    <div className="p-4">
      <h3>Submitted Authors</h3>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
