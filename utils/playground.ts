// importing default export
import asdf from './JQuery'
// import a const value exported with default
import I_decideToCall_this_Whatever from './math_pi'

// import a barrel of re-exports
import { ParseIntBasedZipCodeValidator, ZipCodeValidator } from './AllValidators'
import { ParseIntBasedZipCodeValidator as Duplicate } from './ParseIntBasedZipCodeValidator'

// Import a module for side-effects only - not for the types
import './ZipCodeValidator'

// importing an ambient module with declarations for JS only third party library
/// <reference path="url.d.ts" />
import * as URL from 'url';


asdf.trim();
let myParsedUrl = URL.parse("http://www.typescriptlang.org");


