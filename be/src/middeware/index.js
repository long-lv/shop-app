const i18n = require("../config/i18n");
const { responseError } = require("../utils/utils");
const setLang = ((req, res, next) => {
    const lang = req.query.lang || req.headers['accept-language'];
    i18n.setLocale(req, lang);
    next();
});

const asyncHandle = (fn) => {
    return async (req, res, next) => {
        try{
            await fn(req, res, next);
        }catch(error){
            responseError({res, error: error?.message})
            next(error);
        }
    }
}

module.exports = {
    setLang,
    asyncHandle
}