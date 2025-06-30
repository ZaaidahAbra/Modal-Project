<template>
  <div class="leave-Request-container">
    <div class="leave-header">
      <h2>Leave Management</h2>
      <button @click="openLeaveModal" class="add-button">+ Add New Request</button> <!--Opens leave Modal-->
    </div>

    <!-- Leave Request Modal -->
    <div v-if="showLeaveModal" class="modal-overlay">
      <div class="modal-content">
        <h2>New Leave Request</h2>
        <form @submit.prevent="submitLeaveRequest" class="leave-form"> <!--prevent page from loosing info when submitting-->

          <div class="form-row">
            <div class="form-group">
              <label>Employee:</label>
              <select v-model="newRequest.employeeId" required>
                <option disabled value="">-- Select Employee --</option>
                <option v-for="emp in employees" :key="emp.employeeId" :value="emp.employeeId">
                  {{ emp.name }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label>Leave Type</label>
              <select v-model="newRequest.type" required>
                <option disabled value="">-- Select Leave Type --</option>
                <option>Sick Leave</option>
                <option>Annual Leave</option>
                <option>Family Responsibility</option>
                <option>Bereavement</option>
                <option>Vacation</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group ">
              <label>Start Date</label>
              <input type="date" v-model="newRequest.startDate" required />
            </div>
            <div class="form-group ">
              <label>End Date</label>
              <input type="date" v-model="newRequest.endDate" required />
            </div>
          </div>

          <div class="form-group">
            <label>Days Requested</label>
            <input type="number" :value="calculateDays" readonly />
          </div>

          <div class="form-group">
            <label>Reason (optional)</label>
            <textarea v-model="newRequest.reason"></textarea>
          </div>

          <div class="form-buttons">
            <button type="button" @click="closeLeaveModal" class="cancel-button">Cancel</button>
            <button type="submit" class="save-button">Submit</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Leave Table -->
    <div class="leave-table-container">
      <table class="leave-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>ID</th>
            <th>Absence Type</th>
            <th>Start</th>
            <th>End</th>
            <th>Days</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(req, index) in requests" :key="index"> <!--loop through each request-->
            <td>{{ getEmployeeName(req.employeeId) }}</td>
            <td>{{ req.employeeId }}</td>
            <td>{{ req.type }}</td>
            <td>{{ req.startDate }}</td>
            <td>{{ req.endDate }}</td>
            <td>{{ req.days }}</td>
            <td>{{ req.reason || '-' }}</td>
            <td>
              <span :class="{
                'badge bg-warning': req.status === 'Pending',
                'badge bg-success': req.status === 'Approved',
                'badge bg-danger': req.status === 'Denied'
              }">
                {{ req.status }}
              </span>
            </td>
            <td>
              <button class="btn-sm" @click="updateStatus(index, 'Approved')" :disabled="req.status !== 'Pending'">
                Accept
              </button> <!--after button approved it becomes disabled-->
              <button class="btn-sm" @click="updateStatus(index, 'Denied')" :disabled="req.status !== 'Pending'">
                Deny
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import employeeData from '@/data/employee_info.json';

export default { 
  name: 'TimeOffRequest', //name of component
  data() { //memory of the page-stuff want to work with
    return {
      showLeaveModal: false, // <-- control modal visibility- false means dont show now
      employees: employeeData.employeeInformation, //<--use emploee info
      newRequest: { //<--modal is empty leave form
        employeeId: '',
        type: '',
        startDate: '',
        endDate: '',
        days: '',
        reason: '',
        status: 'Pending',
      },
      requests: [ //<--leave requests filled out already
        {
          employeeId: 1,
          type: 'Annual Leave',
          startDate: '2025-06-01',
          endDate: '2025-06-10',
          days: 10,
          reason: 'Family vacation',
          status: 'Pending',
        },
        {
          employeeId: 2,
          type: 'Sick Leave',
          startDate: '2025-06-15',
          endDate: '2025-06-18',
          days: 4,
          reason: 'Flu and recovery',
          status: 'Approved',
        },
      ],
    };
  },
  computed: { //<--takes start and end date then calcs how many days leave
    calculateDays() {
      if (this.newRequest.startDate && this.newRequest.endDate) {
        const start = new Date(this.newRequest.startDate);
        const end = new Date(this.newRequest.endDate);
        const timeDiff = end - start;
        return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // +1 to include both start and finish date
      }//1000 millisec in 1 sec * 3600 sec in hr * 24 hr in day = milliseconds in a day
      return 0;
    },
  },
  methods: { //<--buttons that do stuff when you call them
    getEmployeeName(id) {
      const emp = this.employees.find((e) => e.employeeId === id);
      return emp ? emp.name : 'Unknown';
    },
    submitLeaveRequest() {
      const copy = {
        ...this.newRequest,
        days: this.calculateDays,
        status: 'Pending',
      };
      this.requests.push(copy);
      this.resetForm(); //<--clear form after someone submits
      this.closeLeaveModal();
    },
    resetForm() {
      this.newRequest = {
        employeeId: '',
        type: '',
        startDate: '',
        endDate: '',
        days: '',
        reason: '',
        status: 'Pending',
      };
    },
    updateStatus(index, newStatus) { //updates the status when accept or deny pressed
      this.requests[index].status = newStatus;
    },
    openLeaveModal() {
      this.showLeaveModal = true;
    },
    closeLeaveModal() {
      this.showLeaveModal = false;
    },
  },
};
</script>


<style scoped>
.leave-Request-container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.leave-header {
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap; /*wrap on phones */
  margin-bottom: 0.3rem;
  gap: 0.5rem;
}

.leave-header h2 {
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

/*Leave Modal Request */
.modal-overlay{
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

.modal-content{
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
  min-width: 150px; /* so not too narrow on small screens */
}

/* Form Styles */
.leave-form {
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

/*Table*/
.leave-table{
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f9fafb;
}

/*responsiveness */
@media (max-width: 768px) {
  .leave-Request-container {
    padding: 1rem;
  }

  .leave-header h2 {
    font-size: 1.4rem;
  }

  .modal-content {
    padding: 1rem;
    font-size: 0.8rem;
  }

  .form-row {
    flex-direction: column;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    font-size: 0.8rem;
  }

  .leave-table-container {
    overflow-x: auto;
  }

  .leave-table {
    min-width: 900px; /* force horizontal scroll on small screens */
    font-size: 0.85rem;
  }

  th, td {
    padding: 0.5rem;
  }

  .btn-sm {
    font-size: 0.75rem;
    padding: 0.3rem 0.5rem;
  }
}

</style>
