const { Bank } = require('./../../model')

const updateBank = async (req, res, _) => {
    const bank = await Bank.findByIdAndUpdate({ _id: req.params.bankId }, req.body, { new: true })
    return bank
        ? res.json({ status: 'success', code: 200, data: { bank } })
        : res.json({ status: 'error', code: 404, message: `Not found id ${req.params.bankId} !` })
}

module.exports = updateBank