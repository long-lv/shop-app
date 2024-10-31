class ProductController {
    list = async (req, res) => {
        res.status(200).json({
            message: "lấy danh sách sản phẩm thành công"
        })
    }

    findById = async (req, res) => {
        res.status(200).json({
            message: "Lấy thông tin sản phẩm thành công",
            data: req.params.id ?? null
        })
    }

    insert = async (req, res) => {
        try {
            await db.Product.create();
            res.status(200).json({
                message: "them sản phẩm thành công"
            })
        } catch (err) {
            console.log(err)
        }
    }

    update = async (req, res) => {
        res.status(200).json({
            message: "Update sản phẩm thành công",
            data: req.params.id ?? null
        })
    }
    
    delete = async (req, res) => {
        res.status(200).json({
            message: "delete sản phẩm thành công",
            data: req.params.id ?? null
        })
    }
}

module.exports = new ProductController();