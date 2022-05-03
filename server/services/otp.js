import otpGenerator from 'otp-generator';

export const otpGeneratorFunction=()=>{
     const generator= otpGenerator.generate(6,{upperCaseAlphabets:false,specialChars:false}); 
     return generator;  
}

