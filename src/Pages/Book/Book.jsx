import React from "react";
import GuestBook from "../../Components/GuestBook/GuestBook";

import "./Book.css";

const Book = () => {
  return (
    <div className="book-container">
      <h1 className="book-title" id="book-title">
        <span className="book">Guest</span> Book
      </h1>
      <GuestBook />
    </div>
  );
};

export default Book;
