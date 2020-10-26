import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#3AB5A4',
          secondary: '#F7ECE0',
          accent:'#FFFFFF',
        },
      },
    },
  });
