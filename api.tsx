
let notes= [
    {
        descripcion: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        titulo: "Primer Item",
    },
    {
        descripcion: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        titulo: "Segundo Item",
    },
    {
        descripcion: "58694a0f-3da1-471f-bd96-145571e29d72",
        titulo: "Tercer Item",
    },
    {
        descripcion: "58694a0f-3da1-471f-bd96-145571e29d72",
        titulo: "Cuarto Item",
    },
    {
        descripcion: "58694a0f-3da1-471f-bd96-145571e29d72",
        titulo: "Quinto Item",
    },
    {
        descripcion: "58694a0f-3da1-471f-bd96-145571e29d72",
        titulo: "Sexto Item",
    },
    {
        descripcion: "58694a0f-3da1-471f-bd96-145571e29d72",
        titulo: "Septimo Item",
    },
    {
        descripcion: "58694a0f-3da1-471f-bd96-145571e29d72",
        titulo: "Octavo Item",
    },
  ];

export const getNotes = async ()=>{
    //Sacar data del server:
    /*const res = await fetch('heroku o algo asi');
    await res.json();*/

    //Temporalmente para prueba:
    return notes;
}