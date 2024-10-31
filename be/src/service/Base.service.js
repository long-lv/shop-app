class BaseService {
    constructor(model){
        this.model = model;
    }
    
    async list({keyword= "", sort= "asc"}) {
        
        return await this.model.findAll();
    }

    async findById(id) {
        return await this.model.findByPk(id);
    }

    async created(data) {
        return await this.model.create(data);
    }

    async updated(id, data) {
        const item = await this.findById(id);
        if (item) {
            await item.update(data);
            return item;
        }
        return null;
    }

    async destroyed(id) {
        const item = await this.findById(id);
        if (item) {
            await item.update(data);
            return true;
        }
        return false;
    }
}

module.exports = BaseService;