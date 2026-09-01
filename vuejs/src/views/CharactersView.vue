```vue
<script setup lang="ts">
import wemmbu from '../assets/wemmbu.jpeg'
import spoke from '../assets/spoke.jpg'
import flamefrags from '../assets/flamefrags.jpg'
import parrot from '../assets/images.jpg'

const characters = [
  {
    name: 'Wemmbu',
    image: wemmbu,
    info: 'Wemmbu is een van de hoofdpersonages van de Unstable SMP. Hij staat bekend om zijn mace, elytra en orbital strike cannon.'
  },
  {
    name: 'Spoke',
    image: spoke,
    info: 'Spoke is een van de hoofdpersonages van de Unstable SMP. Zijn belangrijkste wapens zijn zijn crossbow en Totem of Null.'
  },
  {
    name: 'FlameFrags',
    image: flamefrags,
    info: 'FlameFrags is een van de hoofdpersonages van de Unstable SMP. Zijn belangrijkste wapen is een zwaard.'
  },
  {
    name: 'Parrot',
    image: parrot,
    info: 'Parrot is een van de hoofdpersonages van de Unstable SMP. Zijn belangrijkste wapen is een boog.'
  }
]
</script>

<template>
  <div class="page">
    <h1>Characters</h1>
    <p>Discover the characters of the Unstable SMP.</p>

    <div class="characters">
      <div v-for="character in characters" :key="character.name" class="character">
        <img :src="character.image" :alt="character.name">

        <div class="character-info">
          <h2>{{ character.name }}</h2>
          <p>{{ character.info }}</p>
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

.characters {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}

.character {
  display: flex;
  width: 100%;
  height: 350px;
  background: #111;
  color: white;
  border-radius: 10px;
  overflow: hidden;
}

.character img {
  width: 45%;
  height: 100%;
  object-fit: cover;
}

.character-info {
  width: 55%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.character h2 {
  font-size: 2rem;
  margin: 0 0 1rem;
}

.character p {
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 700px) {
  .characters {
    grid-template-columns: 1fr;
  }
}
</style>
```
