const { body } = require("express-validator");
const { MessageNoConstant } = require("../utils/messageConstan");

exports.CategoryValidator = [
    body('name').notEmpty().withMessage(MessageNoConstant.MSG_NO_4000(__("category"))),
    body('name').isLength({min: 3}).withMessage(MessageNoConstant.MSG_NO_4001(3)),
    body('name').isLength({max: 60}).withMessage(MessageNoConstant.MSG_NO_4002(60)),
] 