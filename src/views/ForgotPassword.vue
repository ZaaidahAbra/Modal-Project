<template>
  <div class="forgot-password-container">
    <div class="forgot-password-card">
      <h2 class="brand">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D0BAQEluznytTFtxw/company-logo_200_200/company-logo_200_200/0/1694565477782?e=2147483647&v=beta&t=ZcxhJ_URTXJBYEcNmgaf3aT7cQrROiyyg8JOujQ5ZVY"
          alt="ModernTech Logo"
          class="logo-name"/>ModernTech Solutions</h2>
      <h4>Forgot Password</h4>
      <form @submit.prevent="sendResetLink">
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-icon">
            <span>📧</span>
            <input v-model="email" type="email" placeholder="Your email address" required />
          </div>
        </div>

        <button type="submit">Send Link to Email</button>
        <button type="button" class="back-btn" @click="goBack">Back to Login</button>
      </form>
      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: ''
    };
  },
  methods: {
    sendResetLink() {
      //error message
      this.message = `If an account exists for ${this.email}, a reset link has been sent.`;
      this.email = '';
    },
    goBack() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.forgot-password-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  /* Background image same as login */
  background-image: url('https://img.freepik.com/free-vector/gradient-technology-futuristic-background_23-2149122416.jpg?semt=ais_hybrid&w=740');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
}

.forgot-password-container::before {
  content: "";
  position: absolute;
  inset: 0;
  backdrop-filter: blur(0px); /* same as login */
  background-color: rgba(255, 255, 255, 0.1); /* same overlay */
  z-index: 1;
}

.forgot-password-card {
  position: relative;
  z-index: 2;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.05); /* transparent so the background blends */
  padding: 1.5rem 2rem;
  border-radius: 8px;
  text-align: left;
}

h2 {
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 1.6rem;
  color: rgb(255, 255, 255);
  border-bottom: rgb(255, 255, 255) 1px solid ;
  padding-bottom: 0.5rem;
}

h4 {
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 1rem;
  color: rgb(255, 255, 255);
  text-align: center;
}

.form-group {
  margin-bottom: 1.3rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 400;
  color: rgb(255, 255, 255);
}

.input-icon {
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 0, 0);
  border-radius: 8px;
  padding: 0.6rem 0.8rem;
}

.input-icon span {
  margin-right: 0.5rem;
  color: rgb(255, 255, 255);
}

input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: rgb(34, 113, 133);
  color: white;
  border: 1px solid white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #125464;
}

.back-btn {
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  background-color: rgb(33, 196, 47);
  color: white;
  border: 1px solid white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-btn:hover {
  background-color: rgb(22, 138, 32);
}

.message {
  margin-top: 1rem;
  color: #b92616; /* same red as error */
  font-weight: 500;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.logo-name {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  font-weight: 200;
}

</style>

