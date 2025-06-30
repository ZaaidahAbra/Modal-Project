<template>
  <div class="employee-charts">
    <div class="chart-container">
      <div class="chart-wrapper">
        <h3>Employee Distribution by department</h3>
        <div class="chart">
          <pie-chart :data="departmentData" :options="pieOptions" />
        </div>
      </div>
  
      <div class="chart-wrapper">
        <h3>Salary Comparison</h3>
        <div class="chart">
          <bar-chart :data="salaryData" :options="barOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Pie, Bar } from 'vue-chartjs'
import employeeInfo from '@/data/employee_info.json'
import { 
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
)

export default {
  name: 'EmployeeCharts',
  components: {
    PieChart: Pie,
    BarChart: Bar
  },
  data() {
    return {
      employees: employeeInfo.employeeInformation,
      
      pieOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: ''
          }
        }
      },
      barOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Employee Salaries'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Salary (ZAR)'
            }
          }
        }
      }
    }
  },
  computed: {
    departmentData() {
      const departmentCount = this.employees.reduce((acc, employee) => {
        acc[employee.department] = (acc[employee.department] || 0) + 1
        return acc
      }, {})
      return {
        labels: Object.keys(departmentCount),
        datasets: [{
          data: Object.values(departmentCount),
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
            '#9966FF', '#FF9F40', '#8AC24A', '#607D8B'
          ].slice(0, Object.keys(departmentCount).length)
        }]
      }
    },
    salaryData() {
      return {
        labels: this.employees.map(emp => emp.name),
        datasets: [{
          label: 'Salary',
          data: this.employees.map(emp => emp.salary),
          backgroundColor: '#36A2EB'
        }]
      }
    }
  }
}
</script>

<style scoped>
.employee-charts {
  padding: 3px;
}
.chart-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}
.chart-wrapper {
  flex: 1 1 45%; /* Take about 45% of width, allows spacing */
  min-width: 300px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.chart {
  position: relative;
  height: 260px;
  width: 100%;
}

/* ✅ Responsive for small screens */
@media (max-width: 768px) {
  .chart-container {
    flex-direction: column;
  }

  .chart {
    height: 260px;
  }

  h3 {
    font-size: 1rem;
  }
}
</style>