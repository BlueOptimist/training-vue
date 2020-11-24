new Vue ({
  el: '#vue-app',
  data: {
    age: 20,
    a: 0,
    b: 0
    // name: 'Shaun',
    // job: 'Ninja',
    // website: 'http://www.thenetninja.co.uk',
    // websiteTag:'<a href="http://www.thenetninja.co.uk">The Net Ninja Webisite</a>'
    // x: 0,
    // y: 0
    // name: '',
  },
  methods: {
    // logName: function(){
    //   console.log('You entered your name');
    // },
    // logAge: function(){
    //   console.log('You entered your age');
    // }
    // greet: function(time){
    //   this.name
    //   return 'Good ' + time + ' ' + this.name;
    // }

    // add: function(inc){
    //   this.age += inc;
    // },
    // subtract: function(dec){
    //   this.age -= dec;
    // },
    // updateXY: function(event){
    //   this.x = event.offsetX;
    //   this.y = event.offsetY;
    // },
    // click: function(){
    //   alert('You clicked me');
    // }
  },
  computed: {
    addToA:function(){
      return this.a + this.age;
    },
    addToB:function(){
      return this.b + this.age;
    }
  }
});
