<template>
  <div class="wrap">
    <p class="content" @click="log">
      <span class="text">{{ userName }}</span>
      <span class="sub">миксин</span>
    </p>
  </div>
</template>

<script>
  import userMixin from '@/mixins/userMixin.js';

  export default {
    mixins: [userMixin],
    // data(){
    //   return {
    //     userName: 'Alex'
    //   }
    // }
  }
</script>
