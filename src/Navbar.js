import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav-container' >
            <nav className="navbar">
                <h1>IRead</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/books">Books</Link>
                    <Link to="/create">Create</Link>
                    {/* <Link to="/" style={{
                        borderBottom: '1px solid #f1356d',
                        opacity: '0.9'
                    }}>Profile</Link> */}
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;