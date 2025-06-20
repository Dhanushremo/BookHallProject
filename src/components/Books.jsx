import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Books.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/user/getBooks')
      .then(res => setBooks(res.data))
      .catch(err => console.error("Failed to fetch books:", err));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary fw-bold mb-5">📚 Explore Books</h2>
      <div className="row g-4 justify-content-center">
        {books.map((book, index) => (
          <div className="col-md-4" key={index}>
            <div className="book-card glass-card p-4 shadow-lg text-center">
              {book.imageData ? (
                <img
                  src={`data:image/jpeg;base64,${book.imageData}`}
                  alt={book.bookName}
                  className="book-image mb-3"
                />
              ) : (
                <div className="placeholder-image mb-3">No Image</div>
              )}
              <h5 className="fw-bold">{book.bookName}</h5>
              <p className="text-muted">Author: {book.author}</p>
              <p className="description">{book.description}</p>
              <p><strong>₹{book.price}</strong></p>
              <p className="text-muted">Stock: {book.stockQuantity}</p>
              <p>
                <span className={`badge ${book.productAvailable ? 'bg-success' : 'bg-danger'}`}>
                  {book.productAvailable ? 'Available' : 'Out of Stock'}
                </span>
              </p>
              <button className="btn btn-outline-primary mt-2">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
