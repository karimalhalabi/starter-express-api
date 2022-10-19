import express from 'express';
import { 
  getAllData,getElementById,deleteElement,updateElement,createElement
} from "../../controllers/amina/operationsController.js"

const operationsRouter = express.Router();
operationsRouter.get('/operations/all', getAllData);

operationsRouter.get('/operations/:id', getElementById);


/* GET users listing. */
operationsRouter.get('/operations', function(req, res, next) {
  res.send({
    data:[],
    element:{serial:2,firstName:"Amina",lastName:"AlSoosooo",email:"aminaalsoosoo@gmail.com",password:"amina01@AL"},
    message:4
  });
});
export default operationsRouter;