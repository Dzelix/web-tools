<template>
    <div class="wrap">
      <!-- простой цикл -->
      <p class="content">
        <span class="text" v-for="item in simpleArr">{{ item }}</span>
        <span class="sub">простой цикл</span>
      </p>

      <!-- цикл с индексом -->
      <p class="content">
        <span class="text" v-for="(item, index) in arr">{{ item.age }} - {{ index }}</span>
        <span class="sub">цикл с индексом </span>
      </p>


      <!-- деструктурированный цикл -->
      <p class="content">
        <span class="text" v-for="(value, key) in obj">{{ key }} - {{ value }}</span>
        <span class="sub">деструктурированный цикл </span>
      </p>

    </div>
</template>

<script setup>
  const simpleArr = [1,2,3,3,2,1];

  const arr = [
    { id: 1, age: 10 },
    { id: 3, age: 30 },
    { id: 2, age: 20 },
  ]

  const obj = {
    name: 'Alex',
    age: 40
  }
</script>
