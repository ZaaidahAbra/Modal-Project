<template>
  <div class="employee-container">

    <!-- Header Section -->
    <div class="employee-header">
      <h2>Performance Reviews</h2>
    </div>

    <!-- Review Cards Grid -->
    <div class="cards-container">
      <ReviewCard
        v-for="(employee, index) in employees"
        :key="index"
        :name="employee.name"
        :review="employee.review"
        :position="employee.position"
        :department="employee.department"
        :attendance="employee.attendance"
        :reviewDate="employee.reviewDate"
      />
    </div>
  </div>
</template>

<script>
import ReviewCard from '@/components/ReviewCard.vue';

export default {
  components: {
    ReviewCard
  },
  data() {
    return {
      employees: [
        {
          name: 'Sibongile Nkosi',
          position: 'Software Engineer',
          department: 'Development',
          attendance: 98,
          review: 'Excellent performance, consistently exceeds expectations.',
          reviewDate: '2025-06-15'
        },
        {
          name: 'Lungile Moyo',
          position: 'HR Manager',
          department: 'HR',
          attendance: 96,
          review: 'Great leadership skills, effectively manages team dynamics.',
          reviewDate: '2025-06-12'
        },
        {
          name: 'Keshav Naidoo',
          position: 'Sales Representative',
          department: 'Sales',
          attendance: 94,
          review: 'Strong technical and negotiation skills, drives results.',
          reviewDate: '2025-06-10'
        },
        {
          name: 'Thabo Molefe',
          position: 'Quality Analyst',
          department: 'QA',
          attendance: 97,
          review: 'Attention to detail ensures minimal defects and high standards.',
          reviewDate: '2025-06-08'
        },
        {
          name: 'Zanele Khumalo',
          position: 'Marketing Specialist',
          department: 'Marketing',
          attendance: 95,
          review: 'Creative and strategic thinker with consistent campaign success.',
          reviewDate: '2025-06-05'
        },
        {
          name: 'Sipho Zulu',
          position: 'UI/UX Designer',
          department: 'Design',
          attendance: 93,
          review: 'Brings modern, user-friendly design approaches.',
          reviewDate: '2025-06-03'
        },
        {
          name: 'Naledi Moeketsi',
          position: 'DevOps Engineer',
          department: 'IT',
          attendance: 99,
          review: 'Highly reliable with strong infrastructure automation expertise.',
          reviewDate: '2025-06-01'
        },
        {
          name: 'Farai Gumbo',
          position: 'Content Strategist',
          department: 'Marketing',
          attendance: 94,
          review: 'Strong communicator and cross-functional collaborator.',
          reviewDate: '2025-05-29'
        },
        {
          name: 'Karabo Dlamini',
          position: 'Accountant',
          department: 'Finance',
          attendance: 97,
          review: 'Accurate, detail-oriented, and provides great financial insights.',
          reviewDate: '2025-05-27'
        },
        {
          name: 'Fatima Patal',
          position: 'Customer Support Lead',
          department: 'Support',
          attendance: 95,
          review: 'Empathetic leader ensuring team excellence and customer satisfaction.',
          reviewDate: '2025-05-25'
        }
      ]
    };
  }
};
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

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

/* ✅ Responsive adjustments */
@media (max-width: 768px) {
  .employee-container {
    padding: 1rem;
  }

  .employee-header h2 {
    font-size: 1.4rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .cards-container {
    grid-template-columns: repeat(2,1fr);
  }
}
</style>
