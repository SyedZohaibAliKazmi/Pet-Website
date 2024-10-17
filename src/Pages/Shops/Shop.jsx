import { Link, NavLink } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './Shop.css'

function Shop() {

    return(
        <div>
            <Navbar/>

            <div className="sub-link-container">

            <div className="sub-link">
 
                <ul>
                    <li><NavLink to={"/food"}  activeClassName="active">Food</NavLink></li>
                    <li><Link>Medicine </Link></li>
                    <li><Link>Accessories </Link></li>
                    
                </ul>
            </div>



            </div>
        </div>
    )
    
}

export default Shop;