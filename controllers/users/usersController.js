import DB from "../../models/users/usersModel.js";


// message : 0 empty, 1 success alldata, 2 error , 3 success one element 

const getAllData = async (req, res) => {
    try {
        const allData = await DB.findAll();
        res.json({data:allData,element:allData[0],message:allData?'1':'0'});
    } catch (error) {
        res.json({data:[error], element:{} ,message: '2' });
    }
}

const getElementByEmail = async (req, res) => {
    try {
        const singleData = await DB.findAll({
            where: {
                email: req.params.email
            }
        });
        res.json({data: [], element:singleData[0], message:singleData[0]?'3':'0'});
    } catch (error) {
        res.json({ data:[error], element:{email: req.params.email} , message: '2'});
    }
}

export const createElement = async (req, res) => {
    try {
        await DB.create(req.body);
        const allData = await DB.findAll();
        res.json({data:allData, element: req.body, message:allData?'1':'0'});
    } catch (error) {
        res.json({ data:[], element: req.body,  message: '2'});
    }
}

export const updateElement = async (req, res) => {
    try {
        await DB.update(req.body, {
            where: {
                email: req.params.email
            }
        });
        console.log(req.body);
        const allData = await DB.findAll();
        res.json({data:allData, element:req.params.email, message:allData?'1':'0'});
    } catch (error) {
    res.json({ data:[], element:req.params.email, message: '2' });
    }
}

export const deleteElement = async (req, res) => {
    let err;
    try {
        await DB.destroy({
            where: {
                email: req.params.email
            }
        });
        const allData = await DB.findAll();
        res.json({data:allData, element:req.params.email, message:allData?'1':'0'});
    } catch (error) {
        res.json({ data:[], message: '2', element:req.params.email });
    }
}

export {getAllData,getElementByEmail};