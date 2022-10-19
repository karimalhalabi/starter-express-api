import express from 'express';

import { 
  getAllData,getElementByEmail,deleteElement,updateElement,createElement
} from "../../controllers/users/usersController.js"

const usersRouter = express.Router();
usersRouter.get('/users/all', getAllData);

usersRouter.get('/users/:id', getElementByEmail);


/* GET users listing. */
usersRouter.get('/users', function(req, res, next) {
  res.send({
    data:[],
    element:{serial:2,firstName:"Amina",lastName:"AlSoosooo",email:"aminaalsoosoo@gmail.com",password:"amina01@AL"},
    message:4
  });
});
export default usersRouter;

