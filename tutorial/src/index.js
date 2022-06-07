// React Version 17
// import React from "react";
// import ReactDom from "react-dom";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

// React Version 18.1
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

// React Version 17
// ReactDom.render(<Greeting />, document.getElementById("root"));

root.render(<BookList />);
