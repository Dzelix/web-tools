<template>
  <div class="wrap">
    <!-- ивент на клик -->
    <p class="content" @click="clickEvent">
      <span class="text">Alex</span>
      <span class="sub">ивент на клик</span>
    </p>

    <!-- несколько ивентов на клик -->
    <p class="content" @click="clickEvent(), clickEventSecond()">
      <span class="text">Alex</span>
      <span class="sub">несколько ивентов на клик</span>
    </p>

    <!-- DOM EVENT -->
    <p class="content" @click="domEvent">
      <span class="text">Alex</span>
      <span class="sub">DOM EVENT</span>
    </p>

    <!-- данные вместо ивента -->
    <p class="content" @click="dataClick(10)">
      <span class="text">Alex</span>
      <span class="sub">данные вместо ивента</span>
    </p>


  </div>
</template>

<script setup>

  const clickEvent = () => console.log('click');

  const clickEventSecond = () => console.log('click second');

  const domEvent = e => console.log(e);

  const dataClick = age => console.log(age);


</script>
