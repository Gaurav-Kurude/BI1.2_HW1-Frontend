import useFetch from "../hooks/useFetch";

const Books = () => {

  const { data, loading , error } = useFetch("");
    // console.log(data)

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>Error loading movies: {error}</p>;
  }

  return(
    <div>
     {data.length ? (
     <ul>
        {data.map((book) => (
           <li key={book._id}>{book.title}</li>
        ))}
     </ul>
    ) : (
      <p>No books found.</p>
     )}
   </div>
    )
};
export default Books;