export interface User {
    id: string;
    username: string;
}

export interface UserSchema {
    authData?: User;

    // флаг нельзя менять
    _inited: boolean;
}
