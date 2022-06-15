const App = {
  data() {
    return {
      data: 'Hello world',
      greetings: ['おはよう', 'こんにちは', 'こんばんは'],
      showGreetings: true,
      newGreeting: '',
    };
  },
  mounted() {
    console.log('mounted');
  },
  methods: {
    toggleShowGreetings(){
      this.showGreetings = !this.showGreetings;
    },
    addGreeting(){
      this.greetings.push(this.newGreeting);
      this.newGreeting = '';
    },
  },
  compilerOptions: {
    delimiters: ['[[', ']]'],
  },
};

Vue.createApp(App).mount('#app');