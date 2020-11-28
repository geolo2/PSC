var dataBase = {}
var cont = 0;
exports.create = function(req,res,next){
    let groupName = req.body.id
    dataBase[groupName] = {}
    res.status(200).send(`El grupo ${id} ha sido creado.`)
    next()
}

exports.join = function(req,res,next){
    cont++
    let groupName = req.body.id
    let memberName = req.body.name
    let phone = req.body.phone
    dataBase[groupName]["member"+cont] = { name: memberName, phone: phone }
    res.status(200).send(`Te acabas de unir al grupo ${groupName}`)
    next()    
}

exports.getMembers = function(req,res,next){
    let groupName = req.params.id
    res.status(200).send(dataBase[groupName])
    next() 
}
