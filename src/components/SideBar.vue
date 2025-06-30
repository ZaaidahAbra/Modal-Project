<template>
  <div :class="['sidebar', { collapsed }]">
    <div class="sidebar-brand" @click="toggleSidebar" style="cursor: pointer;">
      <img
        src="https://media.licdn.com/dms/image/v2/D4D0BAQEluznytTFtxw/company-logo_200_200/company-logo_200_200/0/1694565477782?e=2147483647&v=beta&t=ZcxhJ_URTXJBYEcNmgaf3aT7cQrROiyyg8JOujQ5ZVY"
        alt="ModernTech Logo"
        class="sidebar-logo"
      />
      <span v-if="!collapsed" class="logo-name">ModernTech Solutions</span>
    </div>
    <hr />

    <nav>
      <ul>
        <li>
          <router-link to="/main/dashboard">
            <img src="@/assets/dashboard.png" alt="dashboard Icon" class="icon" />
            <span v-if="!collapsed">Dashboard</span>
          </router-link>
        </li>
        <hr />
        <li>
          <router-link to="/main/employees">
            <img src="@/assets/employee.png" alt="employee Icon" class="icon" />
            <span v-if="!collapsed">Employee Management</span>
          </router-link>
        </li>
        <hr />
        <li>
          <router-link to="/main/payroll">
            <img src="@/assets/payroll.png" alt="payroll Icon" class="icon" />
            <span v-if="!collapsed">Payroll Processing</span>
          </router-link>
        </li>
        <hr />
        <li>
          <router-link to="/main/attendance">
            <img src="@/assets/attendance.png" alt="attendance Icon" class="icon" />
            <span v-if="!collapsed">Attendance Management</span>
          </router-link>
        </li>
        <hr />
        <li>
          <router-link to="/main/leave-request">
            <img src="@/assets/leave.png" alt="Leave Icon" class="icon" />
            <span v-if="!collapsed">Leave Management</span>
          </router-link>
        </li>
        <hr />
        <li>
          <router-link to="/main/review-page">
            <img src="@/assets/reviews.png" alt="review Icon" class="icon" />
            <span v-if="!collapsed">Performance Reviews</span>
          </router-link>
        </li>
        <hr />
      </ul>
    </nav>

    <div class="logout">
      <router-link to="/login">
        <img src="@/assets/logout.png" alt="logout page" class="icon" />
        <span v-if="!collapsed">Logout</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const collapsed = ref(false);

function toggleSidebar() {
  collapsed.value = !collapsed.value;
}
</script>

<style scoped>
.sidebar {
  width: 260px;
  background-color: rgb(51, 51, 51);
  color: white;
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.5);
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 70px;
  padding: 2rem 0.5rem;
}

.sidebar h2 {
  color: rgb(248, 248, 248);
  margin-bottom: 1rem;
  font-family: 'Times New Roman', Times, serif;
  font-style: bold;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin: 1rem 0;
}

.sidebar a {
  color: #d1d5db;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sidebar a.router-link-exact-active,
a:hover {
  color: #78cb89;
  text-decoration: underline;
}

.logout {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid white;
}

.icon {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.sidebar.collapsed .icon {
  margin: 0 auto;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 2rem;
  user-select: none;
  transition: justify-content 0.3s ease;
}

.sidebar.collapsed .sidebar-brand {
  justify-content: center;
}

.sidebar.collapsed a {
  justify-content: center;
}

.sidebar a span {
  transition: opacity 0.3s ease, margin-left 0.3s ease;
}

.sidebar.collapsed a span {
  opacity: 0;
  margin-left: 0;
  width: 0;
  overflow: hidden;
}

.sidebar-logo {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}

.logo-name {
  font-size: 1.2rem;
  font-family: 'Poppins' , 'Segoe UI' , 'sans-serif' ;
  font-weight: 500;
  color: rgb(248, 248, 248);
  white-space: nowrap;
  user-select: none;
  transition: opacity 0.3s ease;
}
</style>
