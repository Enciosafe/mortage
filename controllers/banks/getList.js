const { Bank } = require('./../../model')

const getList = async (req, res, _) => {
    const result = await Bank.find({})
    res.json({
        status: 'success',
        code: 200,
        data: result
    })
}

module.exports = getList
