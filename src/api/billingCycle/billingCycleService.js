const BillingCicle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

// BillingCicle.methods(['get', 'POST' , 'PUT', 'DELETE'])
BillingCicle.methods(['get', 'post', 'put', 'delete'])
BillingCicle.updateOptions({ new: true, runValidators: true })
BillingCicle.after('post', errorHandler).after('put', errorHandler)

BillingCicle.route('count', (req, res, next) => {
    BillingCicle.count((error, value) => {
        if(error){
            res.status(500).json({errors:[error]})
        }
        else{
            res.json({value})
        }
    })
})


BillingCicle.route('summary', (req, res, next) => {
    BillingCicle.aggregate().project({
        //projeção da consulta
        $project: {credit: {$sum: "$credits.value"}, depts: {$sum: "$depts.value"}}
    }, {
        //Agrupamento: _id é obrigatório
        $group: { _id: null, credit:{$sum: "$credit"}, depts:{$sum: "$depts"}}
    },{
        //Apresentação: 1 = true, 0 = false
        $project: {_id: 0, credit: 1, depts: 1}
    }, (error, result)=>{
            if(error){
                //Caso ouver erro
                res.status(500).json({errors:[error]})
            }
            else{
                //resultado da agrupamento
                res.json(result[0] || { credit: 0, depts: 0})
            }
        }
    )
})



module.exports = BillingCicle