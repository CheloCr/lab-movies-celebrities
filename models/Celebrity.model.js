//  Add your code here
//todo IMPOTAMOS MONGOOSE
const {Schema,model, SchemaType, default: mongoose} = require("mongoose")


//todo CREAMOS SCHEMA

const celebritySchema = new Schema ({
    name: String,
    occupation:String,
    catchPhrase:String
})

//todo SE CREA MODELO
const Celebrity = mongoose.model('Celebrities',celebritySchema)

//todo EXPORTAMOS MODELO
module.exports = Celebrity


//? version corta para crear y exporta
//? model.exports = model("Celebrities",celebritySchema)