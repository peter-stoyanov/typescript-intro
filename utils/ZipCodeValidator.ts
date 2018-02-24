import { Validator } from "./validation";

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements Validator {
    isAcceptable(s: string) {
        s = trimUtil(s);
        return s.length === 5 && numberRegexp.test(s);
    }
}