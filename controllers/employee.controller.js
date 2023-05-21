const EmployeeModel=require('./../models/employee.model')

exports.addEmployee=async (req,res)=>{
    console.log(req.body);
const employee=new EmployeeModel(req.body);
employee.save().then(()=>{
    return res.send({
        "success":true,
        "data":req.body});

}).catch((e)=>{
    return res.send({
        "success":false,
        "data":e});

    
})

}


