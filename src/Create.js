import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [author, setAuthor] = useState('Oduro');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, shortDescription, longDescription, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added');
            setIsPending(false);
            // history.go(-1); // Going back once
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            {/* Hero Section */}
            <div className="hero-section new-books"></div>
            {/* End of Hero Section */}

            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Snippet:</label>
                <textarea
                    required
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                ></textarea>
                <label>Body:</label>
                <textarea
                    required
                    value={longDescription}
                    onChange={(e) => setLongDescription(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} 
                >
                    <option value="Oduro">Oduro</option>
                    <option value="Lawson">Lawson</option>
                    <option value="Afful">Afful</option>
                    <option value="Bankah">Bankah</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;