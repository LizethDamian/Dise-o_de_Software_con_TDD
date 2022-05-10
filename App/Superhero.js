class Superhero {

    constructor(name, age, actor, peliculas, estudio) {
        this.name = name
        this.age = age
        this.actor = actor
        this.peliculas = peliculas
        this.estudio = estudio
    }
    getInfo() {
        return `Nombre: ${this.name} Estudio: ${this.estudio}`
    }
}

module.exports = Superhero