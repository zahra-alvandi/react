import "./product.css"

function Product() {
    return (
        <div className="container">
            <div className="card">
            <h2>Product Card</h2>
                <img src="img1.jpg" alt="" />
                <h1>Samsung A51</h1>
                <p className="price">$300</p>
                <p>It is the best smart phone for 2021.It is the best smart phone for 2021.</p>
                <p><button>Add To Cart</button></p>
            </div>
            <div className="card">
             <h2>Product Card</h2>
                <img src="img2.jpg" alt="" />
                <h1>Samsung A34</h1>
                <p className="price">$1000</p>
                <p>It is the best smart phone for 2024.It is the best smart phone for 2024.</p>
                <p><button>Add To Cart</button></p>
            </div>
            <div className="card">
             <h2>Product Card</h2>
                <img src="img3.jpg" alt="" />
                <h1>Note 10</h1>
                <p className="price">$1300</p>
                <p>It is the best smart phone for 2024.It is the best smart phone for 2024.</p>
                <p><button>Add To Cart</button></p>
            </div>
        </div>
    )
}

export default Product