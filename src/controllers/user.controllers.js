const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.status(200).json(users);
});

const create = catchError(async(req,res) => {
    const { nombre, apellido } = req.body;
    const user = await User.create({
        nombre: nombre,
        apellido: apellido,
    });
    return res.status(201).json(user)
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    //const user = await User.findOne({ where: { id: 2 } })
    const user = await User.findByPk(id);
    return res.status(200).json(user);

});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id: id } });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { nombre, apellido } = req.body;
    const user = await User.update({
        nombre: nombre,
        apellido: apellido
    }, { where: { id: id }, returning: true })
    return res.json(user)
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}