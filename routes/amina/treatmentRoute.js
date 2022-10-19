import express from 'express';

import { 
  getAllData,getElementById,deleteElement,updateElement,createElement
} from "../../controllers/amina/treatmentController.js"

const treatmentRouter = express.Router();
treatmentRouter.get('/treatment/all', getAllData);

treatmentRouter.get('/treatment/:id', getElementById);


/* GET users listing. */
treatmentRouter.get('/treatment', function(req, res, next) {
  res.send({
    data:[],
    element:{serial:2,firstName:"Amina",lastName:"AlSoosooo",email:"aminaalsoosoo@gmail.com",password:"amina01@AL"},
    message:4
  });
});
export default treatmentRouter;