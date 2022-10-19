import express from 'express';

import {
    serveAminaSite,
 } from "../../controllers/sites/sitesController.js";

const sitesRouter = express.Router();
sitesRouter.get('/amina',serveAminaSite);

export default sitesRouter;
