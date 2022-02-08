<template>
<div class="contenedor_contador">


    <div class="contenedor-filtros">

            <input  type="text" v-model="filtroMayorQue">
            <button class="boton-contenedor-orderby" @click="aplicarFiltroMayorQue">Filtrar Mayores</button>

            

            <input type="text" v-model="filtroMenorQue">
            <button class="boton-contenedor-orderby" @click="aplicarFiltroMenorQue">Filtro Menores</button>

            <input type="text" v-model="filtradoPorNombre">
            <button class="boton-contenedor-orderby" @click="aplicarFiltroPorNombre">Filtro Por Nombre</button>
            
    </div>


    <div class="contenedor-orderby">

            <button class="boton-contenedor-orderby"  @click="ordenarPorValorContador_AZ">Orden albabético A-Z</button>

            <button class="boton-contenedor-orderby" @click="ordenarPorValorContador_ZA">Orden albabético  Z- A</button>

            <button class="boton-contenedor-orderby" @click="ordenarPorValorContador_Numerico_ASC">Orden numérico Ascedente </button>

            <button class="boton-contenedor-orderby" @click="ordenarPorValorContador_Numerico_DESC">Orden numérico Descendente </button>

            <button class="boton-contenedor-orderby rojo" @click="removerFiltros">Remover Filtros </button>

    </div>

    

    <hr>


    <NuevoContadorListadoVacio></NuevoContadorListadoVacio>
   <!--  <ul> -->

       <div class="span-filtro">
           <span>
               {{filtroActivo}}
            </span>
       </div>
       
        <template v-for="(contador, i) in Contadores" >
            
            <!-- <li v-if="contador.numeroContador > filtroMayorQueAUsar"> -->
            <div class="contador" v-if="condicionFiltrado(contador.numeroContador,contador.nombre)">
                
                {{contador.nombre}}
                
                

                <div class="botones_aumentar_disminuir">
                    <font-awesome-icon @click="adicionEnContador(contador)" :disabled="contador.numeroContador==20"  :icon="['fas', 'plus-circle']"/>
                    <!-- <button @click="adicionEnContador(contador)" :disabled="contador.numeroContador==20">+</button> -->
                    {{contador.numeroContador}}
                    <!-- <button @click="restarEnContador(contador)" :disabled="contador.numeroContador==0">-</button> -->
                    <font-awesome-icon  @click="restarEnContador(contador)" :disabled="contador.numeroContador==0"  :icon="['fas', 'minus-circle']"/>
                    
                </div>

                <div class="boton_eliminar_contador">
                    <!-- <button @click="eliminarContador(contador)" ></button> -->
                    <font-awesome-icon  @click="eliminarContador(contador)"  :icon="['fas', 'trash-alt']"/>

                </div>

            </div>
         </template>
   <!--  </ul> -->



</div>


</template>


<style scoped>

.span-filtro{
    display: flex;
    justify-content: center;
    margin-bottom:1em;
}

.contenedor-filtros{
    display:flex;
    justify-content: center;
    margin-bottom:1em;
    flex-wrap: wrap;
    
}

