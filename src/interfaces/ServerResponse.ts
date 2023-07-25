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
    user: object;
}