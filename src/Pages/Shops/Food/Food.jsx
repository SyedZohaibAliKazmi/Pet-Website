
import { Link, NavLink } from 'react-router-dom';

import './Food.css'
import Navbar from '../../../Components/Navbar/Navbar';


function Food() {

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

export default Food;