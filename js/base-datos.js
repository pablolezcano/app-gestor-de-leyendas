var Datastore = require('nedb');

let bd = new Datastore({filename: 'db/legends.db', autoload: true});

exports.agregarLeyenda = function(leyendasTitulos, leyendasDescripcion){
    var leyenda1 = {
        leyendasTitulos: leyendasTitulos,
        leyendasDescripcion: leyendasDescripcion,
    };
    bd.insert(leyenda1, function(error, nuevoObjeto){
    });
};

exports.obtenerPersonas = function(operacion) {
    bd.find({}, function(error, personas){
        if(personas){
            operacion(personas);
        }
    });
};

exports.obtenerDescripcion = function(leyendasDescripcion){
    bd.findOne({leyendasDescripcion: leyendasDescripcion}, function(error, leyendasDescripcion){
        
    });
};

exports.eliminarPersona = function(id) {
    bd.remove({_id: id}, {}, function(error, numeroRegistrosEliminados){
        
    });
    
};
