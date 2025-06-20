import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddProduct.css'; // Optional: only if you want to add custom styles

function AddProduct() {
  const [book, setBook] = useState({
    bookName: '',
    author: '',
    description: '',
    price: '',
    stockQuantity: '',
    releaseDate: '',
    productAvailable: false,
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      'book',
      new Blob([JSON.stringify(book)], { type: 'application/json' })
    );
    formData.append('image', imageFile); // ✅ Must match @RequestPart("image")

    try {
      await axios.post('http://localhost:8080/api/admin/addBook', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('✅ Book added successfully!');
    } catch (error) {
      console.error(error);
      alert('❌ Failed to add book');
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-5">
        <h2 className="text-center mb-4 text-primary fw-bold">📚 Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Book Name</label>
              <input type="text" name="bookName" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Author</label>
              <input type="text" name="author" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea name="description" rows="3" className="form-control" required onChange={handleChange}></textarea>
            </div>
            <div className="col-md-4">
              <label className="form-label">Price</label>
              <input type="number" name="price" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Stock Quantity</label>
              <input type="number" name="stockQuantity" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-4">
              <label className="form-label">Release Date</label>
              <input type="date" name="releaseDate" className="form-control" required onChange={handleChange} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Available</label>
              <div className="form-check form-switch mt-2">
                <input className="form-check-input" type="checkbox" name="productAvailable" onChange={handleChange} />
              </div>
            </div>
            <div className="col-md-6">
              <label className="form-label">Book Cover</label>
              <input type="file" accept="image/*" className="form-control" onChange={handleFileChange} required />
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary btn-lg px-5 mt-4 shadow">Add Book</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
