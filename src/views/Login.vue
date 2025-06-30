<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="brand">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D0BAQEluznytTFtxw/company-logo_200_200/company-logo_200_200/0/1694565477782?e=2147483647&v=beta&t=ZcxhJ_URTXJBYEcNmgaf3aT7cQrROiyyg8JOujQ5ZVY"
          alt="ModernTech Logo"
          class="logo-name"/>ModernTech Solutions</h2>
      <h4>HR login Page</h4>

      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-icon">
            <span>📧</span>
            <input v-model="username" type="email" placeholder="Enter your email" />
          </div> <!--v-model for continous live updates for username in the Vue data-->
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-icon">
            <span>🔒</span>
            <input v-model="password" type="password" placeholder="Enter password" />
          </div>
        </div>

        <div class="options">
          <div class="remember-me">
            <input type="checkbox" id="remember" />
            <label for="remember">Remember me</label>
          </div>
          <div class="forgot-password">
            <router-link to ='/forgot-password'>Forgot Password?</router-link>
          </div>
        </div>

        <button type="submit">LOGIN</button>
        <p v-if="error" class="error">{{ error }}</p> <!--if error occurs print error message-->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      // if successful login push to main page
      if (this.username === 'admin@hr.com' && this.password === '2025') {
        this.$router.push('/main');
      } else{
        this.error = 'Invalid Credentials' //error message
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  /* Background image */
  background-image: url('https://img.freepik.com/free-vector/gradient-technology-futuristic-background_23-2149122416.jpg?semt=ais_hybrid&w=740');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Blur effect with overlay */
  position: relative;
}

.login-container::before {
  content: "";
  position: absolute;
  inset: 0;
  backdrop-filter: blur(0px); /* Blur strength */
  background-color: rgba(255, 255, 255, 0.1); /* Optional white overlay for extra readability */
  z-index: 1;
}

.login-card {
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
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
  margin-bottom: 1.2rem;
  text-align: left;
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
  padding: 0.5rem 0.8rem;
}

.input-icon span {
  margin-right: 0.5rem;
  color: black
}

.input-icon input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.remember-me {
  display: flex;
  align-items: center;
}

.forgot-password a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-weight: 400;
}

.forgot-password a:hover {
  text-decoration: underline;
}

button {
  width: 100%;
  padding: 0.8rem;
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

.error {
  color: #b92616;
  margin-top: 1rem;
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