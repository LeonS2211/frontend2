let horarios = []

const save = (horario) => {
    horarios.push(horario)
}

const getAll = () => {
    return horarios;
}

const HorarioApi = {save, getAll}

export default HorarioApi