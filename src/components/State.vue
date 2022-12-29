<template>
  <div class="wrap">
    <!-- данные -->
    <p class="content">
      <span class="text">{{ userName }}</span>
      <span class="sub">данные</span>
    </p>

    <!-- props -->
    <p class="content">
      <span class="text">{{ number }}</span>
      <span class="sub">props</span>
    </p>

    <!-- computed -->
    <p class="content">
      <span class="text">{{ userZip }}</span>
      <span class="sub">computed</span>
    </p>

    <!-- <AnotherComponent /> -->
  </div>
</template>

<script>
  import AnotherComponent from '@/components/AnotherComponent.vue';

  export default {
    emits: ['changeUserName'],
    props: ['number'],
    components: {
      AnotherComponent
    },
    // проверка на тип
    // props: {
    //   number: {
    //     type: Number,
    //     required: true,
    //     default: 111,
    //     validator(arg){
    //       if(arg > 10) return;
    //       return arg;
    //     }
    //   }
    // },
    data(){
      // доступ ко всем данным через this.$data
      return {
        userName: 'Alex',
      }
    },
    computed: {
      userZip(){
        if(this.userName === 'Alex') return 123;
        else return 321;
      }
    },
    watch: {
      userName: function(val, oldVal){
        console.log(val);
        console.log(oldVal);
        this.$emit('changeUserName', val);
      },
      userZip: function(val, oldVal){
        console.log(val);
        console.log(oldVal);
      }
    },
    methods: {
      // нежелательное добавление данных
      addDataAge(){
        this.$data.age = 10;
      },
      async getData(){
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await res.json();
        return json;
      },
    },
    async mounted(){
      // this.addDataAge();
      // console.log(this.$data);
      // console.log(await this.getData());
      setTimeout(() => {
        this.userName = 'John';
      }, 2000)
    }
  }
</script>
