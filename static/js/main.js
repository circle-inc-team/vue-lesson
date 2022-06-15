const App = {
  data() {
    return {
      data: 'Hello world',
      greetings: ['おはよう', 'こんにちは', 'こんばんは'],
    };
  },
  compilerOptions: {
    delimiters: ['[[', ']]'],
  },
};

Vue.createApp(App).mount('#app');