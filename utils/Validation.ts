interface StringValidator {
    isAcceptable(s: string): boolean;
}

export { StringValidator as Validator };