.contenedor-orderby{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.boton-contenedor-orderby{
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

.boton-contenedor-orderby:hover, .boton-contenedor-orderby:active, .boton-contenedor-orderby:focus {
  color: #fff;
  background-color: #007bff;
}

.rojo:hover, .rojo:active, .rojo:focus {
  color: #fff;
  background-color:red;
}
.rojo{
    color: red;
}
</style>



<script>
    export default {
        data() {
            return {
                mensaje: '',
                filtroMayorQue: 0,
                filtroMayorQueBoolean: false,
                filtroPorNombreBoolean:false,
                filtradoPorNombre: '',
                filtroMenorQue:0,
                filtroMenorQueBoolean: false,
                FiltroVigente: '',
                
               
            }
        },
        created(){
            
        },
          mounted() {
            console.log('ghola');
            if(localStorage.getItem('Contador')){
                this.$store.commit('CREAR_DESDE_LOCALSTORAGE')
            }

            if(sessionStorage.getItem('FiltroVigente')){
                console.log("ACA")
                let objeto_preferencias = {'FiltroVigente': sessionStorage.getItem('FiltroVigente'),
                'booleanPorNombre': sessionStorage.getItem('booleanPorNombre'),
                'booleanMenorQue': sessionStorage.getItem('booleanMenorQue'),
                'booleanMayorQue': sessionStorage.getItem('booleanMayorQue')}
                


                this.$store.commit('GUARDAR_PREFERENCIAS_STATE', objeto_preferencias)


                this.FiltroVigente =  (sessionStorage.getItem('FiltroVigente'))
                this.filtroPorNombreBoolean =  JSON.parse(sessionStorage.getItem('booleanPorNombre'))
                this.filtroMenorQueBoolean =  JSON.parse(sessionStorage.getItem('booleanMenorQue'))
                this.filtroMayorQueBoolean =  JSON.parse(sessionStorage.getItem('booleanMayorQue'))

                console.log(typeof this.filtroPorNombreBoolean)
                console.log(this.filtroMenorQueBoolean)
                console.log(this.filtroMayorQueBoolean)
                console.log(typeof  this.filtroVigente)
                console.log(this.filtroVigente)
            }
        },
        computed:{
            Contadores(){
                // let contadoresManipulables = [...this.$store.state.contador]
                return this.$store.state.contador;
            },
            filtroActivo(){
                if(this.filtroPorNombreBoolean){
                    return 'El filtro activo es por nombre. Se filtran los contadores con el nombre de ' + this.FiltroVigente;
                }else if(this.filtroMenorQueBoolean){
                    return 'El filtro activo es por valores menores que. Valor de filtado: ' + this.FiltroVigente;
                }else if(this.filtroMayorQueBoolean){
                    return 'El filtro activo es por valores mayores que. Valor de filtado: ' + this.FiltroVigente;
                }else{
                    return '';
                }
            }
        },
        methods:{
            adicionEnContador(i){
                this.$store.commit('SUMAR_CONTADOR', i)
            },
            restarEnContador(i){
                this.$store.commit('RESTAR_CONTADOR', i)
            },
            eliminarContador(contador){
                this.$store.commit('ELIMINAR_CONTADOR', contador)    
            },
            ordenarPorValorContador_AZ(){
                this.$store.commit('ORDENAR_ALFABETICAMENTE_AZ')

            },
           ordenarPorValorContador_ZA(){
                this.$store.commit('ORDENAR_ALFABETICAMENTE_ZA')

            },

            ordenarPorValorContador_Numerico_DESC(){
                this.$store.commit('ORDENAR_POR_NUMEROCONTADOR_DESC')
            },
            ordenarPorValorContador_Numerico_ASC(){
                this.$store.commit('ORDENAR_POR_NUMEROCONTADOR_ASC')
            
            },
            aplicarFiltroMenorQue(){
                 this.filtroMenorQueBoolean = true;
                 this.filtroMayorQueBoolean = false;
                 this.filtroPorNombreBoolean = false;
                 
                 this.FiltroVigente=this.filtroMenorQue;
                 this.filtroMenorQue = '';
                 this.guardarPreferenciasFiltros( this.filtroMayorQueBoolean,this.filtroMenorQueBoolean,this.filtroPorNombreBoolean, this.FiltroVigente)
            },
            aplicarFiltroMayorQue(){
                this.filtroMayorQueBoolean = true;
                this.filtroMenorQueBoolean = false;
                this.filtroPorNombreBoolean = false;
               
                this.FiltroVigente=this.filtroMayorQue;
                 this.filtroMayorQue = '';
                  this.guardarPreferenciasFiltros( this.filtroMayorQueBoolean,this.filtroMenorQueBoolean,this.filtroPorNombreBoolean, this.FiltroVigente)
            },
            aplicarFiltroPorNombre(){

               // if(this.buscar(this.filtradoPorNombre, this.Contadores) !== undefined){
                 this.filtroMenorQueBoolean = false;
                 this.filtroMayorQueBoolean = false;
                 this.filtroPorNombreBoolean = true;
                this.FiltroVigente=this.filtradoPorNombre;
                 this.filtradoPorNombre = '';
                //}
                this.guardarPreferenciasFiltros( this.filtroMayorQueBoolean,this.filtroMenorQueBoolean,this.filtroPorNombreBoolean, this.FiltroVigente)

            },
            guardarPreferenciasFiltros(booleanMayorQue, booleanMenorQue, booleanPorNombre, filtroVigente){
                sessionStorage.setItem('booleanPorNombre', booleanPorNombre)
                sessionStorage.setItem('booleanMenorQue', booleanMenorQue)
                sessionStorage.setItem('booleanMayorQue', booleanMayorQue)
                sessionStorage.setItem('FiltroVigente', filtroVigente)
            },
            condicionFiltrado(numeroEnContador, nombre){



                
                if(this.filtroMayorQueBoolean){
                    return (numeroEnContador > this.FiltroVigente) ? true : false; 
                    
                }else if(this.filtroMenorQueBoolean){ 
                     return (numeroEnContador < this.FiltroVigente) ? true : false;
                }else if( this.filtroPorNombreBoolean ){
                    return nombre == this.FiltroVigente ? true : false;
                }else{
                    return true;
                }

                
            },
            buscar(nameKey, myArray){
                                
                    for (var i=0; i < myArray.length; i++) {
                        if (myArray[i].name === nameKey) {
                            return myArray[i];
                        }
                    }
                
            },
            removerFiltros(){
                 this.filtroMenorQueBoolean = false;
                 this.filtroMayorQueBoolean = false;
                 this.filtroPorNombreBoolean = false;
                 this.filtroVigente = '';
                 sessionStorage.clear()
            }
    }
    }
</script>

<style>

</style>
