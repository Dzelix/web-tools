<template>
  <h1>Vue Course</h1>
  <!-- <TwoScripts /> -->
  <!-- <TwoScripts /> -->
  <!-- <DynamicComponents /> -->
  <Defines :oldAge="10" :age="age" @changeAge="changeAge" ref="comp"  />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TwoScripts from '@/components/TwoScripts.vue';
import DynamicComponents from '@/components/DynamicComponents.vue';
import Defines from '@/components/Defines.vue';

const age = ref(10);
const changeAge = d => {
  console.log(d)
  age.value = d;
}

const comp = ref(null);;

onMounted(() => {
  comp.value.fn()
})


</script>
