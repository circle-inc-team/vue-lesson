const App = {
  data() {
    return {
      data: 'Hello world',
      greetings: ['おはよう', 'こんにちは', 'こんばんは'],
      showGreetings: true,
    };
  },
  methods: {
    toggleShowGreetings(){
      this.showGreetings = !this.showGreetings
    },
  },
  compilerOptions: {
    delimiters: ['[[', ']]'],
  },
};

Vue.createApp(App).mount('#app');