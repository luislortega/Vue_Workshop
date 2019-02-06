//VueApp sin CLI :(
new Vue({ el: '#app',
    data(){
        return{
            //Variables de nuestra app :)
            tarea:  null,
            tareas:[
                {
                    id: 1,
                    texto: "Mi primer tarea"
                }
            ],
            required: (value) => !!value || "No aceptamos valores vacios :(",
            snackbar: false, //Show the snackbar
            y: 'bottom',
            x: 'right',
            mode: null,
            timeout: 6000,
            text: null
        }
    },
    methods:{
        //Todos nuestros metodos.
        crearTarea(){
            if(this.tarea){
                this.tareas.push({id:this.tareas.length + 1, texto: this.tarea})
                this.text = "Tarea agregada"
                this.snackbar = true
            }else{
                this.text = "Rellena los campos por favor"
                this.snackbar = true
            }
        },
        borrar(item){
            this.tareas.splice(this.tareas.indexOf(item),  1)
            this.snackbar = true
            this.text = `Tarea ${item.id} eliminada`
        }
    }
})