<template>
  <div class="card-wrapper" @click="flipCard">
    <div class="card-inner" :class="{ flipped }">
      <!-- Front -->
      <div class="card-front">
        <h2>{{ name }}</h2>
        <p>{{ position }}</p>
      </div>

      <!-- Back -->
      <div class="card-back">
        <div class="card-details">
          <p><strong>Department:</strong> {{ department }}</p>
          <p><strong>Attendance:</strong> {{ attendance }}%</p>
          <p><strong>Review:</strong> {{ review }}</p>
          <p><strong>Date:</strong> {{ reviewDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'review', 'position', 'department', 'attendance', 'reviewDate'],
  data() {
    return {
      flipped: false
    }
  },
  methods: {
    flipCard() {
      this.flipped = !this.flipped;
    }
  }
}
</script>

<style scoped>
.card-wrapper {
  width: 100%;
  max-width: 300px;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 240px;
  transition: transform 0.4s ease-in-out;
  transform-style: preserve-3d;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  text-align: center;
}

.card-front {
  background-color: #1f2a37;
  color: white;
}

.card-front h2 {
  margin: 0;
  font-size: 1.2rem;
}

.card-front p {
  font-size: 0.95rem;
  color: #d1d5db;
}

.card-back {
  background-color: #ffffff;
  color: #111827;
  transform: rotateY(180deg);
  padding: 1.2rem;
  text-align: left;
  border: 1px solid #111827;
}

.card-details p {
  margin: 0.4rem 0;
  font-size: 0.9rem;
}

/* ✅ Responsive for small screens */
@media (max-width: 768px) {
  .card-inner {
    height: 200px;
  }

  .card-front h2 {
    font-size: 1rem;
  }

  .card-front p {
    font-size: 0.85rem;
  }

  .card-back {
    font-size: 0.85rem;
    padding: 0.8rem;
  }

  .card-details p {
    font-size: 0.8rem;
  }
}
</style>
