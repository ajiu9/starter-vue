<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Style from './components/style.vue'
</script>

<template>
  <div w-full h-full>
    <a href="https://ajiu9.cn/" target="_blank">
      <img src="./assets/logo.svg" class="logo vue" alt="ajiu9 logo" />
    </a>
  </div>
  <HelloWorld msg="你好" />
  <Style/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
