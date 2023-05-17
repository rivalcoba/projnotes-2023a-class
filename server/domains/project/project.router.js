// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectController from './project.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET "/project"
router.get('/', projectController.showDashboard);

// GET "/project/add"
router.get('/add', projectController.add);

// Exporto este tramo de ruta
export default router;
