// import "./MoviesList.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from "@fortawesome/free-solid-svg-icons";
// import NotFound from "../Not Found/NotFound";
// import PaginationBar from "../Pagination/PaginationBar";
// import { Link } from "react-router-dom"; // Import Link

// const MoviesList = ({ movies, getPage, pageCount }) => {
//   return (
//     <main className="main">
//       <div className="cards">
//         {movies.length > 0 ? (
//           movies.map((movie) => (
//             <Link to={`/movie/${movie.id}`} key={movie.id}> {/* Add 'to' and 'key' */}
//               <div className="card">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                   alt={movie.title}
//                 />
//                 <FontAwesomeIcon icon={faPlay} className="play-icon" />
//               </div>
//             </Link>
//           ))
//         ) : (
//           <NotFound /> // Message when there are no movies
//         )}
//       </div>
//       <PaginationBar getPage={getPage} pageCount={pageCount} />
//     </main>
//   );
// };

// export default MoviesList;

// * new version of this code 

import "./MoviesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon
import { faPlay } from "@fortawesome/free-solid-svg-icons"; // Importing faPlay
import NotFound from "../Not Found/NotFound";
import PaginationBar from "../Pagination/PaginationBar";
import { Link } from "react-router-dom"; // Import Link

const MoviesList = ({ movies, getPage, pageCount }) => {
  return (
    <main className="main">
      <div className="cards">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              state={{ movie }} // Pass the selected movie as state
              key={movie.id}
            >
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <FontAwesomeIcon icon={faPlay} className="play-icon" />
              </div>
            </Link>
          ))
        ) : (
          <NotFound /> // Message when there are no movies
        )}
      </div>
      <PaginationBar getPage={getPage} pageCount={pageCount} />
    </main>
  );
};

export default MoviesList;
