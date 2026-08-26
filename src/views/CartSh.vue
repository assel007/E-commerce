<template>
  <main class="card-page"> 
    <div class="cart-card">
     <h1>Shopping Cart</h1>
     <p v-if="cart.length === 0">Your cart is empty.</p>
     <section v-else class="cart-items">
      <article v-for="product in cart" :key="product.id" class="cart-item">
        <img :src="product.image" :alt="product.name" />
        <div>
          <h2>{{ product.name }}</h2>
          <p>Price: ${{ product.price }}</p>
          <p>Quantity: {{ product.quantity }}</p>
        </div>
      </article>
      <p>Total Price: ${{ total_price }}</p>
     </section>
     <section class="buttens">
       <button class="back" @click="router.push ('/hello')">back to hello</button>
       <button class="back" @click="emptyCart"> empty cart</button>
     </section>
    </div>
  </main>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const savedCart = JSON.parse(localStorage.getItem('cart')) || []
const groupedCart = savedCart.reduce((items, product) => {
  const existingProduct = items.find((item) => item.id === product.id)

  if (existingProduct) {
    existingProduct.quantity += product.quantity || 1
  } else {
    items.push({ ...product, quantity: product.quantity || 1 })
  }

  return items
}, [])
const cart = ref(groupedCart)

localStorage.setItem('cart', JSON.stringify(cart.value))

const total_price = computed(() => {
  return cart.value.reduce((total, product) => total + product.price * product.quantity, 0)
})

const emptyCart = () => {
  cart.value = []
  localStorage.removeItem('cart')
}
</script>
<style scoped>
.card-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 32px;
  background: #ffe4ee;
  color: #24233f;
  font-size: 24px;
}
.cart-items {
  width: min(100%, 700px);
  display: grid;
  gap: 16px;
  margin: 24px 0;
}
.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px;
  background: #fcdee9;
  border: 1px solid #ececf7;
  border-radius: 8px;
}
.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}
.cart-item h2,
.cart-item p {
  margin: 0 0 8px;
}
.back {
  width: 300px;
  height: 80px;
  margin-top: 30px;
  color: #24233f;
  background: #fcdee9;
  border:  1px solid #ececf7;
  border-radius: 12px;
  box-shadow: 0 18px 45px rgba(67, 57, 145, 0.12);
  cursor: pointer;
  font-size: 30px;
  font-weight:600 ;
}
.buttens {
  display: flex;
  gap: 20px;
  flex-direction: row;
}
.cart-card { 
 width: min(100%, 600px);
  padding: 72px 48px;
  text-align: center;
  background: #f8c7d9;
  border: 1px solid #ececf7;
  border-radius: 18px;
  box-shadow: 0 18px 45px rgba(67, 57, 145, 0.12);
}
h1 {
  margin: 0 0 10px;
  color: #24233f;
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
}
</style>