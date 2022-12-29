<template>
  <div class="wrap">

    <!-- два синтаксиса привязки данных -->
    <p class="content">
      <span v-bind:data-name="userName" :data-value="userAge" class="text">Alex</span>
      <span class="sub">два синтаксиса</span>
    </p>

    <!-- статическая привязка -->
    <p class="content">
      <span value="userAge" class="text">Alex</span>
      <span class="sub">статическая привязка</span>
    </p>

    <!-- привязка объекта -->
    <p class="content">
      <span v-bind="obj" class="text">Alex</span>
      <span class="sub">привязка объекта</span>
    </p>

    <!-- динамические свойства -->
    <p class="content" v-for="item in [0,1]" >
      <span :[`data-${item}`]="item" class="text">Alex</span>
      <span class="sub">динамические свойства</span>
    </p>

    <!-- DOM атрибуты -->
    <p class="content" >
      <span .zip="200" class="text">Alex</span>
      <span class="sub">DOM атрибуты</span>
    </p>

  </div>
</template>

<script setup>

  import { onMounted } from 'vue';

  const userName = 'Alex';
  const userAge = 10;

  const obj = {
    name: 'John',
    age: 10
  }

  const zip = 12345;

  onMounted(() => {
    const el = document.querySelector('[data-name="Alex"]');
    console.log({ data: el.dataset.value});
    console.log({ age: userAge});
    if(el.value === userAge) console.log('correct');
    else console.log('wrong');
  })
</script>
