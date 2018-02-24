export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

// Export original validator but rename it = RE-EXPORT
export { ZipCodeValidator as RegExBasedZipCodeValidator } from './ZipCodeValidator'