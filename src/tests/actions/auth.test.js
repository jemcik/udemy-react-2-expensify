import { login, logout } from '../../actions/auth';

test('login', () => {
    const uid = 'qqq123';
    const action = login(uid);

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('logout', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT',
    });
});
