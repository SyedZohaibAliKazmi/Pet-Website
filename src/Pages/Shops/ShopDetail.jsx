import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../Components/Navbar/Navbar";
import './ShopDetail.css'
import { faXmark } from "@fortawesome/free-solid-svg-icons";  // Import the Xmark icon
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // ES 2015
// import { db } from "../../Utils/firebase";
dayjs.extend(relativeTime);

function ShopDetail() {

    return(
        <div>
          <Navbar/>

          <div className="main-container">

          <button className="cancel-button" ><FontAwesomeIcon icon={faXmark}/></button>
          <div className="detail-main">
        <div className="image">
          <img src={"https://plus.unsplash.com/premium_photo-1729283814187-9b3d09e4ee32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"} alt={"title"} />
        </div>
        <div className="detail-text">
          
          
          <h1> {"Shrak"}</h1>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#f5f4dc",
              width: "90% ",
              margin: "6px 0",
            }}
          />
          <h2>$: {"100"}</h2>
          <p>
            <span>Description: </span> <br />
            {"desc"}
          </p>
          <p>
            <span>Location:</span>
            <br />
            {"location"}
          </p>
          <p>
            <span>Quantity:</span> <br />
            {"quantity"}
          </p>
          <h4>
            <span>Posted:</span> <br />
            {/* {dayjs().to(createdAt.toDate())} */}
          </h4>
          <button onClick={""}>Bid Now</button>
        </div>
      </div>

          </div>


        </div>
    )
    
}

export default ShopDetail;