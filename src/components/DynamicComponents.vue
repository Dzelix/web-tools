<template>
  <div class="wrap">
    <!-- dynamic -->
    <p class="content">
      <component :is="(age > 18) ? Adult : Kid" />
      <span class="sub">dynamic</span>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Kid from '@/components/Kid.vue';
import Adult from '@/components/Adult.vue';

const age = ref(17);

onMounted(() => {
  setTimeout(() => {
    age.value = 25;
  }, 2000)
})


</script>
