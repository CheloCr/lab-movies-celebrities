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
    .catch(error=>{console.log("ERROR EN: /celebrities/create", error)})


   
})

module.exports = router