<template>
  <div class="wrap">
    <!-- mustache -->
    <p class="content">
      <span class="text">{{ userName }}</span>
      <span class="sub">mustache</span>
    </p>

    <!-- тернарный оператор -->
    <p class="content">
      <span class="text">{{ userName === 'Alex' ? 'Fred' : userName }}</span>
      <span class="sub">тернарный оператор</span>
    </p>

    <!-- функция с параметром -->
    <p class="content">
      <span class="text">{{ changeUserName(userName) }}</span>
      <span class="sub">функция с параметром</span>
    </p>

    <!-- директива v-text -->
    <p class="content">
      <span class="text" v-text="userName"></span>
      <span class="sub">директива v-text</span>
    </p>

    <!-- тернарный оператор c v-text -->
    <p class="content">
      <span class="text" v-text="userName === 'Alex' ? 'Fred' : userName"></span>
      <span class="sub">тернарный оператор c v-text</span>
    </p>

    <!-- функция с параметром c v-text -->
    <p class="content">
      <span class="text" v-text="changeUserName(userName)"></span>
      <span class="sub">функция с параметром c v-text</span>
    </p>
  </div>

  <!-- Не будет работать -->
  <!-- <span>{{ if(userName === 'Alex') return 'Marty' }}</span> -->
  <!-- <span>{{ () => if(userName === 'Alex') return 'Marty' }}</span> -->



</template>

<script setup>

  const userName = 'Alex';

  const changeUserName = name => {
    if(name === 'Alex') return 'John';
    else return name;
  }

</script>

<style>
</style>
