const UnitModel= require('./../models/unit.model');
const {tryCatch}=require('./../utils/tryCatch')

exports.addUnit=tryCatch(
    async(req,res)=>{
        const unit=UnitModel(req.body);



      await  unit.save().then((response)=>{
        return res.status(200).send({
            "status":true,
            "message":"Access added successfully",
            "data":response

        })

      }).catch((error)=>{
        return res.status(400).send({
            "status":false,
            "message":"Invalid data",
            "data":error
        })

      })
    
        
    }
)
exports.fetchAllAccess=tryCatch(async(req,res)=>{
  await UnitModel.find({},{_id:0}).lean().then((response)=>{
    return res.status(200).json({
      success: true,
      message: "Data fatch successfully",
      data: response,
  })


  }).catch((error)=>{
    return res.status(400).send({
      "status":false,
      "message":"Invalid data",
      "data":error
  })
  })

})
exports.updateAccess=tryCatch(async(req,res)=>{
  const acccessId=req.params.id;

  const filter={_id:acccessId};
  const options={new:true};
  const doc=req.body;
  const query= {
    $set:doc
  }

  await UnitModel.findByIdAndUpdate(filter,query,options).then((response)=>{
    return res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: response,
  })


  }).catch((error)=>{
    return res.status(400).send({
      "status":false,
      "message":"Invalid data",
      "data":error
  })
  })

})
