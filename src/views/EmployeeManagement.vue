<template>
  <div class="employee-container">
    <div class="employee-header">
      <h2>Employee Management</h2>
      <button @click="showForm = true" class="add-button">
        + Add New Employee
      </button>
    </div>

    <!-- Modal Form -->
    <div v-if="showForm" class="modal-overlay">
      <div class="modal-content">
        <h2>Add New Employee</h2>
        <form @submit.prevent="addEmployee" class="employee-form">
          
          <div class="form-row">
            <div class="form-group">
              <label>Name:</label>
              <input v-model="newEmployee.name" required>
            </div>
            <div class="form-group">
              <label>Employee ID:</label>
              <input v-model="newEmployee.employeeId" type="number" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Position:</label>
              <input v-model="newEmployee.position" required>
            </div>
            <div class="form-group">
              <label>Department:</label>
              <select v-model="newEmployee.department" required>
                <option value="Development">Development</option>
                <option value="HR">HR</option>
                <option value="QA">QA</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Support">Support</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Salary:</label>
            <input v-model="newEmployee.salary" type="number" required>
          </div>
          <div class="form-group">
            <label>Employment History:</label>
            <textarea v-model="newEmployee.employmentHistory" required></textarea>
          </div>
          <div class="form-group">
            <label>Contact Email:</label>
            <input v-model="newEmployee.contact" type="email" required>
          </div>
          <div class="form-buttons">
            <button type="submit" class="save-button">Save</button>
            <button type="button" @click="cancelForm" class="cancel-button">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <div class="cards-container">
      <CardComp
        v-for="employee in employeeInfo"
        :key="employee.employeeId"
        :employee="employee"
      />
    </div>
  </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue'

export default {
  components: {
    CardComp
  },
  data() {
    return {
      showForm: false,
      newEmployee: {
        employeeId: '',
        name: '',
        position: '',
        department: '',
        salary: '',
        employmentHistory: '',
        contact: ''
      },
      employeeInfo: [
        // your employee data unchanged
        {
          "employeeId": 1,
          "name": "Sibongile Nkosi",
          "position": "Software Engineer",
          "department": "Development",
          "salary": 70000,
          "employmentHistory": "Joined in 2015, promoted to Senior in 2018",
          "contact": "sibongile.nkosi@moderntech.com"
        },
        {
          "employeeId": 2,
          "name": "Lungile Moyo",
          "position": "HR Manager",
          "department": "HR",
          "salary": 80000,
          "employmentHistory": "Joined in 2013, promoted to Manager in 2017",
          "contact": "lungile.moyo@moderntech.com"
        },
        {
          "employeeId": 3,
          "name": "Thabo Molefe",
          "position": "Quality Analyst",
          "department": "QA",
          "salary": 55000,
          "employmentHistory": "Joined in 2018",
          "contact": "thabo.molefe@moderntech.com"
        },
        {
          "employeeId": 4,
          "name": "Keshav Naidoo",
          "position": "Sales Representative",
          "department": "Sales",
          "salary": 60000,
          "employmentHistory": "Joined in 2020",
          "contact": "keshav.naidoo@moderntech.com"
        },
        {
          "employeeId": 5,
          "name": "Zanele Khumalo",
          "position": "Marketing Specialist",
          "department": "Marketing",
          "salary": 58000,
          "employmentHistory": "Joined in 2019",
          "contact": "zanele.khumalo@moderntech.com"
        },
        {
          "employeeId": 6,
          "name": "Sipho Zulu",
          "position": "UI/UX Designer",
          "department": "Design",
          "salary": 65000,
          "employmentHistory": "Joined in 2016",
          "contact": "sipho.zulu@moderntech.com"
        },
        {
          "employeeId": 7,
          "name": "Naledi Moeketsi",
          "position": "DevOps Engineer",
          "department": "IT",
          "salary": 72000,
          "employmentHistory": "Joined in 2017",
          "contact": "naledi.moeketsi@moderntech.com"
        },
        {
          "employeeId": 8,
          "name": "Farai Gumbo",
          "position": "Content Strategist",
          "department": "Marketing",
          "salary": 56000,
          "employmentHistory": "Joined in 2021",
          "contact": "farai.gumbo@moderntech.com"
        },
        {
          "employeeId": 9,
          "name": "Karabo Dlamini",
          "position": "Accountant",
          "department": "Finance",
          "salary": 62000,
          "employmentHistory": "Joined in 2018",
          "contact": "karabo.dlamini@moderntech.com"
        },
        {
          "employeeId": 10,
          "name": "Fatima Patel",
          "position": "Customer Support Lead",
          "department": "Support",
          "salary": 58000,
          "employmentHistory": "Joined in 2016",
          "contact": "fatima.patel@moderntech.com"
        }
      ]
    }
  },
  methods: {
    addEmployee() {
      this.employeeInfo.push({
        ...this.newEmployee,
        salary: Number(this.newEmployee.salary),
        employeeId: Number(this.newEmployee.employeeId)
      });
      this.resetForm();
      this.showForm = false;
    },
    cancelForm() {
      this.resetForm();
      this.showForm = false;
    },
    resetForm() {
      this.newEmployee = {
        employeeId: '',
        name: '',
        position: '',
        department: '',
        salary: '',
        employmentHistory: '',
        contact: ''
      };
    }
  }
}
</script>

<style scoped>
.employee-container {
  padding: 2rem;
  background-color: #ffffff;
  min-height: 100vh;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.employee-header {
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap; /*wrap on phones */
  margin-bottom: 0.3rem;
  gap: 0.5rem;
}

.employee-header h2 {
  font-size: 1.8rem;
  font-weight: 200;
  color: #111827;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  width: 100%;
  text-align: center;
}

.add-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background-color: #2b855d;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  font-size: 0.85rem;
}

.form-row{
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; 
}

.form-row .form-group {
  flex: 1;
  min-width: 150px; /* prevent too narrow on very small screens */
}

/* Form Styles */
.employee-form {
  display: grid;
  gap: 10px;
}
.form-group {
  display: grid;
  gap: 4px;
}
.form-group label {
  font-weight: bold;
  font-size: 0.85rem;
}
.form-group input,
.form-group select,
.form-group textarea {
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.85rem;
}
.form-group textarea {
  min-height: 55px;
}
.form-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 15px;
}
.save-button, .cancel-button {
  padding: 6px 12px;
  font-size: 0.85rem;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.cancel-button {
  background-color: #f44336;
}
.save-button {
  background-color: #42b983;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

/* ✅ Responsive Tweaks */
@media (max-width: 768px) {
  .employee-container {
    padding: 1rem;
  }

  .employee-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .modal-content {
    width: 95%;
    padding: 20px;
  }

  .cards-container {
    grid-template-columns: repeat(2,1fr);
  }
}

@media (max-width: 600px) {
  .modal-content {
    width: 95%;
    padding: 15px;
    font-size: 0.8rem;
  }

  .save-button,
  .cancel-button {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
}

</style>
