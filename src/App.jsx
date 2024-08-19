import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import MoviesList from "./components/Movies LIst/MoviesList";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/Movie Details/MovieDetails";
import NotFound from "./components/Not Found/NotFound";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const getAllMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=bd29e5a0145a2c40e8f3f4ad24a61a31&language=ar"
      );
      setMovies(response.data.results);
      setPageCount(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (word) => {
    try {
      if (word === "") {
        getAllMovies();
      } else {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=bd29e5a0145a2c40e8f3f4ad24a61a31&language=ar&query=${word}`
        );
        setMovies(response.data.results);
        setPageCount(response.data.total_pages);
      }
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  const getPage = async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=bd29e5a0145a2c40e8f3f4ad24a61a31&language=ar&page=${page}`
      );
      setMovies(response.data.results);
      setPageCount(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <>
      <Header search={search} />
      <Container>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  pageCount={pageCount}
                  getPage={getPage}
                />
              }
            />
            <Route
              path="/movie/:id"
              element={<MovieDetails movies={movies} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
