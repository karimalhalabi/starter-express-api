import express from 'express';

import { 
  getAllData,getElementById,deleteElement,updateElement,createElement
} from "../../controllers/amina/imagesReportController.js";

const imagesreportRouter = express.Router();
imagesreportRouter.get('/imagesreport/all', getAllData);

imagesreportRouter.get('/imagesreport/:id', getElementById);


/* GET users listing. */
imagesreportRouter.get('/imagesreport', function(req, res, next) {
  res.send({
    data:[],
    element:{serial:2,firstName:"Amina",lastName:"AlSoosooo",email:"aminaalsoosoo@gmail.com",password:"amina01@AL"},
    message:4
  });
});
export default imagesreportRouter;

