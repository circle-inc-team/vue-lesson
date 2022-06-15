const App = {
  data() {
    return {
      data: 'Hello world'
    };
  },
  compilerOptions: {
    delimiters: ['[[', ']]'],
  },
};

Vue.createApp(App).mount('#app');