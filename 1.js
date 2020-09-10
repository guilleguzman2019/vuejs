var app = new Vue({

    el: '#app',
    data: {
      mensaje: 'Hola mundo!',
      frutas:[
          {nombre:'pera',cantidad:5},
          {nombre:'naranja',cantidad:10},
          {nombre:'limones',cantidad:0}
      ],
      nuevaFruta:'',
      total: 0
      
    },
    methods:{
      agregarFruta(){
        app.frutas.push({nombre:this.nuevaFruta,cantidad:5});
        this.nuevaFruta =''
      }
    },
    computed:{
      sumarFruta(){
        this.total = 0;
        for(fruta of this.frutas){
          this.total += fruta.cantidad;
        }
        return this.total
      }

    }
  })