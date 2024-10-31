const BaseService = require('./Base.service');
/**
 * 
 * const Category = require('../models'): Category nhận toàn bộ đối tượng db, không phải một model, gây ra lỗi vì đối tượng db không có phương thức create.
 * const { Category } = require('../models'): Category nhận đúng model Category, giúp CategoryService kế thừa các phương thức của Sequelize và hoạt động bình thường.
 */
const { Category } = require('../models');
const { SEQUELIZEERR } = require('../utils/gyomuConstant');

class CategoryService extends BaseService {
    constructor() {
        super(Category);
    }

    async create(data) {
        try{
            const result = await this.created(data);
            return result;
        } catch (err) {
            if (err.name === SEQUELIZEERR) {
                const errorMessage = err.errors[0].message;
                throw new Error(errorMessage);
            } else {
                throw err;
            }
        }
    }
}

module.exports = new CategoryService();
