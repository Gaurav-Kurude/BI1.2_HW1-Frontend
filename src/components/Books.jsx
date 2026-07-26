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
                  {data.map((book) => (
                   <li key={book._id ?? book.title}>
                     <p>{book.title}</p>
                     <p>{book.author}</p>
                     <p>{book.publishedYear}</p>
                     <p>{book.genre}</p>
                     <p>{book.language}</p>
                     <p>{book.country}</p>
                     <p>{book.rating}</p>
                     <p>{book.summary}</p>
                     <p>{book.coverImageUrl}</p>
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