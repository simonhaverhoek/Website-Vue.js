<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Unstable SMP</h1>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/characters">Characters</RouterLink>
        <RouterLink to="/locations">Locations</RouterLink>
        <RouterLink to="/socials">Socials</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  padding: 2rem;
  background: #111;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
}

.wrapper {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
}

nav {
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

nav a:hover {
  color: #aaa;
}

nav a.router-link-exact-active {
  color: #42b883;
}

main {
  width: 100%;
  margin: 0;
  padding: 8rem 2rem 2rem;
  box-sizing: border-box;
}
</style>