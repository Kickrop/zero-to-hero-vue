import Vue from 'vue';
import App from './src/App.vue';
new Vue({
    el: '#app',
    render: (h) => h(App),
});
// const navbar = Vue.component('navbar', {
//     template: `
//         <header>
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//             </ul>
//         </header>
//         `,
// });

// const app = new Vue({
//     el: '#app',
//     data: {
//         message: 'From Zero to Hero with Vue!',
//         hasMessage: true,
//         vue:
//             'Vue.js is an open-source JavaScript framework for building user interfaces.',
//         selected: '',
//         messages: [
//             {text: 'Hello world'},
//             {text: 'You are cool!'},
//             {text: 'twitter.com/hui'},
//          ],
//         },
//     methods: {
//         logMessage() {
//             console.log(this.message);
//         },
//         toggleMessage() {
//             this.hasMessage = !this.hasMessage;
//         },
//     },
//     components: {
//         navbar,
//         counter,
//     },
// });
