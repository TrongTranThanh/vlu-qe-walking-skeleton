/**
 * Kiểm tra thông tin đăng nhập.
 * @param {string} username - Tên đăng nhập
 * @param {string} password - Mật khẩu
 * @returns {boolean} - Trả về true nếu hợp lệ, ngược lại false
 */
function login(username, password) {
    if (username === 'admin' && password === '123') {
        return true;
    }
    return false;
}

// Hỗ trợ xuất hàm (Export) cho môi trường Node.js / Jest
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { login };
}
