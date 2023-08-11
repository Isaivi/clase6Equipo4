import { useState } from "react"

function Form () {
    const[nombre, setNombre]=useState("")
    const[edad, setEdad]=useState("")
    const[pokemon, setPokemon]=useState("")


    function capturarNombre(e){
        setNombre(
            e.target.value
     
        )
       
     }
    function capturarEdad(e)  {  
        setEdad(
            e.target.value
        )
    }
    function capturarPokemon(e){ 
        setPokemon(
            e.target.value
        )
    }

    function registrar(e){
        e.preventDefault()
        console.log("Datos enviados" + nombre + edad + pokemon);
    }
    return(
        <form onSubmit={registrar}>
            <input type="text" placeholder="Nombre Usuario" onChange={capturarNombre}/>
            <input type="text" placeholder="Edad" onChange={capturarEdad}/>
            <input type="text" placeholder="Pokemon favorito" onChange={capturarPokemon}/>
            <button type="submit">Registrar</button>

        </form>
        
    )
    
}
export default Form