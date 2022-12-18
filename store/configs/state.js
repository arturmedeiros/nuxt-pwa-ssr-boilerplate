export default () => ({
  data: {
    title: 'Welcome to the Vuetify PWA + Nuxt.js Boilerplate!',
    text_1: 'Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.'
  },
  baseUrl: '',
  loading: false,
  menu_sidebar: {
    items: [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire'
      }
    ],
  }
});
