var Datastore = require('nedb');

let bd = new Datastore({filename: 'db/legends.db', autoload: true});

exports.agregarPersona = function(nombres, apellidos){
    var persona = {
        nombres: nombres,
        apellidos: apellidos,
    };
    bd.insert(persona, function(error, nuevoObjeto){
    });
};

exports.obtenerPersonas = function(operacion) {
    bd.find({}, function(error, personas){
        if(personas){
            operacion(personas);
        }
    });
};

exports.obtenerDescripcion = function(apellidos){
    bd.findOne({apellidos: apellidos}, function(error, apellidos){
        
    });
};

exports.eliminarPersona = function(id) {
    bd.remove({_id: id}, {}, function(error, numeroRegistrosEliminados){
        
    });
    
};
