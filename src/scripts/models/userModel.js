export default class UserModel {
    constructor() {
        this.data = [
            { id: 1, token: 'asdasd123qsdas21sf21e' },
            { id: 2, token: 'asdasd123qsasddas21sf21e' },
            { id: 3, token: 'asdasd12312asdsdas21sf21e' }
        ]
    }
    get() {
        return this.data;
    }
    addNewUser(newId, newToken) {
        var newUser = { id: newId, token: newToken }
        this.data.push(newUser);
    }
};