"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css"; 
import Header from "@/components/Header";
import DropdownBtn from "@/components/Button";
import Sidebar from "@/components/Sidebar"; 
import ProductCard from "@/components/Product";
import Footer from "@/components/Footer"; 


export default function Dashboard() {
  // State to store product data and filter visibility
  const [products, setProducts] = useState([]);
  const [isFilterVisible, setFilterVisible] = useState(true);

  // Toggle filter visibility on button click
  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  //Fetch product data on component mount
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  
  return (
    <div>
      
      <Header />

     
      <main className="main container">
        <p className="home">
          HOME | <span>SHOP</span>
        </p>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a
          beatae sunt velit eveniet laboriosam aliquid, facere ad pariatur illo
          quasi recusandae.
        </p>

       
        <DropdownBtn
          toggleFilter={toggleFilter}
          isFilterVisible={isFilterVisible}
        />

       
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
    
          <Sidebar isFilterVisible={isFilterVisible} />

          
          <div className="grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

     
      <Footer />
    </div>
  );
}