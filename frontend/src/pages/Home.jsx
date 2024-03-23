import { useState,useEffect }  from 'react';

import { useDispatch, useSelector } from 'react-redux';
const BookCard = ({ name, year, genre, authorName }) => {
  return (
    <div className="card">
      <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" alt="Book Cover" />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <span className="card-text">Author: {authorName}</span>  <br />
        <span className="card-text">Genre: {genre}</span> <br />
        <span className="card-text">Year: {year}</span> <br />
        <span href="#!" className="btn btn-primary" data-mdb-ripple-init>View Details</span>
      </div>
    </div>
  );
};
const Home = () => {
  const [books, setBooks] = useState([]);
console.log('Bilal')
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8000/book/user',{
        credentials:'include'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      console.log(data)
      setBooks(data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  return (
    <div>
      <div className="bg-danger row m-2 p-2">
        <div className="col-md-8 m-2 left p-2 bg-primary">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {books.map((book, index) => (
                <div className="col" key={index}>
                  <BookCard
                    name={book.name}
                    authorName={book.Author.name}
                    genre={book.genre}
                    year={book.year}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md m-2 right p-2 bg-light">

<button className='btn btn-primary m-3'>Add Book</button>
<button className='btn btn-primary m-3'>Delete Book</button> 
<button className='btn btn-primary m-3'>Update Book</button> 
<button className='btn btn-primary m-3'>Search Book</button> 
<button className='btn btn-primary m-3'>Add Book</button> 


        </div>
      </div>
    </div>
  );
};

export default Home
