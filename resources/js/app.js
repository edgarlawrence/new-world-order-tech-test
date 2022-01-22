window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('navbars-component', require('./components/Navbars.vue').default);
Vue.component('header-component', require('./components/Header.vue').default);
Vue.component('info1-component', require('./components/Info1.vue').default);
Vue.component('register-component', require('./components/Register.vue').default);
Vue.component('faqs-component', require('./components/FAQs.vue').default);
Vue.component('carousels-component', require('./components/Carousels.vue').default);
Vue.component('footers-component', require('./components/Footers.vue').default);
Vue.component('locations-component', require('./components/Locations.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
