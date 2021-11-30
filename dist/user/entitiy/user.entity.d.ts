export declare class User {
    userNo: number;
    id: string;
    password: string;
    hashPassword(): Promise<void>;
    checkPassword(checkPassword: string): Promise<boolean>;
}
