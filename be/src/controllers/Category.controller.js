const { isEmpty } = require("lodash");
const categoryService = require("../service/Category.service");
const { MessageNoConstant } = require("../utils/messageConstan");
const { responseError, responseSuccess, validateResult } = require("../utils/utils");
const { CategoryValidator } = require("../validator/category.validator");
class CategoryController {
    // Lấy danh sách tất cả các category
    list = async (req, res) => {
        console.log(req,'parmas');
        const { keyword, sort } = req.query;
        const categories = await categoryService.list({ keyword, sort });
        res.status(200).json({
            message: "Lấy danh sách danh mục thành công"
        });
    };

    // Lấy thông tin chi tiết một category dựa trên ID
    findById = async (req, res) => {
        res.status(200).json({
            message: "Lấy thông tin danh mục thành công",
            data: req.params.id ?? null
        });
    };

    // Thêm mới một category
    insert = async (req, res) => {
        const isValidator = await validateResult(CategoryValidator, req);
        if (!isEmpty(isValidator)) {
            return responseError({res, error: isValidator, message: MessageNoConstant.MSG_NO_4007})
        }
        const category = await categoryService.create(req.body);
        if (category) {
            return responseSuccess({res, message: MessageNoConstant.MSG_NO_0007(__('category')), data: category});
        }
        return responseError({res, error: error.message})
    };

    // Cập nhật thông tin một category dựa trên ID
    update = async (req, res) => {
        res.status(200).json({
            message: "Cập nhật danh mục thành công",
            data: req.params.id ?? null
        });
    };
    
    // Xóa một category dựa trên ID
    delete = async (req, res) => {
        res.status(200).json({
            message: "Xóa danh mục thành công",
            data: req.params.id ?? null
        });
    };
}

module.exports = new CategoryController();
