import Navbar from '../components/navbar';
import Card from '../components/card';
import Footer from '../components/footer';
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Menu() {
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

        <Navbar/>
        <h1 class="mt-3 text-center">MENU</h1>
        <h1 class="text-center">-----------------------------------------------------------------------------------------------</h1>

        <h1 class=" text-center">PIZZA</h1>
        <h1 class="text-center">-----------------------------------------------------------------------------------------------</h1>

 
        <div className="container d-flex flex-row align-content-start flex-wrap my-5">
      {
       
       menuitem.filter(i=>i.category=="Pizza").map(item => {
       return (
       <Card  image={item.image} title={item.name} price={item.price} />)})
      }
        
       {/* () => {} */}
      </div>
      <h1 class="text-center">-----------------------------------------------------------------------------------------------</h1>

      <h1 class="text-center">PASTA</h1>
      <h1 class="text-center">-----------------------------------------------------------------------------------------------</h1>


      <div className="container d-flex flex-row align-content-start flex-wrap my-5">
      {
       
       menuitem.filter(i=>i.category=="Pasta").map(item => {
       return (
       <Card  image={item.image} title={item.name} price={item.price} />)})
      }
      </div>
      <h1 class="text-center">-----------------------------------------------------------------------------------------------</h1>

      <h1 class="text-center">MOMOS</h1>
      <h1 class="text-center">-----------------------------------------------------------------------------------------------</h1>


      <div className="container d-flex flex-row align-content-start flex-wrap my-5">
      {
       
       menuitem.filter(i=>i.category=="Momos").map(item => {
       return (
       <Card  image={item.image} title={item.name} price={item.price} />)})
      }
      </div>
      <h1 class="text-center">-----------------------------------------------------------------------------------------------</h1>

      <h1 class="text-center">SIDES</h1>
      <h1 class="text-center">-----------------------------------------------------------------------------------------------</h1>


      <div className="container d-flex flex-row align-content-start flex-wrap my-5">
      {
       
       menuitem.filter(i=>i.category=="Sides").map(item => {
       return (
       <Card  image={item.image} title={item.name} price={item.price} />)})
      }
      </div>
      <h1 class="text-center">-----------------------------------------------------------------------------------------------</h1>

      <h1 class="text-center">DRINKS</h1>
      <h1 class="text-center">-----------------------------------------------------------------------------------------------</h1>


      <div className="container d-flex flex-row align-content-start flex-wrap my-5">
      {
       
       menuitem.filter(i=>i.category=="Drinks").map(item => {
       return (
       <Card  image={item.image} title={item.name} price={item.price} />)})
      }
      </div>
      <Footer/>
      </> 
    
}

