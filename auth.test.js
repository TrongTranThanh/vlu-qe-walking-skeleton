const { login } = require('./auth');

describe('Kiểm tra hàm đăng nhập login()', () => {

    test('Trả về true khi username là "admin" và password là "123"', () => {
        expect(login('admin', '123')).toBe(true);
    });

    test('Trả về false khi sai username', () => {
        expect(login('user_khac', '123')).toBe(false);
    });

    test('Trả về false khi sai password', () => {
        expect(login('admin', 'sai_mat_khau')).toBe(false);
    });

    test('Trả về false khi cả username và password đều sai', () => {
        expect(login('wrong_user', 'wrong_pass')).toBe(false);
    });

    test('Trả về false khi dữ liệu đầu vào rỗng', () => {
        expect(login('', '')).toBe(false);
    });

});
