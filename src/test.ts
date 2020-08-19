export function getRandomInteger(max: number) {
    const res = Math.floor(Math.random() * max);
    return res;
}

function call<ArgumentsType extends any[], ReturnType>(
    functionToCall: (...args: ArgumentsType) => ReturnType,
    ...args: ArgumentsType
): ReturnType {
    return functionToCall(...args);
}

const randomNumber = call(getRandomInteger, 100);

// type FunctionReturnType<ReturnType, FunctionType extends (...args: any) => ReturnType> = ReturnType;

type FunctionReturnType<
    FunctionType extends (args: any) => any
> = FunctionType extends (...args: any) => infer T ? T : any;

type T = FunctionReturnType<typeof getRandomInteger>;
type Test<T> = T extends string ? string : number;

// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type F = ReturnType<typeof getRandomInteger>;

type Ttt<T> = T extends { a: infer U } ? U : never;

type Tut = Ttt<string>;
