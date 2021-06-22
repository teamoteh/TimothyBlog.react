import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Mrs Mahjong</h1>
            <div className = "links">
                <Link to = "/">Home</Link>
                <Link to="/rules" >Rules</Link>
                <Link to="/hand" >Winning Hands</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;