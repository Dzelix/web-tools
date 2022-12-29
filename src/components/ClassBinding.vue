<template>
  <div class="wrap">
    <!-- динамический класс -->
    <p class="content">
      <span class="text" :class="{ active: isActive }">Alex</span>
      <span class="sub">динамический класс</span>
    </p>

    <!-- динамический класс БЭМ -->
    <p class="content">
      <span class="text" :class="{ 'text_green': isActive }">Alex</span>
      <span class="sub">динамический класс БЭМ</span>
    </p>

    <!-- одиночный класс -->
    <p class="content">
      <span class="text" :class="colorBlue">Alex</span>
      <span class="sub">одиночный класс</span>
    </p>

    <!-- массив классов -->
    <p class="content">
      <span class="text" :class="[fontSize, colorBlue]">Alex</span>
      <span class="sub">массив классов</span>
    </p>


    <!-- <span class="text" :class="{ `text_${color}`: isActive }">Alex</span> -->
    <!-- <span class="text" :class="{ 'text' + color: isActive }">Alex</span> -->
  </div>
</template>

<script setup>
  const isActive = true;

  const fontSize = 'text_large';
  const colorBlue = 'text_blue';


</script>


<style>
  .text.active {
    color: red;
  }

  .text_green {
    color: green;
  }

  .text_blue {
    color: blue;
  }

  .text_large {
    font-size: 22px;
  }
</style>
