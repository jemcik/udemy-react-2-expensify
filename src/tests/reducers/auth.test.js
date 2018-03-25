import authReducer from '../../reducers/auth';

test('default', () => {
    const state = authReducer(undefined, { type: '' });
    expect(state).toEqual({});
});


test('login', () => {
    const uid = 'qqq123';
    const state = authReducer(undefined, { type: 'LOGIN', uid: uid });

    expect(state.uid).toBe(uid);
});

test('login', () => {
    const state = authReducer({ uid: 'qqq123' }, { type: 'LOGOUT' });
    expect(state).toEqual({});
});
