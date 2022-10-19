import express from "express";

import { 
  getAllData,getElementById,deleteElement,updateElement,createElement
} from "../../controllers/amina/infoController.js";

const infoRouter = express.Router();
infoRouter.get("/info/all", getAllData);

infoRouter.get("/info/:id", getElementById);

/* GET users listing. */
infoRouter.get("/i", function (req, res, next) {
  res.send('<h1>Hello form info</h1>');
});


infoRouter.get("/info", function (req, res, next) {
  res.send({
    data: [],
    element: {
      serial: 2,
      firstName: "Amina",
      lastName: "AlSoosooo",
      email: "aminaalsoosoo@gmail.com",
      password: "amina01@AL",
    },
    message: 4,
  });
});
export default infoRouter;
