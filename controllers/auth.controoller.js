const AuthModel =require('./../models/auth.model')

exports.login=async (req,res)=>{
    console.log(req.body);
    try{
        const username=req.body.username;
    const password=req.body.password;
    const roll=req.body.roll;

    if(username ==undefined || password==undefined||roll==undefined){
        return res.status(400).send({"success":false,"message":"All fields are required"})
    }
   

    const isAuthenticated= await AuthModel.findOne({username});
    console.log(isAuthenticated);
    if(isAuthenticated){
        return res.send({"success":true,"data":isAuthenticated});
    }else{
        return res.status(400).send({"success":false,"message":"Authentication failed"});

    }
    }catch(error){
        console.log(error);
    }
}