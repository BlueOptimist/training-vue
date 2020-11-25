// new Vue({
//   el:'#vue-app',
//   data: {
//     output: 'Your fav food'
//   },
//   methods: {
//     readRefs: function(){
//       console.log(this.$refs.test.innerText);
//       this.output = this.$refs.input.value;
//     }
//   }
// })
// var data = {
//   name: 'Yoshi'
// }

// Vue.component('greeting', {
//   template: '<p> Hey there, I am {{name}} . <button v-on:click="changeName">Change Name</button></p>',
//   data: function(){
//     return {
//       name: 'Yoshi'
//     }
//   },
//   methods: {
//     changeName: function(){
//       this.name = 'Mario';
//     }
//   }
// })
//
// new Vue({
//   el:'#vue-app-one'
// })
//
// new Vue({
//   el:'#vue-app-two'
// })

// var one = new Vue ({
//   el: '#vue-app-one',
//   data: {
//     title: 'Vue App One'
//   },
//   methods: {
//   },
//   computed: {
//     greet: function(){
//       return 'Hello from app one :)'
//     }
//   }
// });
//
// var two = new Vue ({
//   el: '#vue-app-two',
//   data: {
//     title: 'Vue App Two'
//   },
//   methods: {
//     changeTitle: function(){
//       one.title = "Title changed";
//     }
//   },
//   computed: {
//     greet: function(){
//       return 'This is App 2'
//     }
//   }
// });

// new Vue ({
//   el: '#vue-app',
//   data: {
//      health: 100,
//      ended: false,
//
//     characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
//     ninjas: [
//       { name: 'Ryu', age: 25 },
//       { name: 'Yoshi', age: 35 },
//       { name: 'Ken', age: 55 }
//     ]
//
//     error: false,
//     success: false
//     available:false,
//     nearby:false,
//     age: 20,
//     a: 0,
//     b: 0
//     name: 'Shaun',
//     job: 'Ninja',
//     website: 'http://www.thenetninja.co.uk',
//     websiteTag:'<a href="http://www.thenetninja.co.uk">The Net Ninja Webisite</a>'
//     x: 0,
//     y: 0
//     name: '',
//   },
//   methods: {
//
//       punch: function(){
//         this.health -= 10;
//         if (this.health <= 0){
//           this.ended = true;
//         }
//       },
//       restart: function(){
//         this.health = 100;
//         this.ended = false;
//       }
//
//     logName: function(){
//       console.log('You entered your name');
//     },
//     logAge: function(){
//       console.log('You entered your age');
//     }
//     greet: function(time){
//       this.name
//       return 'Good ' + time + ' ' + this.name;
//     }
//
//     add: function(inc){
//       this.age += inc;
//     },
//     subtract: function(dec){
//       this.age -= dec;
//     },
//     updateXY: function(event){
//       this.x = event.offsetX;
//       this.y = event.offsetY;
//     },
//     click: function(){
//       alert('You clicked me');
//     }
//   },
//   computed: {
//     addToA:function(){
//       return this.a + this.age;
//     },
//     addToB:function(){
//       return this.b + this.age;
//     }
//     compClasses:function(){
//       return{
//         available: this.available,
//         nearby: this.nearby
//       }
//     }
//   }
// });

// two.title = "Changed from outside";
