const empModel = require("../model/empModel");
const displayEmp = async (req,resp) =>{
    try {
        const result = await empModel.find()
        resp.render("home",{result})
    } catch (error) {
        console.log(error);
    }
}
const addEmp = async (req,resp) =>{
    try {
        const {name,salary,dept} = req.body
        await empModel.create({name,salary,dept})
        resp.redirect("/")
    } catch (error) {
        console.log(error)
    }
}

const addForm  = (req,resp)=>{
    resp.render("addForm")
}

module.exports = {displayEmp, addEmp, addForm}
