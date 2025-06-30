<template>
  <div class="attendance">
    <div class="attendance-header">
        <h2>Employee Attendance Tracking</h2>
    </div>

    <div class="employee-container">
      <div 
        v-for="employee in data.attendanceAndLeave" 
        :key="employee.employeeId" 
        class="employee-card"
      >
        <h2>{{ employee.name }} (ID: {{ employee.employeeId }})</h2>
        <div class="section">
          <h3>Attendance</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="record in employee.attendance" :key="record.date">
                <td>{{ record.date }}</td>
                <td :style="{ color: record.status === 'Absent' ? 'red' : 'green' }">
                  {{ record.status }}
                </td>
              </tr> 
            </tbody>
          </table>
        </div>
        <div class="section">
          <h3>Leave Requests</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="leave in employee.leaveRequests" :key="leave.date">
                <td>{{ leave.date }}</td>
                <td>{{ leave.reason }}</td>
                <td :style="statusStyle(leave.status)">{{ leave.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { reactive } from 'vue'
const data = reactive({
  attendanceAndLeave:  [
        {
            employeeId: 1,
            name: "Sibongile Nkosi",
            attendance: [
                {
                    date: "2025-07-25",
                    status: "Present"
                },
                {
                    date: "2025-07-26",
                    status: "Absent"
                },
                {
                    date: "2025-07-27",
                    status  : "Present"
                },
                {
                    date: "2025-07-28",
                    status: "Present"
                },
                {
                    date: "2025-07-29",
                    status: "Present"
                }
            ],
            leaveRequests: [
                {
                    date: "2025-07-22",
                    reason: "Sick Leave",
                    status: "Approved"
                },
                {
                    date: "2024-12-01",
                    reason: "Personal",
                    status: "Pending"
                }
            ]
        },
        {
            employeeId: 2,
            name: "Lungile Moyo",
            attendance: [
                {
                    date: "2025-07-25",
                    status: "Present"
                },
                {
                    date: "2025-07-26",
                    status: "Present"
                },
                {
                    date: "2025-07-27",
                    status: "Absent"
                },
                {
                    date: "2025-07-28",
                    status: "Present"
                },
                {
                    date: "2025-07-29",
                    status: "Present"
                }
            ],
            leaveRequests: [
                {
                    date: "2025-07-15",
                    reason: "Family Responsibility",
                    status: "Denied"
                },
                {
                    date: "2024-12-02",
                    reason: "Vacation",
                    status: "Approved"
                }
            ]
        },
        {
            employeeId: 3,
            name: "Thabo Molefe",
            attendance: [
                {
                    date: "2025-07-25",
                    status: "Present"
                },
                {
                    date: "2025-07-26",
                    status: "Present"
                },
                {
                    date: "2025-07-27",
                    status: "Present"
                },
                {
                    date: "2025-07-28",
                    status: "Absent"
                },
                {
                    date: "2025-07-29",
                    status: "Present"
                }
            ],
            leaveRequests: [
                {
                    date: "2025-07-10",
                    reason: "Medical Appointment",
                    status: "Approved"
                },
                {
                    date: "2024-12-05",
                    reason: "Personal",
                    status: "Pending"
                }
            ]
        },
        {
            employeeId: 4,
            name: "Keshav Naidoo",
            attendance: [
                {
                    date: "2025-07-25",
                    status: "Absent"
                },
                {
                    date: "2025-07-26",
                    status: "Present"
                },
                {
                    date: "2025-07-27",
                    status: "Present"
                },
                {
                    date: "2025-07-28",
                    status: "Present"
                },
                {
                    date: "2025-07-29",
                    status: "Present"
                }
            ],
            leaveRequests: [
                {
                    date: "2025-07-20",
                    reason: "Bereavement",
                    status: "Approved"
                }
            ]
        },
        {
            employeeId: 5,
            name: "Zanele Khumalo",
            attendance: [
                {
                    date: "2025-07-25",
                    status: "Present"
                },
                {
                    date: "2025-07-26",
                    status: "Present"
                },
                {
                    date: "2025-07-27",
                    status: "Absent"
                },
                {
                    date: "2025-07-28",
                    status: "Present"
                },
                {
                    date: "2025-07-29",
                    status: "Present"
                }
            ],
            leaveRequests: [
                {
                    date: "2024-12-01",
                    reason: "Childcare",
                    status: "Pending"
                }
            ]
        },
        {
            employeeId: 6,
            name: "Sipho Zulu",
            attendance: [
                {
                    date: "2025-07-25",
                    status: "Present"
                },
                {
                    date: "2025-07-26",
                    status: "Present"
                },
                {
                    date: "2025-07-27",
                    status: "Absent"
                },
                {
                    date: "2025-07-28",
                    status: "Present"
                },
                {
                    date: "2025-07-29",
                    status: "Present"
                }
            ],
            leaveRequests: [
                {
                    date: "2025-07-18",
                    reason: "Sick Leave",
                    status: "Approved"
                }
            ]
        },
        {
            employeeId: 7,
            name: "Naledi Moeketsi",
            attendance: [
                {
                    date: "2025-07-25",
                    status: "Present"
                },
                {
                    date: "2025-07-26",
                    status: "Present"
                },
                {
                    date: "2025-07-27",
                    status: "Present"
                },
                {
                    date: "2025-07-28",
                    status: "Absent"
                },
                {
                    date: "2025-07-29",
                    status: "Present"
                }
            ],
            leaveRequests: [
                {
                    date: "2025-07-22",
                    reason: "Vacation",
                    status: "Pending"
                }
            ]
        },
        {
            employeeId: 8,
            name: "Farai Gumbo",
            attendance: [
                {
                    date: "2025-07-25",
                    status: "Present"
                },
                {
                    date: "2025-07-26",
                    status: "Absent"
                },
                {
                    date: "2025-07-27",
                    status: "Present"
                },
                {
                    date: "2025-07-28",
                    status: "Present"
                },
                {
                    date: "2025-07-29",
                    status: "Present"
                }
            ],
            leaveRequests: [
                {
                    date: "2024-12-02",
                    reason: "Medical Appointment",
                    status: "Approved"
                }
            ]
        },
        {
            employeeId: 9,
            name: "Karabo Dlamini",
            attendance: [
                {
                    date: "2025-07-25",
                    status: "Present"
                },
                {
                    date: "2025-07-26",
                    status: "Present"
                },
                {
                    date: "2025-07-27",
                    status: "Present"
                },
                {
                    date: "2025-07-28",
                    status: "Absent"
                },
                {
                    date: "2025-07-29",
                    status: "Present"
                }
            ],
            leaveRequests: [
                {
                    date: "2025-07-19",
                    reason: "Childcare",
                    status: "Denied"
                }
            ]
        },
        {
            employeeId: 10,
            name: "Fatima Patel",
            attendance: [
                {
                    date: "2025-07-25",
                    status: "Present"
                },
                {
                    date: "2025-07-26",
                    status: "Present"
                },
                {
                    date: "2025-07-27",
                    status : "Absent"
                },
                {
                    date: "2025-07-28",
                    status: "Present"
                },
                {
                    date: "2025-07-29",
                    status: "Present"
                }
            ],
            leaveRequests: [
                {
                    date: "2024-12-03",
                    reason: "Vacation",
                    status: "Pending"
                }
            ]
        }
    ]
})
function statusStyle(status) {
  if (status === 'Approved') return { color: 'green', fontWeight: "bold" }
  if (status === "Denied") return { color: "red", fontWeight: "bold" }
  if (status === "Pending") return { color: "orange", fontWeight: "bold" }
  return {}
}
</script>

<style>
.attendance {
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

.attendance-header{
    display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap; /*wrap on phones */
  margin-bottom: 0.3rem;
  gap: 0.5rem;
}

.attendance-header h2 {
  font-size: 1.8rem;
  font-weight: 200;
  color: #111827;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5rem;
  width: 100%;
  text-align: center;
}

.employee-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.employee-card {
  background-color: #f9fafb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  text-align: left;
}

.employee-card h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

.section {
  margin: 1.25rem 0;
  overflow-x: auto;
}

.section h3 {
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.75rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  font-size: 0.95rem;
  min-width: 300px;
}

th, td {
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  text-align: center;
  white-space: nowrap;
}

th {
  background-color: #1f2937;
  color: white;
  font-weight: 600;
}

td {
  color: #374151;
}

tr:nth-child(even) {
  background-color: #f3f4f6;
}

/* ✅ Responsive Adjustments */
@media (max-width: 768px) {
  .attendance {
    padding: 1rem;
  }

  h1 {
    font-size: 1.4rem;
  }

  .employee-card {
    padding: 1rem;
  }

  table {
    font-size: 0.85rem;
  }

  th, td {
    padding: 0.6rem;
  }

  .section h3 {
    font-size: 0.9rem;
  }
}
</style>


