const { Bank } = require('./../../model')

const deleteBank = async (req, res, __) => {
    const bank = await Bank.findByIdAndDelete({ _id: req.params.bankId })
    return bank
        ? res.json({ status: 'success', code: 200, data: { bank } })
        : res.json({ status: 'error', code: 404, message: `Not found id ${req.params.bankId} !` })
}

module.exports = deleteBank