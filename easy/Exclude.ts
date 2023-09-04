type Result<T, U extends keyof T> = T extends U ? never : T;
