import { Link } from 'react-router-dom';

const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            <div className='blog-preview-container'>
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{ blog.title }</h2>
                            <h3 className="blog-snippet">{ blog.shortDescription }</h3>
                            <p>Written by: <i><b>{ blog.author }</b></i></p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default BlogList;