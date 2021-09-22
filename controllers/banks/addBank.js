const { Bank } = require('./../../model')

const addBank = async (req, res, __) => {
    const newBank = { ...req.body}
    const bank = await Bank.create(newBank)
    res.status(201).json({ bank })
}

module.exports = addBank
