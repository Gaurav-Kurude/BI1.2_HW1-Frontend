import useFetch from "../hooks/useFetch";

const Books = () => {

  const { data, loading , error } = useFetch("https://bi-1-2-hw-1-backend.vercel.app/books");
    // console.log(data)

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>Error loading movies: {error}</p>;
  }

  return(
    <div>
           {data?.length ? (
               <ul>
                <h2>List Of Books</h2>
                  {data.map((book) => (
                   <li key={book._id ?? book.title}>
                     <h3>{book.title}</h3>
                     <p>Author: {book.author}</p>
                     <p>Published Year: {book.publishedYear}</p>
                     <p>Genre: {book.genre.join(", ")}</p>
                     <p>Language: {book.language}</p>
                     <p>Country: {book.country}</p>
                     <p>Rating: {book.rating}</p>
                     <p>Summary: {book.summary}</p>
                     <p>Image: {book.coverImageUrl}</p>
                  </li>
            ))}
               </ul>
            ) : (
                   <p>No books found.</p>
                )}
   </div>
    )
};
export default Books;