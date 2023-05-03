import { useParams, useHistory } from 'react-router-dom';
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {/* Hero Section */}
            <div className="hero-section detail-book"></div>
            {/* End of Hero Section */}

            { isPending && <div className='loading'>Loading...</div> }
            { error && <div className='error-msg'>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by: <i><b>{ blog.author }</b></i></p>
                    <div className='longDescription'>{ blog.longDescription }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;