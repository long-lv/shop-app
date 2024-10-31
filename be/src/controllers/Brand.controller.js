class BrandController {
    // Lấy danh sách tất cả các brand
    list = async (req, res) => {
        res.status(200).json({
            message: "Lấy danh sách thương hiệu thành công"
        });
    };

    // Lấy thông tin chi tiết một brand dựa trên ID
    findById = async (req, res) => {
        res.status(200).json({
            message: "Lấy thông tin thương hiệu thành công",
            data: req.params.id ?? null
        });
    };

    // Thêm mới một brand
    insert = async (req, res) => {
        try {
            console.log(req.body); // Xem thông tin của brand mới
            res.status(200).json({
                message: "Thêm thương hiệu thành công"
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Đã xảy ra lỗi khi thêm thương hiệu"
            });
        }
    };

    // Cập nhật thông tin một brand dựa trên ID
    update = async (req, res) => {
        res.status(200).json({
            message: "Cập nhật thương hiệu thành công",
            data: req.params.id ?? null
        });
    };
    
    // Xóa một brand dựa trên ID
    delete = async (req, res) => {
        res.status(200).json({
            message: "Xóa thương hiệu thành công",
            data: req.params.id ?? null
        });
    };
}

module.exports = new BrandController();
