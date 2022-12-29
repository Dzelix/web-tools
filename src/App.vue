<template>
  <h1>Vue Course</h1>
  <!-- <ReactivityBasic /> -->
  <!-- <Watching /> -->
  <ProvideInject />
</template>

<script setup>
  import ReactivityBasic from '@/components/ReactivityBasic.vue';
  import Watching from '@/components/Watching.vue';
  import ProvideInject from '@/components/ProvideInject.vue';

  import { ref, provide } from 'vue'

  const userCounter = ref(200);

  provide('userValue', 100);
  provide('userCounter', userCounter);

  setTimeout(() => {
    userCounter.value = 300;
    // provide('userValue', 500); нельзя
  }, 2000)


</script>
