//todo IMPOTAMOS MONGOOSE
const {Schema,model, SchemaType, default: mongoose} = require("mongoose")


//todo CREAMOS SCHEMA

const movieSchema = new Schema ({
    title: String,
    genre:String,
    plot:String,
    cast:[{type: Schema.Types.ObjectId, ref : "Celebrity"}]

})

//todo SE CREA MODELO
const Movie = mongoose.model('Movies',movieSchema)

//todo EXPORTAMOS MODELO
module.exports = Movie


//? version corta para crear y exporta
//? model.exports = model("Celebrities",celebritySchema)