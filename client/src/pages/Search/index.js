import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Mylist, Mylistitem } from "../../components/List";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import GoogleApi from '../../utils/GoogleAPI';
import API from '../../utils/API';
import SavedBooks from '../../components/SavedBooks';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    }, 
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root1: {
    flexGrow: 1,
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }

}));

export default function SimpleCard() {
  const classes = useStyles();

  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState("")

  function bookSearch() {
    GoogleApi.findBooks(formObject).then(results => {
      console.log(results);

      setBooks(results.data.items.map(book => {
        return {
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          link: book.volumeInfo.infoLink,
          image: book.volumeInfo.imageLinks.thumbnail
        }
      }));
    }).catch(err => setBooks([]))
  }

  function handleInputChange({ target }) {
    setFormObject(target.value);
    console.log(target.value);
    // add code to control the components here
  }

  function handleFormSubmit(event) {
    // add code here to post a new book to the api
    console.log("hiting buttom");
    event.preventDefault();
    console.log(formObject);
    bookSearch();
    console.log(books)
  }

  function storeBook(bookNum) {
    const targetBook = books[bookNum];
    console.log(targetBook);
    API.saveBook(targetBook).then(res => {
      console.log(res);
    }).catch(err => console.log(err))
  }



  return (
    <div>
      <Container maxWidth="md" style={{ borderWidth: '1px', border: 'solid', marginBottom: '10px' }}>
        <Typography>

          <h3 style={{ textAlign: 'left' }}>Books</h3>

        </Typography>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            fullWidth="true"
            placeholder="Search…"
            onChange={handleInputChange}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Button size="small"
          onClick={handleFormSubmit}
        >Search</Button>
      </Container>

      <Container maxWidth="md" style={{ borderWidth: '1px', border: 'solid' }} >
        <Typography>

          <h3 style={{ textAlign: 'left' }}>Saved Books</h3>

        </Typography>

          {/* {books.lenght ? ( */}
          <Mylist >
            {books.map((book, index) => {
              return (
                <Mylistitem key={index}>
                <SavedBooks img={book.image} title={book.title} authors={book.authors} bookLink={book.link} description={book.description}/>
                <Button
                onClick={() => storeBook(index)}
                variant="contained"
                color="secondary">
                Save
                </Button>
                </Mylistitem>
              )
            })}
            </Mylist>
            
          {/* ) : (<h3>No Results to Display</h3> )} */}
      </Container>
    </div>
  )
}



