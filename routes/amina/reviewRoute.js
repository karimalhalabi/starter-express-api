import express from 'express';

import { 
  getAllData,getElementById,deleteElement,updateElement,createElement
} from "../../controllers/amina/reviewController.js"

const reviewRouter = express.Router();
reviewRouter.get('/review/all', getAllData);

reviewRouter.get('/review/:id', getElementById);


/* GET users listing. */
reviewRouter.get('/review', function(req, res, next) {
  res.send({
    data:[],
    element:{serial:2,firstName:"Amina",lastName:"AlSoosooo",email:"aminaalsoosoo@gmail.com",password:"amina01@AL"},
    message:4
  });
});

export default reviewRouter;


