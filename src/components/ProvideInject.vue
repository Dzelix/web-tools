<template>
  <div class="wrap">
    <!-- inject -->
    <p class="content">
      <span class="text">{{ userCounter }}</span>
      <span class="sub">inject</span>
    </p>

    <!-- inject -->
    <p class="content">
      <span class="text">{{ userValue }}</span>
      <span class="sub">inject</span>
    </p>
  </div>
</template>

<script setup>
  import { inject } from 'vue';

  const userCounter = inject('userCounter');
  const userValue = inject('userValue');
</script>
