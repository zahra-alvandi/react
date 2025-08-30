import "./product.css"

function Product({title:productTitle, img = "/img1.jpg", price, count}) {

    // console.log(props);
    // let {title, img, price , count} = props
    let title = "Product Card";
    return(
         <div>
            <div className="card">
             <h2>{title}</h2>
                 <img src={img} alt="" />
                 <h1>{productTitle}</h1>
                 <p className="price">{`$${price}`}</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit.</p>
                 <p><button>Add To Cart</button></p>
             </div>
        </div>
    )

    // return(
    //     props.count &&
    //         <div>
    //         <div className="card">
    //          <h2>{props.title}</h2>
    //              <img src={props.img} alt="" />
    //              <h1>Samsung A51</h1>
    //              <p className="price">{`$${props.price}`}</p>
    //              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit.</p>
    //              <p><button>Add To Cart</button></p>
    //          </div>
    //     </div>
    // )
    

    // if(props.count > 0) {
        // return(
        //     <div>
        //     <div className="card">
        //      <h2>{props.title}</h2>
        //          <img src={props.img} alt="" />
        //          <h1>Samsung A51</h1>
        //          <p className="price">{`$${props.price}`}</p>
        //          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit.</p>
        //          <p><button>Add To Cart</button></p>
        //      </div>
        // </div>
        // )
    // }
    // return null
    // return (
    //     // <div className="container">
    //     //     <div className="card">
    //     //     <h2>Product Card</h2>
    //     //         <img src="img1.jpg" alt="" />
    //     //         <h1>Samsung A51</h1>
    //     //         <p className="price">$300</p>
    //     //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit.</p>
    //     //         <p><button>Add To Cart</button></p>
    //     //     </div>
    //     //     <div className="card">
    //     //      <h2>Product Card</h2>
    //     //         <img src="img2.jpg" alt="" />
    //     //         <h1>Samsung A34</h1>
    //     //         <p className="price">$1000</p>
    //     //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit.</p>
    //     //         <p><button>Add To Cart</button></p>
    //     //     </div>
    //     //     <div className="card">
    //     //      <h2>Product Card</h2>
    //     //         <img src="img3.jpg" alt="" />
    //     //         <h1>Note 10</h1>
    //     //         <p className="price">$1300</p>
    //     //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit.</p>
    //     //         <p><button>Add To Cart</button></p>
    //     //     </div>
    //     // </div>
    //     // <div>
    //     //     <div className="card">
    //     //      <h2>{props.title}</h2>
    //     //          <img src={props.img} alt="" />
    //     //          <h1>Samsung A51</h1>
    //     //          <p className="price">{`$${props.price}`}</p>
    //     //          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit.</p>
    //     //          <p><button>Add To Cart</button></p>
    //     //      </div>
    //     // </div>
    // )
}

// Product.defaultProps = {
//     img: 'vite.svg',
// }

export default Product