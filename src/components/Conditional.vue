<template>
  <div class="wrap">
    <!-- обычное условие -->
    <p class="content" v-if="userName">
      <span class="text">{{ userName }}</span>
      <span class="sub">v-if</span>
    </p>

    <!-- цепочка условий -->
    <p class="content" v-if="userName === 'Ben'">
      <span class="text">{{ userName }}</span>
      <span class="sub">v-if</span>
    </p>
    <p class="content" v-else-if="userName === 'John'">
      <span class="text">{{ userName }}</span>
      <span class="sub">v-else-if</span>
    </p>
    <p class="content" v-else>
      <span class="text">{{ userName }}</span>
      <span class="sub">v-else</span>
    </p>

    <!-- двойное условие -->
    <p class="content" v-if="userName && true">
      <span class="text">{{ userName }}</span>
      <span class="sub">v-else</span>
    </p>

    <!-- Скрытие при использовании асинхронного кода -->
    <p class="content" v-if="obj">
      <span class="text">{{ inc(obj.age) }}</span>
      <span class="sub">async v-if</span>
    </p>

    <!-- скрытие с v-show -->
    <p class="content grid" v-show="userName">
      <span class="text">{{ userName }}</span>
      <span class="sub">v-show</span>
    </p>

  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const userName = 'Alex';

  // v-if не будет приведен к true
  // const userName = null;
  // const userName = undefined;
  // const userName = '';
  // const userName = 0;

  const obj = ref(null);
  const inc = age => age + 1;
  setTimeout(() => {
    obj.value = {};
    obj.value.age = 10;
  }, 2000)



</script>

<style>
  .grid {
    display: grid;
  }
</style>
