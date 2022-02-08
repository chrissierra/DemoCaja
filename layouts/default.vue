<template>
    <div>
        <header>
            <div class="contenedor_header">

                        <div class="contenedor_modal">
                                    <!-- Modal trigger -->
                                    <label class="button letra_negra label-agregar-componente" for="element-toggle">Agregar Componente</label>
                                    <input id="element-toggle" type="checkbox" />

                                    <!-- Modal -->
                                    <div class="modal letra_negra" id="MiModal">
                                    <h4>Ingresa un nuevo contador</h4>

                                    <div class="body-modal">
                                    
                                                    <input v-model="NombreContador" placeholder="Nombre del nuevo contador">
                                                    <button v-if="Contadores.length < 20" @click="CrearContador" :disabled="NombreContador.length > 20 || NombreContador.length == 0 ">Crear Contador</button>
                                                    <button v-if="Contadores.length == 20" disabled>Contadores máximos creados</button>
                                                    <br>
                                                    <small>El nombre del contador no puede tener mas de 20 caracteres. Tiene {{ NombreContador.length }} caracteres</small>
                                                    <br>    
                                                    <!-- <h1>{{NombreContador}}</h1> -->
                                    </div>
                                    <label class="button letra_negra" for="element-toggle">Cerrar</label>
                                    </div>
                        </div>


            </div>  

        </header>
        
        <Nuxt/>


        <footer>
                <contabilizacionValorContadores></contabilizacionValorContadores>
        </footer>
    </div>
</template>


<style>

.contenedor_header{
    display:grid;
    grid-template-columns:10fr 2fr;
    padding-top:1.5em;
}

.contenedor_modal{
    grid-column-start: 10;
    grid-column-end:12;
}


.label-agregar-componente{
    font-weight: bold;
    font-size:.8em;
    text-transform: uppercase;
    cursor:pointer;
}

.body-modal{
    margin:1em;
}

.letra_negra{
    color:black;
}
#element-toggle {
  display: none;
}
#element-toggle:not(:checked) ~ #MiModal {
  display: none;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: azure;
  padding: 2em;
  border-radius: 1rem;
  border: 1px solid gray;
}

.button {
  background-color: beige;
  border-radius: 4px;
  padding: 4px;
  border: 1px solid gray;
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