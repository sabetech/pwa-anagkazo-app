export interface ServerResponse<T> {
    data: T;
    success: boolean;
    message?: string;
}

export interface User {
    user: object;
}