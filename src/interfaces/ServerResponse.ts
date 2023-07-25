export interface ServerResponse<T = any> {
    status: number;
    data: T;
}

export interface ResponseError {
    message: string;
    code: string;
    response?: ServerResponse;
}

export interface User {
    id? : number;
    index_number: number;
    name: string;
    phone: string;
    class: string;
    country: string;
    email_address?: string;
    date_of_birth?: string;
    already_exists?: boolean;
}

export interface IUserManager {
    user: User | null;
    storeUser(user: User): void;
}