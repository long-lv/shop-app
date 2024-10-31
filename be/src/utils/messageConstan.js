const MessageNoConstant = {
    // Thông báo thành công chung với trạng thái động
    MSG_NO_0001: (status) => __('MSG_NO_0001', { status }),

    // Thông báo không thành công chung với trạng thái động
    MSG_NO_0002: (status) => __('MSG_NO_0002', { status }),

    // Thông báo lấy danh sách thành công cho một mục cụ thể
    MSG_NO_0003: (name) => __('MSG_NO_0003', { name }),

    // Thông báo không lấy được danh sách cho một mục cụ thể
    MSG_NO_0004: (name) => __('MSG_NO_0004', { name }),

    // Thông báo lấy thông tin thành công cho một mục cụ thể
    MSG_NO_0005: (name) => __('MSG_NO_0005', { name }),

    // Thông báo không lấy được thông tin cho một mục cụ thể
    MSG_NO_0006: (name) => __('MSG_NO_0006', { name }),

    // Thông báo tạo mới thành công cho một mục cụ thể
    MSG_NO_0007: (name) => __('MSG_NO_0007', { name }),

    // Validator: Thông báo một trường không được để trống
    MSG_NO_4000: (field) => __('MSG_NO_4000', { field }),

    // Validator: Thông báo yêu cầu độ dài tối thiểu
    MSG_NO_4001: (min) => __('MSG_NO_4001', { min }),

    // Validator: Thông báo giới hạn độ dài tối đa
    MSG_NO_4002: (max) => __('MSG_NO_4002', { max }),

    // Validator: Thông báo yêu cầu một trường là số lớn hơn 0
    MSG_NO_4003: (field) => __('MSG_NO_4003', { field }),

    // Validator: Thông báo định dạng không hợp lệ
    MSG_NO_4004: (field) => __('MSG_NO_4004', { field }),

    // Validator: Thông báo yêu cầu một giá trị phải lớn hơn giá trị tối thiểu
    MSG_NO_4005: (field, min) => __('MSG_NO_4005', { field, min }),

    // Validator: Thông báo yêu cầu một giá trị phải nhỏ hơn giá trị tối đa
    MSG_NO_4006: (field, max) => __('MSG_NO_4006', { field, max }),

    // Thông báo có lỗi validator
    MSG_NO_4007: () => __('MSG_NO_4007')
};

module.exports = {
    MessageNoConstant
};
