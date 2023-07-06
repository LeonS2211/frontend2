let AllcitasAc =
[
    {nombre: "Ana Castor", titulo: "Magister PCH", fecha: "23/04/2023 12:00 Am", curso: "Programación Web", link: "#"},
    {nombre: "Percy cholca", titulo: "Magister PCH", fecha: "23/04/2023 12:00 Am", curso: "Programación Web", link: "#"}

]

const save = (citasAc) => {
    AllcitasAc.push(citasAc)
}

const getAll = () => {
    return AllcitasAc;
}

const AllcitasAcAPI = {save, getAll}

export default AllcitasAcAPI