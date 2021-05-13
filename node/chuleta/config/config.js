// configuramos la variable de entorno "port"
//para que coja una ya existente o la asigne al 3000 si no existe 

process.env.PORT = process.env.PORT || 3000; 