// Importing winston logger
import log from '../config/winston';

// Usando el patrón Factory para la creación de un middelware de validación
// lo que sigue es una función que regresa una función
const Validator =
  ({ schema, getObject }) =>
  async (req, _, next) => {
    // Construyendo el objeto de validación
    const dataObject = getObject(req);
    // El proceso de validación se encierra en un bloque try
    try {
      // Se valida el objeto
      log.info(`Inicia la validación de Project: ${typeof schema}`);
      const validData = await schema.validate(dataObject, {
        abortEarly: false,
      });
      log.info('Pasa la validación de Project');
      // Se inyecta el objeto validado en la petición
      req.validData = validData;
    } catch (error) {
      log.info(`Falla la validación de Project: ${error}`);
      // Creando objeto de validación
      req.errorData = error;
    }
    // Se invoca al siguiente middleware de la cadena
    return next();
  };
// Exportando validador
export default Validator;
