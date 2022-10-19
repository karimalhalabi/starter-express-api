import express from 'express';

import { 
  getAllData,getElementById,deleteElement,updateElement,createElement
} from "../../controllers/amina/illnessController.js";

const illnessRouter = express.Router();
illnessRouter.get('/illness/all', getAllData);

illnessRouter.get('/illness/:id', getElementById);


/* GET users listing. */
illnessRouter.get('/illness', function(req, res, next) {
  res.send({
    data:[],
    element:{serial:2,firstName:"Amina",lastName:"AlSoosooo",email:"aminaalsoosoo@gmail.com",password:"amina01@AL"},
    message:4
  });
});

export default illnessRouter;
