import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import Footer from './components/footer';
import ContactForm from './components/contact-form';
import Carousel from './components/carousel';
import AboutUs from './components/aboutus';
import Services from './components/services';
import Testimonial from './components/testimonial';
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [menuitem, setPosts] = useState([]);
  const fetchPost = async () => {
  const response = await axios("http://127.0.0.1:8000/api/menu/")
      setPosts(response.data)
      console.log(response.data)
  }
  useEffect(() => {
    fetchPost();
   }, []);


  return <>
    <Navbar />
    <Carousel/>
    <Services/>
    <AboutUs />
    
    <div className="container d-flex flex-row align-content-start flex-wrap my-5">
      {
        
       menuitem.map(item => {
       return <Card image={item.image} title={item.name} price={item.price} />})
      }
        
      {/* ["apple","orange","mango","grapes","banana","pear"].map(item => {
      return <Card  title={item} />})
      }
     () => {} */}
    </div>
  
    {/* <ContactForm/> */}
    {/* <Testimonial/> */}
    <Footer />
    </>;
}

export default App;
