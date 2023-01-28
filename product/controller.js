const Product = require('./model');

//============== Read ================
const index = async (req, res, next) => {
    try {
        let { skip = 0, limit = 10, q = '' } = req.query;
        let criteria = {};

        if(q.length){
            criteria = {
                ...criteria,
                name: {$regex: `${q}`, $options: 'i'}
            }
        }

        let count = await Product.find().countDocuments();

        let product = await Product
        .find(criteria)
        .skip(parseInt(skip))
        .limit(parseInt(limit))
        .populate('category')
        .populate('tags');
        return res.json({
            data: product,
            count
        });
    } catch (err) {
        console.log(err);
        next(err);

    }
}

module.exports = {
    index
}