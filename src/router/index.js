import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Payroll from '@/views/Payroll.vue';
import Login from '@/views/Login.vue';
import EmployeeManagement from '@/views/EmployeeManagement.vue';
import LeaveRequest from '@/views/LeaveRequest.vue';
import Attendance from '@/views/Attendance.vue';
import MainLayout from '@/components/MainLayout.vue';
import ReviewPage from '@/views/ReviewPage.vue';
import ForgotPassword from '@/views/ForgotPassword.vue';

const routes = [
  { path: '/',
    redirect: '/login' 
  },
  { path: '/login',
    name: 'Login',
    component: Login 
  },
  {
    path: '/forgot-password',
    name: 'Forgot Password',
    component: ForgotPassword
  },
  { 
    path: '/main',
    component: MainLayout,
    children:[
      { path: '', redirect: '/main/dashboard' },
      { path: 'dashboard',
        name : 'Dashboard',
        component : Dashboard
      },
      { path: 'employees', 
        name : 'EmployeeManagement',
        component: EmployeeManagement 
      },
      { path: 'payroll',
        name : 'Payroll' ,
        component: Payroll 
      },
      {
        path : 'attendance',
        name : 'Attendance',
        component : Attendance
      },
      { 
        path: 'leave-request',
        name : 'LeaveRequest',
        component: LeaveRequest 
      },
      {
        path: 'review-page',
        name: 'ReviewPage',
        component: ReviewPage
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
