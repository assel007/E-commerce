<template>
    <div class="login-page">
    <div class="login-container">
      <h1>Login page!</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">enter your Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">enter your Password:</label>
        <div class="password-container">
         <input class="password-box"
           :type="showPassword ? 'text' : 'password'"
           id="password"
           v-model="password"
           minlength="8"
           maxlength="20"
           pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!]).{8,20}"
           title="Password must contain uppercase, lowercase, number, and special character"
           required/>
          <button class="toggle-password"
            type="button"
            @click="showPassword = !showPassword">
            {{ showPassword ? 'Hide' : 'Show' }}
          </button>
          </div>
          </div>
        <button type="submit">Login</button>
      </form>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const handleLogin = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  localStorage.setItem('userEmail', email.value)
  router.push({ name: 'hello' })
}
</script>

<style scoped>
:global(body),
:global(#app) {
  background: #fff1f6;
}
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #ffe4ee;
} 
.login-container {
  width: 50%;
  height: 90%;
  margin: 0 auto;
  padding: 48px 36px 36px;
  color: #202044;
  background: #f8c7d9;
  border: 1px solid #ececf7;
  border-radius: 18px;
  box-shadow: 0 18px 45px rgba(67, 57, 145, 0.1);
}
h1 {
  margin-bottom: 8px;
  color: #24233f;
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
}
h1::after {
  display: block;
  margin-top: 8px;
  color: #85849a;
  content: 'Enter your credentials to continue';
  font-size: 25px;
  font-weight: 400;
}
form {
  margin-top: 42px;
}
.form-group {
  margin-bottom: 22px;
}
label {
  display: block;
  margin-bottom: 8px;
  color: #343354;
  font-size: 25px;
  font-weight: 600;
}
input {
  width: 100%;
  height: 42px;
  padding: 0 14px;
  color: #252441;
  background: #ffffff;
  border: 1px solid #dedeea;
  border-radius: 8px;
  box-shadow: 0 6px 8px white;
  outline: none;
  font-size: 25px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input::placeholder {
  color: #aaa9b8;
}

input:focus {
  border-color: #6556c7;
  box-shadow: 0 0 0 3px rgba(101, 86, 199, 0.12);
}

button {
  width: 100%;
  height: 60px;
  margin-top: 8px;
  color: #202044;
  background: #eba2bd;
  border: 2px solid #f8f6f6;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 6px 8px white;
  transition: background-color 0.2s, transform 0.2s;
}
button:hover {
  background: #d98ca5;
}
button:active {
  transform: translateY(1px);
}
@media (max-width: 600px) {
  .login-page {
    grid-template-columns: 1fr;
    gap: 18px;
    width: calc(100% - 40px);
    min-height: auto;
    margin: 20px;
  }
  .image-panel,
  .image-panel img {
    min-height: 260px;
    max-height: 320px;
  }
  .image-panel {
    width: 100%;
  }
  .login-page {
    width: min(100% - 32px, 500px);
    padding: 24px 0;
  }
  .login-container {
    min-height: auto;
    padding: 36px 22px 26px;
    border-radius: 12px;
  }
  h1 {
    font-size: 26px;
  }
  form {
    margin-top: 32px;
  }
}
.password-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 8px;
}
.toggle-password {
  width: 82px;
  height: 42px;
  margin-top: 0;
  color: #202044;
  background: #eba2bd;
  border: 2px solid #ececf7;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0 6px 8px white;
}
.password-box {
  width: auto;
  flex: 1;
}
</style>
