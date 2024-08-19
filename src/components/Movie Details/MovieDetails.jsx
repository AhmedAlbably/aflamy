import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NotFound from "../Not Found/NotFound";
import "./MovieDetails.css";
import { Link } from "react-router-dom";
const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state?.movie; // Get the movie from the state

  if (!movie) {
    return <NotFound />; // Handle the case where no movie is found
  }

  return (
    <Container>
      <div className="movie-details">
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="description">
          <h1 style={{ color: "#000000" }}>
            اسم الفيلم<span style={{ color: "#FF6347" }}> ⇒ {movie.title}</span>
          </h1>
          <h3 style={{ color: "#000000" }}>
            تاريخ الإصدار
            <span style={{ color: "#4682B4" }}> ⇒ {movie.release_date}</span>
          </h3>
          <p style={{ color: "#000000" }}>
            ملخص الفيلم
            <span style={{ color: "#2E8B57" }}> ⇒ {movie.overview}</span>
          </p>
          <h3 style={{ color: "#000000" }}>
            تقييم الفيلم
            <span style={{ color: "#FFD700" }}> ⇒ {movie.vote_average}</span>
          </h3>
          <h3 style={{ color: "#000000" }}>
            عدد الأصوات
            <span style={{ color: "#32CD32" }}> ⇒ {movie.vote_count}</span>
          </h3>
        </div>
      </div>
      <div className="options">
        <Link to={'/'}
        ><button className="home">العودة إلى القائمة الرئيسية</button></Link>
        <button className="watch">مشاهدة الفيلم</button>
      </div>
    </Container>
  );
};

export default MovieDetails;


// * new version of my code 

// import { useParams } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import NotFound from "../Not Found/NotFound";
// import "./MovieDetails.css";
// import { Link } from "react-router-dom";

// const MovieDetails = ({ movies }) => {
//   const { id } = useParams(); // Get the movie ID from the URL params
//   const movie = movies.find((movie) => movie.id === parseInt(id)); // Find the movie in the list

//   if (!movie) {
//     return <NotFound />; // Handle the case where no movie is found
//   }

//   return (
//     <Container>
//       <div className="movie-details">
//         <div className="image">
//           <img
//             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             alt={movie.title}
//           />
//         </div>

//         <div className="description">
//           <h1 style={{ color: "#000000" }}>
//             اسم الفيلم<span style={{ color: "#FF6347" }}> ⇒ {movie.title}</span>
//           </h1>
//           <h3 style={{ color: "#000000" }}>
//             تاريخ الإصدار
//             <span style={{ color: "#4682B4" }}> ⇒ {movie.release_date}</span>
//           </h3>
//           <p style={{ color: "#000000" }}>
//             ملخص الفيلم
//             <span style={{ color: "#2E8B57" }}> ⇒ {movie.overview}</span>
//           </p>
//           <h3 style={{ color: "#000000" }}>
//             تقييم الفيلم
//             <span style={{ color: "#FFD700" }}> ⇒ {movie.vote_average}</span>
//           </h3>
//           <h3 style={{ color: "#000000" }}>
//             عدد الأصوات
//             <span style={{ color: "#32CD32" }}> ⇒ {movie.vote_count}</span>
//           </h3>
//         </div>
//       </div>
//       <div className="options">
//         <Link to='/'>
//           <button className="home">العودة إلى القائمة الرئيسية</button>
//         </Link>
//         <a href={movie.backdrop_path}>
//         <button className="watch">مشاهدة الفيلم</button>
//         </a>
//       </div>
//     </Container>
//   );
// };

// export default MovieDetails;






