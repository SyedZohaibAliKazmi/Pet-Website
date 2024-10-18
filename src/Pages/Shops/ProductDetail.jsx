

function ProductDetail() {

    return(
        <div>
            <div className="detail-main">
        <div className="image">
          <img src={img} alt={title} />
        </div>
        <div className="detail-text">
          <div className="btn">
            <button onClick={handlePrevious}>X</button>
          </div>
          <BidModal
            isModalOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={title}
           
            price={price}
            ProductId={id}
          />
          <h1> {title}</h1>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#f5f4dc",
              width: "90% ",
              margin: "6px 0",
            }}
          />
          <h2>$ 20</h2>
          <p>
            <span>Description: </span> <br />
            {desc}
          </p>
          <p>
            <span>Location:</span>
            <br />
            {location}
          </p>
          <p>
            <span>Quantity:</span> <br />
            {quantity}
          </p>
          <h4>
            <span>Posted:</span> <br />
            {dayjs().to(createdAt.toDate())}
          </h4>
          <button onClick={handleOnBid}>Bid Now</button>
        </div>
      </div>
        </div>
    )
    
}