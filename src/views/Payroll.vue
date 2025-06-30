<template>
  <div class="payroll-container">
    <div class="payroll-header">
      <h2>Payroll Overview</h2>
      <hr>
    </div>

    <div class="table-section">
      <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Hours Worked</th>
            <th>Leave Deductions (R)</th>
            <th>Final Salary (R)</th>
            <th>Payslip</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in mergedPayroll" :key="record.employeeId"> <!--for each emp in list make a row in da table-->
            <td>{{ record.employeeId }}</td>
            <td>{{ record.name }}</td>
            <td>{{ record.department }}</td>
            <td>{{ record.position }}</td>
            <td>{{ record.hoursWorked }}</td>
            <td>R{{ record.leaveDeductions?.toLocaleString() || 0 }}</td> <!--localString changes numbers to string-->
            <td>R{{ record.finalSalary?.toLocaleString() || 0 }}</td> <!--if finalSalary is null then show 0-ternay operator-->
            <td>
              <button @click="generatePayslip(record)">Generate</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import { jsPDF} from 'jspdf';
import employeeInfo from '@/data/employee_info.json';
import payrollData from '@/data/payroll_data.json';

export default {
  name: 'PayrollTable',
  data() {
    return {
      mergedPayroll: []
    };
  },
  mounted() { //when page loads this function runs
    this.combineData();
  },
  methods: {
    combineData() {
      const infoMap = new Map(); //used map to match employees by thier id
      employeeInfo.employeeInformation.forEach(emp => { // for each emp get their info
        infoMap.set(emp.employeeId, emp);
      });

      this.mergedPayroll = payrollData.payrollData.map(pay => {
        const emp = infoMap.get(pay.employeeId);//go through each payroll record and take the employee infro 
        //from map
        return { // gather all below data and store in 'this.mergedPayroll'
          employeeId: pay.employeeId,
          name: emp.name || 'Unknown',
          department: emp.department || 'N/A',
          position: emp.position || 'N/A',
          hoursWorked: pay.hoursWorked,
          leaveDeductions: pay.leaveDeductions,
          finalSalary: pay.finalSalary
        };
      });
    },
    generatePayslip(record) {
      const doc = new jsPDF(); //make new PDF
      doc.setFontSize(16);
      doc.text('Employee Payslip', 105,20, {align: 'center'}); // write at top in the middle

      doc.setFontSize(12);
      const lines = [ // all the info we want on the payslip
        `Employee ID: ${record.employeeId}`,
        `Name: ${record.name}`,
        `Department: ${record.department}`,
        `Position: ${record.position}`,
        '',
        `Hours Worked: ${record.hoursWorked}`,
        `Leave Deductions: R${record.leaveDeductions}`,
        `Final Salary: R${record.finalSalary}`
      ];

      let y = 40;
      lines.forEach(line => { //each line printed below the other
        doc.text(line, 20, y);
        y += 10;
      });

      const filename = `Payslip_${record.employeeId}.pdf`; //hoe to save the PDF as
      doc.save(filename);
    }
  }
};
</script>

<style scoped>
.payroll-container {
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

.payroll-header {
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap; /*wrap on phones */
  margin-bottom: 0.2rem;
  gap: 0.5rem;
}

.payroll-header h2 {
  font-size: 1.8rem;
  font-weight: 200;
  color: #111827;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  width: 100%;
  text-align: center;
}

.table-section{
  margin: -2rem 0;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #ffffff;
  min-width: 600px;
}

th,td {
  padding: 0.75rem ;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
  font-size: 0.9rem;
}

table tbody tr:hover {
  background-color: #f1f5f9;
}

button {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1e40af;
}

/* ✅ Responsive Adjustments */
@media (max-width: 768px) {
  .payroll-container{
    padding: 1rem;
  }

  .payroll-header h2{
    font-size: 1.4rem;
    text-align: center;
  }

  .table-section{
    min-width: 800px;
    font-size: 0.85rem,
  }

  h1 {
    font-size: 1.4rem;
  }

  table {
    font-size: 0.85rem;
  }

  th, td {
    padding: 0.5rem;
    font-size: 0.8rem;
  }
  button {
    width: 100%;
    margin-top: 0.3rem;
  }
}
</style>
