import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import "./AddMovies.css";
import Modal from 'react-modal';
Modal.setAppElement('#root')
const AddMovie = ({ AddNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        Add new movie
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Movie Rate</label>
          <input
            type="text"
            name="rating"
            required
            onChange={(e) => setRating(e.target.value)}
          />
          
          <label>Movie Image</label>
          <input
            type="url"
            name="image"
            required
            onChange={(e) => setImage(e.target.value)}
          />
        </form>
        <button
          className="Modal-btn"
          onClick={() =>{
               AddNewMovie({
               image: image,
                name: name,
                stars: rating,
              });
              closeModal()
          }
          }
        >
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;
