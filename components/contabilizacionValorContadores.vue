<template>
<div class="contenedor_contabilizacion" >
Suma contadores:  {{ Contadores }}


</div>

</template>

<style scoped>
.contenedor_contabilizacion{
padding:1em;
}

</style>

<script>
export default {

        
        computed:{
            Contadores(){
                // let contadoresManipulables = [...this.$store.state.contador]
                let contadores  = this.$store.state.contador;
                let contador = 0;
                contadores.forEach(element => {
                    contador += element.numeroContador;
                });
                return contador;
            }
        },
            methods:{


        }
}
</script>