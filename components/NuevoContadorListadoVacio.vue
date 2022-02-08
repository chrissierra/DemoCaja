<template>

    <div v-if="Contadores.length == 0">
    <div  class="contenedor-formulario-lista-vacia">
        
                                    
        <input v-model="NombreContador" placeholder="">
        
        <button class="boton" @click="CrearContador" :disabled="NombreContador.length > 20 || NombreContador.length == 0 ">Crear Contador</button>
          
        
          
                   

    </div>
    <div style="text-align:center;">
        <small>El nombre del contador no puede tener mas de 20 caracteres. Tiene {{ NombreContador.length }} caracteres</small>
    </div>
        
                                                    
    </div>
</template>

<style scoped>
.contenedor-formulario-lista-vacia{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
}
/* .comentario{
    flex-grow:1;
} */

.boton{
    border-radius: .5em;
      padding: .375rem .75rem;
  border: 1px solid #007bff;
  border-radius: .25rem;
  color: #007bff;
  transition: color .15s ease-in-out,
    background-color .15s ease-in-out;
    font-weight: bold;
    text-transform: uppercase;
    font-size:.7em;
    font-family: 'Montserrat', sans-serif;
}

.boton:hover, .boton:active, .boton:focus {
  color: #fff;
  background-color: #007bff;
}
</style>

<script>
export default {
   
    data() {
        return {
            mensaje: '',
            NombreContador: ''
        }
    },
    computed: {
        counter(){
            return this.name
            
        },
         Contadores(){
                // let contadoresManipulables = [...this.$store.state.contador]
                return this.$store.state.contador;
            }

    },
    methods:{

    CrearContador () {
            this.$store.commit('CREAR_CONTADOR', this.NombreContador);
            this.NombreContador = ''
        }
    }
}
</script>