
let notes= {
    "Nota1":{titulo:'T-Nota-1',
            contenido:'Hola soy una nota',
            completada: false},
    "Nota2":{titulo:'T-Nota-2',
            contenido:'Hola soy otra nota',
            completada: false},
    "Nota3":{titulo:'T-Nota-3',
            contenido:'Hola soy otra otra nota',
            completada: false},
}


export const getNotes = async ()=>{
    //Sacar data del server:
    /*const res = await fetch('heroku o algo asi');
    await res.json();*/

    //Temporalmente para prueba:
    return notes;
}