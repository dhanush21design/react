import React from 'react'

const About = () => {

  const danush = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "description": "High-quality over-ear wireless headphones with noise cancellation and 20-hour battery life.",
      "price": 89.99,
      "image":"https://images-eu.ssl-images-amazon.com/images/I/51GIeLAOF1L._AC_UL450_SR450,320_.jpg"
    },
    {
      "id": 2,
      "name": "Wireless Bluetooth Headphones",
      "description": "High-quality over-ear wireless headphones with noise cancellation and 20-hour battery life.",
      "price": 89.99,
      "image":"https://images-eu.ssl-images-amazon.com/images/I/51GIeLAOF1L._AC_UL450_SR450,320_.jpg"
    },
    {
      "id": 3,
      "name": "Wireless Bluetooth Headphones",
      "description": "High-quality over-ear wireless headphones with noise cancellation and 20-hour battery life.",
      "price": 89.99,
      "image":"https://images-eu.ssl-images-amazon.com/images/I/51GIeLAOF1L._AC_UL450_SR450,320_.jpg"
    },
    {
      "id": 4,
      "name": "Wireless Bluetooth Headphones",
      "description": "High-quality over-ear wireless headphones with noise cancellation and 20-hour battery life.",
      "price": 89.99,
      "image":"https://images-eu.ssl-images-amazon.com/images/I/51GIeLAOF1L._AC_UL450_SR450,320_.jpg"
    },
    {
      "id": 5,
      "name": "Wireless Bluetooth Headphones",
      "description": "High-quality over-ear wireless headphones with noise cancellation and 20-hour battery life.",
      "price": 89.99,
      "image":"https://images-eu.ssl-images-amazon.com/images/I/51GIeLAOF1L._AC_UL450_SR450,320_.jpg"
    },
    {
      "id": 6,
      "name": "Wireless Bluetooth Headphones",
      "description": "High-quality over-ear wireless headphones with noise cancellation and 20-hour battery life.",
      "price": 89.99,
      "image":"https://images-eu.ssl-images-amazon.com/images/I/51GIeLAOF1L._AC_UL450_SR450,320_.jpg"
    },
    {
      "id": 7,
      "name": "Wireless Bluetooth Headphones",
      "description": "High-quality over-ear wireless headphones with noise cancellation and 20-hour battery life.",
      "price": 89.99,
      "image":"https://images-eu.ssl-images-amazon.com/images/I/51GIeLAOF1L._AC_UL450_SR450,320_.jpg"
    }
   ]
  return (
    <>
    <section>
      <div className='container'>
            <div className='row'>
              {
              danush.map((item)=>(
              <div className='col-lg-6'>
          <div className='card' key={item.id}>
            <img src={item.image} alt=''/>
            <p>{item.name}</p>
            <p>₹ {item.price}</p>
            <p>{item.description}</p>
          </div>
          </div>
          ))
        }
         </div>
      </div>
    </section>
    </>
  )
}

export default About