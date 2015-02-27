var ejecutar = require('cordova/exec');

var invocarNativo = function(exito, fracaso) {      
    ejecutar(exito, fracaso, 'infotelefonoplugin',          // exito y fracaso son los callback q tendra la funcion del plugin
            'GET_IDENTIFICAION', []);                       //hay q pasar el [] sino da error
}

var plugin = {};
plugin.obtenerInformacion = invocarNativo;

module.exports = plugin;                                    //es el return del modulo, plugin no se va a poder utilizar fuera de este modulo

// Depues phonegap mete todo esto en una function con module y required de parametros function(module, required)