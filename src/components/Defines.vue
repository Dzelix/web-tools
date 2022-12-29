<template>
  <div class="wrap">
    <!-- props -->
    <p class="content">
      <span class="text">{{ oldAge }}</span>
      <span class="sub">props</span>
    </p>
    <!-- emit -->
    <p class="content" @click="emit('changeAge', 20)">
      <span class="text">{{ age }}</span>
      <span class="sub">emit</span>
    </p>
  </div>
</template>


<script setup>

const emit = defineEmits(['changeAge']);

const props = defineProps({
  age: Number,
  oldAge: Number
})

const fn = () => console.log(123);

defineExpose({fn});



</script>
