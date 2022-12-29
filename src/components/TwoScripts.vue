<template>
  <div class="wrap">
    <!-- both scripts -->
    <p class="content">
      <span class="text">{{ one }} - {{ two }}</span>
      <span class="sub">both scripts</span>
    </p>
  </div>
</template>

<script>

console.log(1);

export default {
  data(){
    return {
      one: 1
    }
  }
}

</script>


<script setup>
import { watchEffect, ref } from 'vue';

const two = ref(2);

// setTimeout(() => {
//   two.value = 3
// }, 1500);

console.log(2);

watchEffect(() => {
  console.log('setup')
})

</script>
