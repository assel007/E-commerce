<template>
  <main class="hello-page">
    <button
      class="cart-button"
      type="button"
      aria-label="View cart"
      title="View cart"
      @click="router.push('/cart')">
      <span >🛒</span>
    </button>
    <section class="hello-card">
      <h1>Hello, {{ username }}!</h1>
      <h3>We are happy to see you!</h3>
    </section>
    <section class="images-container">
      <div class="products" 
        v-for="product in products"
        :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <p>Price: ${{ product.price }}</p>
        <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
      </div>
    </section>
    <section>
    <button class="back" @click="router.push ('/login')">back to login page</button>
    </section>
  </main>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const email = localStorage.getItem('userEmail')
const username = email.split('@')[0]
const products = [
{
id: 1,
name: 'Product 1',
price: 30,
image: '/picture11.jpg'
},
{
id: 2,
name: 'Product 2',
price: 48,
image: '/picture12.jpg'
},
{
  id: 3,
  name: 'Product 3',
  price: 35,
  image: '/picture13.jpg'
},
{
id: 4,
name: 'Product 4',
price: 50,
image: '/picture14.jpg'
},
{
id: 5,
name: 'Product 5',
price: 37,
image: '/picture15.jpg'
},
{
id: 6,
name: 'Product 6',
price: 35,
image: '/picture16.jpg'
},
{   
id: 7,
name: 'Product 7',  
price: 40,
image: '/picture17.jpg'
},
{
id: 8,
name: 'Product 8',
price: 40,
image: '/picture8.jpg'
},
{
id: 9,
name: 'Product 9',
price: 28,
image: '/picture9.jpg'
},
{
id: 10,
name: 'Product 10',
price: 50,
image: '/picture10.jpg'
},
]
const addToCart = (product) => {
 let cart = JSON.parse(localStorage.getItem('cart')) || [];
 const existingProduct = cart.find((item) => item.id === product.id)

 if (existingProduct) {
  existingProduct.quantity = (existingProduct.quantity || 1) + 1
 } else {
  cart.push({ ...product, quantity: 1 })
 }

  localStorage.setItem('cart', JSON.stringify(cart));
};

</script>
<style scoped>
.hello-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 32px;
  background: #ffe4ee;
}
.hello-card {
  width: min(100%, 600px);
  padding: 72px 48px;
  text-align: center;
  background: #f8c7d9;
  border: 1px solid #ececf7;
  border-radius: 18px;
  box-shadow: 0 18px 45px rgba(67, 57, 145, 0.12);
}
.hello-card:hover {
  transform: translateY(-2px);
}

h3 {
  margin: 0;
  color: #85849a;
  font-size: 20px;
  font-weight: 400;
}

@media (max-width: 600px) {
  .hello-page {
    padding: 20px;
  }
  .hello-card {
    padding: 52px 24px;
    border-radius: 12px;
    box-shadow: 0 12px 30px rgba(75, 41, 61, 0.545);
  }
  h1 {
    font-size: 40px;
  }
}
.back {
  width: 400px;
  height: 60px;
  margin-top: 30px;
  color: #24233f;
  background: #f8c7d9;
  border:  1px solid #ececf7;
  border-radius: 8px;
  box-shadow: 0 18px 45px rgba(67, 57, 145, 0.12);
  cursor: pointer;
  font-size: 30px;
  font-weight:600 ;
}
button:active {
  transform: translateY(-2px);
}
.images-container {
  width: min(100%, 1000px);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  margin-top: 32px;
}
.products {
  text-align: center;
  border: 2px solid #ececf7;
  border-radius: 12px;
   box-shadow: 0 18px 45px rgba(67, 57, 145, 0.12);
}
.products img {
  width: 100%;
  height: 200px;
  border-radius: 12px;
}
.products p {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #24233f;
}
.products:hover {
  transform: translateY(-5px);
}
.add-to-cart {
  width: 90%;
  height: 40px;
  background: #f8c7d9;
  border: 1px solid #ececf7;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  color: #24233f;
  margin-bottom: 10px;
}
.cart-button {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 10;
  width: 60px;
  height: 60px;
  color: #24233f;
  background: #f8c7d9;
  border:  1px solid #ececf7;
  border-radius: 8px;
  box-shadow: 0 18px 45px rgba(67, 57, 145, 0.12);
  cursor: pointer;
  font-size: 28px;
  font-weight: 600;
}

@media (max-width: 600px) {
  .cart-button {
    top: 16px;
    right: 16px;
    width: 48px;
    height: 48px;
    font-size: 22px;
  }
}
h1 {
  margin: 0 0 10px;
  color: #24233f;
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
}
</style>