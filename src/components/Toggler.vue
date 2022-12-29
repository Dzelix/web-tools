<template>
  <div>
    <div style="display: flex; gap: 12px">
      <button @click="open()">open</button>
      <button @click="close()">close</button>
      <button @click="toggle()">toggle</button>
    </div>
    <div style="display: flex; margin-top: 24px;" v-if="is_open">
      <span>I am open</span>
    </div>
  </div>
  <div>
    <div style="display: flex; gap: 12px">
      <button @click="open('first')">open</button>
      <button @click="close('first')">close</button>
      <button @click="toggle('first')">toggle</button>
    </div>
    <div style="display: flex; margin-top: 24px;" v-if="is_open_1">
      <span>I am open</span>
    </div>
  </div>
  <div>
    <div style="display: flex; gap: 12px">
      <button @click="open('second')">open</button>
      <button @click="close('second')">close</button>
      <button @click="toggle('second')">toggle</button>
    </div>
    <div style="display: flex; margin-top: 24px;" v-if="is_open_2">
      <span>I am open</span>
    </div>
  </div>
  <div>
    <div style="display: flex; gap: 12px">
      <button @click="open()">open</button>
      <button @click="close()">close</button>
      <button @click="toggle()">toggle</button>
    </div>
    <div style="display: flex; margin-top: 24px;" v-if="is_open_3">
      <span>I am open</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useToggle } from '@/composables/useToggle.js';

const is_open = ref(false);
const is_open_1 = ref(false);
const is_open_2 = ref(false);
const is_open_3 = ref(false);

const fn = () => console.log('fn');

watchEffect(() => {
  console.log('effect')
})

// const { open, close, toggle } = useToggle();
// const { open, close, toggle } = useToggle(is_open);
// const { open, close, toggle } = useToggle(is_open, { open: fn });
const { open, close, toggle } = useToggle({ first: is_open_1, second: is_open_2 }, { first: { open: fn }});
// const { open, close, toggle } = useToggle({ first: is_open_1, second: is_open_3 });



</script>
