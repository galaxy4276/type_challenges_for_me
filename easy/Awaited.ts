type ExampleType = Promise<string>;

type MyAwaited<T extends Promise<any>> = T extends Promise<infer R> ? R extends Promise<any> ? MyAwaited<R> : R : never;

type Result = MyAwaited<ExampleType>; // string

