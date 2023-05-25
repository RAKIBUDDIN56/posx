const mongooose= require('mongoose')

const unitSchema=mongooose.Schema({
    "unit_name":{type:String,required:[true,"Unit name is required"]},
    "createdOn":{type:Date},
    "updatedOn":{type:Date}

})

unitSchema.pre('save',async function (next){
    this.createdOn=new Date();
    this.updatedOn=new Date();
    next();

})

const UnitModel=mongooose.model('units',unitSchema);

module.exports=UnitModel;