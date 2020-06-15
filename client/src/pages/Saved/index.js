import React, { useEffect, useState } from "react";
import API from "../../utils/API";


import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SavedBooks from '../../components/SavedBooks';
import Container from '@material-ui/core/Container';
import { Mylist, Mylistitem } from "../../components/List";


export default function SimpleCard() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadSaved();
  }, []);

  function loadSaved() {
    API.getBooks().then(res => {
      setBooks(res.data)
      console.log(res);
    }).catch(err => console.log(err));
  };
  function deleteBook(id) {
    // add code here to remove a book using API
    API.deleteBook(id).then(result => {
      loadSaved();
    })
  }
  
  loadSaved();

  return (
    <Container maxWidth="md" style={{ borderWidth: '1px', border: 'solid' }}>
      <Typography>
        <h3 style={{ textAlign: 'left' }}>Saved Books</h3>

      </Typography>
      <Mylist>
        {books.map(book => {
          return (
            <Mylistitem key={book._id}>
              <SavedBooks img={book.image} title={book.title} authors={book.authors} bookLink={book.link} description={book.description} />
              <Button onClick={() => deleteBook(book._id)}>Delete</Button>
            </Mylistitem>
          );
        })}
      </Mylist>

    </Container>
  );
}




