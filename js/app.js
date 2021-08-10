const baseDatos = require('./js/base-datos');
const BrowserWindow = require('electron').remote.BrowserWindow;
const electron = require('electron'); 


const path = require('path');

 class GestorLeyendas {

    constructor(){
    
        this.frmNuevoRegistro = document.getElementById('frmNuevoRegistro');
        this.registros = document.getElementById('registros');
        this.leyendasTitulos = document.getElementById('leyendasTitulos');
        this.leyendasDescripcion = document.getElementById('leyendasDescripcion');
        this.btnCrearRegistro = document.getElementById('btnCrearRegistro');
 
        this.cargarRegistrosPersona();
        this.agregarEventListeners();

    }

    
    agregarEventListeners(){
        this.frmNuevoRegistro.addEventListener('submit', this.crearRegistroPersona.bind(this));
    }

    crearRegistroPersona(evento) {
        evento.preventDefault();
        baseDatos.agregarLeyenda(this.leyendasTitulos.value, this.leyendasDescripcion.value);

        this.leyendasTitulos.value = '';
        this.leyendasDescripcion.value = '';
        this.cargarRegistrosPersona();

    }

    generarHtmlRegistroPersona(leyenda1){
        return `
    <div class="card card-body my-2 animated">
        <h4>${leyenda1.leyendasTitulos}</h4>
        <div id="media-print">
            <p id="${leyenda1._id}">${leyenda1.leyendasDescripcion}</p>
        </div>
        <p>
            <button class="btn btn-danger" onclick="gestorLeyendas.eliminarRegistroPersona('${leyenda1._id}');">
                Borrar
            </button>
            <button class="btn btn-success" onclick="printContent('${leyenda1._id}')">
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
