<template>
  <div class="wrap">
    <!-- ref -->
    <p class="content" @click="changeName">
      <span class="text">{{ userName }}</span>
      <span class="sub">ref</span>
    </p>

    <!-- ссылка на ref -->
    <p class="content" @click="changeAnotherName">
      <span class="text">{{ anotherName }}</span>
      <span class="sub">ссылка на ref</span>
    </p>

    <!-- копирование ref -->
    <p class="content" @click="changeNewName">
      <span class="text">{{ newName }}</span>
      <span class="sub">копирование ref</span>
    </p>

    <!-- computed -->
    <p class="content" @click="changeName">
      <span class="text">{{ userAge }}</span>
      <span class="sub">computed</span>
    </p>

    <!-- reactive -->
    <p class="content" @click="changeCompanyName">
      <span class="text">{{ company.name }}</span>
      <span class="sub">reactive</span>
    </p>


  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';

const userName = ref('Alex');
const changeName = () => userName.value = 'Fred';

const anotherName = ref(userName);
const changeAnotherName = () => anotherName.value = 'Brad';

const newName = ref(userName.value);
const changeNewName = () => newName.value = 'Nick';

const userAge = computed(() => {
  if(userName.value === 'Alex') return 10;
  else return 20;
})

const company = reactive({ name: 'Apple' });
const changeCompanyName = () => company.name = 'MS'

</script>
