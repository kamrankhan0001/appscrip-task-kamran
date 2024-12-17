//import Image from "next/image";
import Image from "next/image";
import './Product.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      
      <img src={product.image} alt={product.title} />  
      <h2>{product.title}</h2>     
      <div className="product-desc">
       <p>{product.description.split(" ").slice(0, 6).join(" ")}...</p>
        <Image src="/heart.png" 
         alt="heart"
         width="25" 
         height="25" />
      </div>
    </div>
  );
};

export default ProductCard;