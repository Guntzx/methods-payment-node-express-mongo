export const Data = async (req, res, next) => {
    try {
        const data = req.body || req.query

        const verify = Object.values(data)

        if(verify.includes('')) {
            return res.status(400).end()
        } 

        req.body = data
        next()
    } catch (e) {
        console.error(e)
        next(e)
    }
}