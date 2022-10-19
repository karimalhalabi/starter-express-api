import express from'express';

import { 
  getAllData,getElementById,deleteElement,updateElement,createElement
} from "../../controllers/amina/diagnoAnalysisController.js";

const diagnoAnalysisRouter = express.Router();
diagnoAnalysisRouter.get('/diagnoanalysis/all', getAllData);

diagnoAnalysisRouter.get('/diagnoanalysis/:id', getElementById);


/* GET users listing. */
diagnoAnalysisRouter.get('/diagnoanalysis', function(req, res, next) {
  res.send({
    data:[],
    element:{serial:2,firstName:"Amina",lastName:"AlSoosooo",email:"aminaalsoosoo@gmail.com",password:"amina01@AL"},
    message:4
  });
});

export default diagnoAnalysisRouter;
