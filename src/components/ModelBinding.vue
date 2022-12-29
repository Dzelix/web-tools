<template>
  <div class="wrap">
    <!-- привязка инпута -->
    <label class="label">
      <input class="input" type="text" v-model="userName">
      <span class="sub">привязка инпута</span>
    </label>

    <!-- наблюдение за изменением -->
    <label class="label">
      <input class="input" type="text" v-model="userAge" @change="userInput">
      <span class="sub">наблюдение за изменением</span>
    </label>
  </div>
</template>

<script setup>
  import { watchEffect, ref } from 'vue';

  const userName = ref('Alex');
  const userAge = ref(10);

  watchEffect(() => {
    console.log(userName.value);
  })

  const userInput = () => console.log(userAge.value);


</script>
