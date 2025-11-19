//clase Tarea
class Tarea {
    //constructor
    constructor(titulo){
        this.id = Date.now();
        this.titulo = titulo;
        this.completado = false;
        const ID = new Date();
    }

    //Metodo para completar tarea
    marcarCompletada(){
        this.completado = true;
    }
}

//Clase Agenda para gestionar tareas Array y POO
class Agenda {
    #tareas = []; //Array privado para almacenar objetos

    //Metodo para agregar tarea
    agregar(titulo){
        const nuevaTarea = new Tarea(titulo)
        this.#tareas.push(nuevaTarea);
        Agenda.TAREAS_TOTALES++;
        return nuevaTarea;
    }
}