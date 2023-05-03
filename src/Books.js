import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Books = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* Hero Section */}
            <div className="hero-section all-books"></div>
            {/* End of Hero Section */}

            { error && <div className="error-msg">{ error }</div> }
            { isPending && <div className="loading">Loading...</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Bankah')} title="Bankah's Blogs" /> */}
        </div>
    );
}
 
export default Books;