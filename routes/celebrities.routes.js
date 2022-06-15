const router = require("express").Router();

//todo IMPORTAMOS MODELO
const Celebrity = require("../models/Celebrity.model")



router.get('/celebrities/create', (req, res, next) => {
    res.render('celebrities/new-celebrity')
})

router.post("/celebrities/create",(req,res,next)=>{
    //destructuramos paa agregar new celebrity
    Celebrity.create(req.body)
    .then(()=>{
        res.redirect("/celebrities")
    })
    .catch(error=>{
        console.log("ERROR EN: /celebrities/create", error)
        res.render("celebrities/new-celebrity")
    })
})

router.get("/celebrities", (req,res,next) => {
    Celebrity.find()
    .then( (celebrity) => {
        res.render("celebrities/celebrities",{celebrity})
    })
    .catch(error => {console.log("ERROR EN: /celebrities",error)})

})

module.exports = router