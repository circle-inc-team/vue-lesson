const App = {
  data() {
    return {
      data: 'Hello world',
      greetings: ['おはよう', 'こんにちは', 'こんばんは'],
      showGreetings: true,
    };
  },
  compilerOptions: {
    delimiters: ['[[', ']]'],
  },
};

Vue.createApp(App).mount('#app');