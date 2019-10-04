const mongoose = require('mongoose')

mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "O atributo '{PATH} é obrigatório."
mongoose.Error.messages.Number.min = "O '{PATH}' informado é menor que o valor mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{PATH}' informado é maior que o valor máximo de '{MAX}'."
mongoose.Error.messages.String.enum = " '{VALUE}' não é válido para o atributo '{PATH}'."
