const _ = require("lodash");
const { validationResult } = require("express-validator");
const httpStatusCode = require("./httpStatusCode");
/**  
* chỉ định các field sẽ được trả ra trong 1 list 
* vd : user = {id, name, password} => data : {id, name}
*/
const getInfoData = ({ fields = [], object = {}}) => {
    return _.pick(object, fields);
}

/** kiểm tra xem request có lỗi validated không, trả về rỗng nếu k có lỗi */
const validateResult = async (validateFun, req) => {
    if (Array.isArray(validateFun)){
        await Promise.all(validateFun.map(( validation ) => validation.run(req)))
    } else {
        await validateFun.run(req);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors.array();
    }
    return [];
}

/** format res succsess */
const responseSuccess = ({res, message, data = null, code = httpStatusCode.StatusCodes.OK}) => {
    return res.status(code).json({
        code,
        message,
        data,
    })
}

/** format res error */
const responseError = ({res, message, error, code = httpStatusCode.StatusCodes.BAD_REQUEST}) => {
    return res.status(code).json({
        code,
        message,
        error: error ?? null
    })
}

module.exports = {
    getInfoData,
    validateResult,
    responseSuccess,
    responseError
}