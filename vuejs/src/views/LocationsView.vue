<script setup lang="ts">
const locations = [
  {
    name: 'Location 1',
    image: '',
    info: 'Information about this location will be added here.'
  },
  {
    name: 'Location 2',
    image: '',
    info: 'Information about this location will be added here.'
  },
  {
    name: 'Location 3',
    image: '',
    info: 'Information about this location will be added here.'
  },
  {
    name: 'Location 4',
    image: '',
    info: 'Information about this location will be added here.'
  }
]
</script>

<template>
  <div class="page">
    <h1>Locations</h1>
    <p>Discover the important locations of the Unstable SMP.</p>

    <div class="locations">
      <div v-for="location in locations" :key="location.name" class="location">
        <div class="image-container">
          <img v-if="location.image" :src="location.image" :alt="location.name">
        </div>

        <div class="location-info">
          <h2>{{ location.name }}</h2>
          <p>{{ location.info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  min-height: calc(100vh - 8rem);
  padding: 0;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin: 0 0 0.5rem;
}

.page > p {
  margin: 0 0 3rem;
}

.locations {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

.location {
  display: flex;
  width: 100%;
  height: 350px;
  background: #111;
  color: white;
  border-radius: 10px;
  overflow: hidden;
}

.image-container {
  width: 45%;
  height: 100%;
  background: #222;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.location-info {
  width: 55%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.location h2 {
  font-size: 2rem;
  margin: 0 0 1rem;
}

.location p {
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 700px) {
  .locations {
    grid-template-columns: 1fr;
  }
}
</style>