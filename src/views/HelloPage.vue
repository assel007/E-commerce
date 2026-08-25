<template>
  <main class="hello-page">
    <section class="hello-card">
      <h1>Hello, {{ username }}!</h1>
      <h3>We are happy to see you!</h3>
    </section>
    <section>
      <button @click="router.push ('/login')">back to login page</button>
    </section>
    <section class="images-container">
     <div class="product">
       <img src="/picture11.jpg" alt="Product 1">
       <p>price : 30$</p>
     </div>
     <div class="product" >
       <img src="/picture12.jpg" alt="Product 2">
       <p>price : 48$</p>
     </div>
     <div class="product">
       <img src="/picture13.jpg" alt="Product 3">
       <p>price : 35$</p>
     </div>
     <div class="product">
       <img src="/picture14.jpg" alt="Product 4">
       <p>price : 50$</p>
     </div>
     <div class="product">
       <img src="/picture15.jpg" alt="Product 5">
       <p>price : 37$</p>
     </div>
     <div class="product">
       <img src="/picture16.jpg" alt="Product 6">
       <p>price : 35$</p>
     </div>
     <div class="product">
       <img src="/picture17.jpg" alt="Product 7">
       <p>price : 40$</p>
      </div>
      <div class="product">
        <img src="/picture8.jpg" alt="Product 8">
        <p>price : 28$</p>
      </div>
      <div class="product">
      <img src="/picture9.jpg" alt="Product 9">
      <p>price : 50$</p>
      </div>
      <div class="product">
        <img src="/picture10.jpg" alt="Product 10">
        <p>price : 33$</p>
      </div>
    </section>
  </main>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const email = localStorage.getItem('userEmail')
const username = email.split('@')[0]
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

h1 {
  margin: 0 0 10px;
  color: #24233f;
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
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
button {
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

.product {
  text-align: center;
  border: 2px solid #ececf7;
  border-radius: 12px;
   box-shadow: 0 18px 45px rgba(67, 57, 145, 0.12);
}

.product img {
  width: 100%;
  height: 200px;
  border-radius: 12px;
}

.product p {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #24233f;
}
.product:hover {
  transform: translateY(-5px);
}
</style>