/* export const state = ()=>({
    contador1:'holaa',
    contador2:0,
    contador3:0,
    contador4:0,
    contador5:0,
    contador6:0,
    contador7:0,
    contador8:0,
    contador9:0,
    contador10:0,
    contador11:0,
    contador12:0,
    contador13:0,
    contador14:0,
    contador15:0,
    contador16:0,
    contador17:0,
    contador18:0,
    contador19:0,
    contador20:0,
    cantidadContadoresCreados:0
})

export const getters = () => ({
    leerContador(state){
        console.log("HOLA")
        return state.contador1
    }
})

export const mutations = () => ({
    increment(state){
        state.contador2++;
    },

    leerDinamicamente(state,nombreContador){
        console.log(state[nombreContador])
        return state[nombreContador];
    },

}) */

/* export const actions = () => ({
    leer(context){
        context.commit('increment','contador2')
    }
}) */
export const state = () => ({
	contador: [],
    preferencias: {}
})
export const getters = () => ({
    leerContador(state){
        
        return state.contador
    },
    contabilizacion_contadores(state){
            let contador = 0;
            state.contador.forEach(element => {
               contador += element.numeroContador;
            });

            return contador;

    }
})
export const mutations = {
    GUARDAR_PREFERENCIAS_STATE(state, preferencias){
        state.preferencias = preferencias;
    },
    CREAR_DESDE_LOCALSTORAGE(state){
        state.contador = JSON.parse(localStorage.getItem('Contador'))
    },
	CREAR_CONTADOR(state, nombre) {

        if(state.contador.length < 21){
            state.contador = [{ nombre, numeroContador: 0 }, ...state.contador];
            localStorage.setItem( 'Contador', JSON.stringify(state.contador))
        }

	},
	ELIMINAR_CONTADOR(state, indiceContador) {
		state.contador.splice(state.contador.indexOf(indiceContador), 1);
        localStorage.setItem( 'Contador', JSON.stringify(state.contador))
	},
    SUMAR_CONTADOR(state,indiceContador){
        console.log(state.contador.indexOf(indiceContador))

        if(state.contador[state.contador.indexOf(indiceContador)].numeroContador < 20){
            state.contador[state.contador.indexOf(indiceContador)].numeroContador++;
        }
        

        localStorage.setItem( 'Contador', JSON.stringify(state.contador))
    },
    RESTAR_CONTADOR(state,indiceContador){
        console.log(state.contador.indexOf(indiceContador))

        if(state.contador[state.contador.indexOf(indiceContador)].numeroContador > 0 ){
            state.contador[state.contador.indexOf(indiceContador)].numeroContador--;
        }

        localStorage.setItem( 'Contador', JSON.stringify(state.contador))
    },

    ORDENAR_ALFABETICAMENTE_AZ(state) {
        state.contador.sort(function (a, b) {
            if (a.nombre > b.nombre) {
                return 1;
            }
            if (a.nombre < b.nombre) {
                return -1;
            }
            // a must be equal to b
            return 0;
            });

            localStorage.setItem( 'Contador', JSON.stringify(state.contador))
        
	},

    ORDENAR_ALFABETICAMENTE_ZA(state) {
        state.contador.sort(function (a, b) {
            if (a.nombre > b.nombre) {
                return -1;
            }
            if (a.nombre < b.nombre) {
                return 1;
            }
            // a must be equal to b
            return 0;
            });
            localStorage.setItem( 'Contador', JSON.stringify(state.contador))
        
	},
    ORDENAR_POR_NUMEROCONTADOR_DESC(state) {
        state.contador.sort(function (a, b) {
            if (a.numeroContador > b.numeroContador) {
                return -1;
            }
            if (a.numeroContador < b.numeroContador) {
                return 1;
            }
            // a must be equal to b
            return 0;
            });
            localStorage.setItem( 'Contador', JSON.stringify(state.contador))
        
	},
    ORDENAR_POR_NUMEROCONTADOR_ASC(state) {
        state.contador.sort(function (a, b) {
            if (a.numeroContador  < b.numeroContador) {
                return -1;
            }
            if (a.numeroContador > b.numeroContador) {
                return 1;
            }
            // a must be equal to b
            return 0;
            });
            localStorage.setItem( 'Contador', JSON.stringify(state.contador))
        
	}
}