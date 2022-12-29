<template>
  <div class="wrap">
    <!-- watchEffect -->
    <p class="content" @click="changeUser">
      <span class="text">{{ userName }} and {{ companyName }}</span>
      <span class="sub">watchEffect</span>
    </p>

    <!-- watch -->
    <p class="content" @click="changeCompany">
      <span class="text">{{ userName }} and {{ companyName }}</span>
      <span class="sub">watch</span>
    </p>


  </div>
</template>

<script setup>
  import { ref, watchEffect, watchPostEffect, watch } from 'vue';

  const userName = ref('Alex');
  const companyName = ref('Apple');
  const changeUser = () => {
    userName.value = 'Fred';
    setTimeout(() => {
      companyName.value = 'MS';
    },2000)
  }

  const getText = () => {
    const el = document.querySelector('.text');
    console.log(el);
  }

  watchEffect(() => {
    console.log({ userName: userName.value, companyName: companyName.value });
    console.log('watchEffect');

    getText();
  });

  watchPostEffect(() => {
    console.log({ userName: userName.value, companyName: companyName.value });
    console.log('watchEffect');

    getText();
  })

  const changeCompany = () => {
    companyName.value = 'MS';
  }

  watch(userName, (val, oldVal) => {
    console.log(val);
    console.log(oldVal);
    console.log(companyName.value);
  });


</script>
