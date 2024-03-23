import React from "react";
import { useState } from "react";
import AuthorForm from "./AuthorForm";
import AuthorList from "./AuthorList";
const AuthorPage = () => {
  const [submittedAuthors, setSubmittedAuthors] = useState([]);
  const addAuthor = (authorName) => {
    setSubmittedAuthors([...submittedAuthors, authorName]);
  };
  return (
    <div>
      <AuthorForm addAuthor={addAuthor}></AuthorForm>
      <AuthorList authors={submittedAuthors}></AuthorList>
    </div>
  );
};

export default AuthorPage;
