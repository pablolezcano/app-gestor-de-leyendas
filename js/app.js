const baseDatos = require('./js/base-datos');
const BrowserWindow = require('electron').remote.BrowserWindow;
const electron = require('electron'); 


const path = require('path');

 class GestorLeyendas {

    constructor(){
    
        this.frmNuevoRegistro = document.getElementById('frmNuevoRegistro');
        this.registros = document.getElementById('registros');
        this.nombres = document.getElementById('nombres');
        this.apellidos = document.getElementById('apellidos');
        this.btnCrearRegistro = document.getElementById('btnCrearRegistro');
 
        this.cargarRegistrosPersona();
        this.agregarEventListeners();

    }

    
    agregarEventListeners(){
        this.frmNuevoRegistro.addEventListener('submit', this.crearRegistroPersona.bind(this));
    }

    crearRegistroPersona(evento) {
        evento.preventDefault();
        baseDatos.agregarPersona(this.nombres.value, this.apellidos.value);

        this.nombres.value = '';
        this.apellidos.value = '';
        this.cargarRegistrosPersona();

    }

    generarHtmlRegistroPersona(persona){
        return `
    <div class="card card-body my-2 animated">
        <h4>${persona.nombres}</h4>
        <div id="media-print">
            <p id="${persona._id}">${persona.apellidos}</p>
        </div>
        <p>
            <button class="btn btn-danger" onclick="gestorLeyendas.eliminarRegistroPersona('${persona._id}');">
                Borrar
            </button>
            <button class="btn btn-success" onclick="printContent('${persona._id}')">
                Imprimir
            </button>
        </p>      
    </div>
    `;
    }
    
    cargarRegistrosPersona(){
        baseDatos.obtenerPersonas((personas) => {
            let html = personas.map(this.generarHtmlRegistroPersona).join('');
            this.registros.innerHTML = html;
        });
    }

    eliminarRegistroPersona(id) {
        const response = confirm('¿Estas seguro de querer eliminarlo?')
        if (response) {
        baseDatos.eliminarPersona(id);
        this.cargarRegistrosPersona();
        }
        return;
    }
}

let gestorLeyendas = new GestorLeyendas();
