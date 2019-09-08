// js for unit converter
var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;
//add event listner
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
    //result.value = input.value;
    // when we want to change the input and result value we make change in inputTypeValue nad resultTypeValue
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // now compare the input and resultType value and add formula

    //convert meter to other unit
    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        // this is formula of meter to kilometer
        result.value = Number(input.value) * 0.001;
    }
    else if (inputTypeValue === "meter" && resultTypeValue === "centimeter") {
        // this formula for meter to centimeter
        result.value = Number(input.value) * 100;
    }
    else if (inputTypeValue === "meter" && resultTypeValue === "meter") {
        // this formula for meter to meter
        result.value = Number(input.value);
    }
    else if (inputTypeValue === "meter" && resultTypeValue === "millimeter") {
        //formula for meter to milimeter
        result.value = Number(input.value) * 1000;
    }


    //convert centimeter to another units
    if (inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
        // this is formula of centimeter to kilometer
        result.value = Number(input.value) * 0.000001;
    }
    else if (inputTypeValue === "centimeter" && resultTypeValue === "centimeter") {
        // this formula for centimeter to centimeter
        result.value = Number(input.value);
    }
    else if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
        // this formula for centimeter to meter
        result.value = Number(input.value) * 0.001;
    }
    else if (inputTypeValue === "centimeter" && resultTypeValue === "millimeter") {
        //formula for centimeter to milimeter
        result.value = Number(input.value) * 10;
    }


    //convert kilometer to another units
    if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
        // this is formula of centimeter to kilometer
        result.value = Number(input.value);
    }
    else if (inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
        // this formula for meter to centimeter
        result.value = Number(input.value) * 100000;
    }
    else if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        // this formula for meter to meter
        result.value = Number(input.value) * 1000;
    }
    else if (inputTypeValue === "kilometer" && resultTypeValue === "millimeter") {
        //formula for meter to milimeter
        result.value = Number(input.value) * 1000000;
    }


    //convert milimeter to another units
    if (inputTypeValue === "millimeter" && resultTypeValue === "kilometer") {
        // this is formula of centimeter to kilometer
        result.value = Number(input.value) * 0.0000001;
    }
    else if (inputTypeValue === "millimeter" && resultTypeValue === "centimeter") {
        // this formula for meter to centimeter
        result.value = Number(input.value) * 0.1;
    }
    else if (inputTypeValue === "millimeter" && resultTypeValue === "meter") {
        // this formula for meter to meter
        result.value = Number(input.value) * 0.0001;
    }
    else if (inputTypeValue === "millimeter" && resultTypeValue === "millimeter") {
        //formula for meter to milimeter
        result.value = Number(input.value);
    }
}
console.log();