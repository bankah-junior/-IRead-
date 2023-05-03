import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not=found">
            <h2>Sorry</h2>
            <p>The page you're looking for can not be found!</p>
            <Link to="/">Back Home</Link>
        </div>
     );
}
 
export default NotFound;