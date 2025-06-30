<template>
  <div class="dashboard-container">
    <main class="main-content">

      <header class="header">
        <h2>Welcome to HR Dashboard</h2>
      </header>

      <!-- Summary Cards -->
      <div class="summary-cards">
        <div class="summary-card">
          <h3>Total Employees</h3>
          <p>{{ employeeCount }}</p>
        </div>
        <div class="summary-card">
          <h3>Monthly Payroll</h3>
          <p>R{{ totalPayroll }}</p>
        </div>
        <div class="summary-card">
          <h3>Attendance Rate</h3>
          <p>{{ attendanceRate }}%</p>
        </div>
        <div class="summary-card">
          <h3>Pending Leave</h3>
          <p>{{ pendingLeave }}</p>
        </div>
      </div>

      <!-- Quick Action Cards -->
      <section class="quick-action-cards">
        <router-link to="/main/payroll" class="action-card">
          <h3>View Payroll Processing</h3>
        </router-link>
        <router-link to="/main/employees" class="action-card">
          <h3>View Employees Profile</h3>
        </router-link>
        <router-link to="/main/leave-request" class="action-card">
          <h3>View Leave Management</h3>
        </router-link>
      </section>

      <!-- Charts and Upcoming Events -->
      <div class="dashboard-sections">
        <div class="section">
          <AttendanceChart /> <!--link Attendance Comp-->
        </div>

        <div class="section calendar">
          <h2>Upcoming Events</h2>
          <hr>
          <div class="events">
            <p v-for="event in upcomingEvents" :key="event.id"> <!--loop through events and generate the below sentence-->
              <span class="event-icon">📅</span> {{ event.date }} - {{ event.description }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AttendanceChart from '@/components/AttendanceChart.vue';
import employeeData from '@/data/employee_info.json';
import attendanceData from '@/data/attendance.json';
import payrollData from '@/data/payroll_data.json';

export default {
  name: 'Dashboard',

  components: {
    AttendanceChart, //displays charts
  },

  data() {
    return {
      employeeCount: employeeData.employeeInformation.length, //count of employees
      totalPayroll: payrollData.payrollData.reduce((sum, emp) => sum + emp.finalSalary, 0),
      attendanceRate: this.calculateAttendanceRate(), //calls method to calc attendance percent

      pendingLeave: 0, // Placeholder for pending leave count on the summarycharts
      //  starts at 0

      upcomingEvents: [ //events thats shown on dashboard
        { id: 1, date: '2025-07-15', description: 'Staff meeting @ 11:00 - 12:00' },
        { id: 2, date: '2025-06-25', description: 'AGM @ 10:30 - 11:00' },
        { id: 3, date: '2025-06-01', description: 'SERVER SHUTDOWN' }
      ]
    };
  },

  methods: {
    calculateAttendanceRate() { // it adds up all present days for all students
      const presentDays = attendanceData.attendanceAndLeave.reduce(
        (sum, emp) => sum + emp.attendance.filter(a => a.status === 'Present').length, 0
      );

      const totalDays = attendanceData.attendanceAndLeave.reduce(
        (sum, emp) => sum + emp.attendance.length, 0 //adds up how many present and absent days each employee had
      );

      return totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;
      //return totalDays more than 0 then round off the number
    }
  },
  mounted() { //runs after the page is shown
    const savedRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
    //gets leave request data from local storage

    this.pendingLeave = savedRequests.filter(req => req.status === 'Pending').length;
    //counts the pending status on leave management page and shows that number
  },
}
</script>

<style>
.dashboard-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.main-content {
  flex: 1;
  background-color: rgb(255, 255, 255);
}

.header {
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  /*wrap on phones */
  margin-bottom: 0.3rem;
  gap: 0.5rem;
}

.header h2 {
  font-size: 1.8rem;
  font-weight: 200;
  color: #111827;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  width: 100%;
  text-align: center;
}


/* Summary Cards */
.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 1.2rem 0;
}

.summary-card {
  background-color: #f3f4f6;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.summary-card h3 {
  color: #6b7280;
  margin-bottom: 0.4rem;
  font-size: 0.95rem;
}

.summary-card p {
  font-size: 1.3rem;
  font-weight: bold;
  color: #111827;
}

/* Quick Action Cards */
.quick-action-cards {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.action-card {
  flex: 1;
  padding: 1rem;
  background-color: #111827;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.action-card h3 {
  font-size: 1.4rem;
  font-weight: 200;
}

.action-card:hover {
  background-color: #265f4d;
  transform: translateY(-3px);
}


/* Dashboard Sections */
.dashboard-sections {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
}

.section {
  background-color: #f3f4f6;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.section h2 {
  color: #111827;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.events p {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
  font-size: 0.9rem;
}

.event-icon {
  margin-right: 0.5rem;
}

/* ✅ Mobile Responsiveness */
@media (max-width: 768px) {
  .dashboard-container {
    padding: 1rem;
  }

  .summary-cards {
    grid-template-columns: repeat(2, 1fr);
    /*2 coloums on mobile */
  }

  .quick-action-cards {
    flex-direction: column;
  }

  .dashboard-sections {
    grid-template-columns: 1fr;
  }

  .action-card h3 {
    font-size: 1.1rem;
  }

  .header h2 {
    font-size: 1.5rem;
  }

  .summary-card p {
    font-size: 1.1rem;
  }
}
</style>
