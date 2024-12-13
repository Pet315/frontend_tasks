import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountry, setUniversities, setError, reset } from "./redux/universitiesSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { country, universities, error } = useSelector((state) => state.universities);

  const fetchUniversities = async () => {
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      if (!response.ok) {
        throw new Error("Error in data loading.");
      }
      const data = await response.json();
      dispatch(setUniversities(data));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (country.trim() === "") {
      dispatch(setError("Error. Please, enter the country."));
      return;
    }
    fetchUniversities();
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="container">
      <h1 className="text-center">University Search</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={country}
          onChange={(e) => dispatch(setCountry(e.target.value))}
          placeholder="Enter the country"
          className="input"
        />
        <div className="buttons">
          <button type="submit" className="btn btn-submit">
            Send
          </button>
          <button type="button" className="btn btn-reset" onClick={handleReset}>
            Clear
          </button>
        </div>
      </form>

      {error && <p className="error">{error}</p>}

      {universities.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Country</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {universities.map((university, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{university.name}</td>
                <td>{university.country}</td>
                <td>
                  <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">
                    {university.web_pages[0]}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
