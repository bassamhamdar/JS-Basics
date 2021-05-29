
const stringSize = (text) => {
    return text.length;

}
const replaceCharacterE = (text) => {
    return text.replace(/E/i," ");
}
const concatString = (text1, text2) => {
    return text1 + text2;

}
const showChar5 = (text) => {
    return text[4];
}
const showChar9 = (text) => {
    return text.substring(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    if(typeof text == 'string'){
        return true;
    }
    return false;
}

const getExtension = (text) => {
    var ext = text.split('.').pop();
    return ext;
}
const countSpaces = (text) => {
    var spaceCount = (text.split(' ').length-1)
    return spaceCount;
}
const InverseString = (text) => {
    return text.split("").reverse().join("");
    // var strArray = text.split("");
    // var strArray_rev = strArray.reverse();
    // var joinArray = strArray_rev.join("");
    // return joinArray;
}

const power = (x, y) => {
    return Math.pow(x,y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    var x = 0;
    var absArray = [];
    while (x < array.length){
        absArray.push(Math.abs(array[x]));
        x++;
    }
    return absArray;

}
const circleSurface = (radius) => {
    var area = Math.PI * radius * radius;
    return Math.round(area);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab,ac);
}
const BMI = (weight, height) => {
    var bmi = weight / (height*height);
    return Math.round(bmi*100)/100;
}

const createLanguagesArray = () => {
    return ["Html","CSS","Java","PHP"];
}

const createNumbersArray = () => {
    return [0,1,2,3,4,5];
}

const replaceElement = (languages) => {
    for(var i=0; i < languages.length;i++){
        languages[i] = languages[i].replace(/Java/i, 'Javascript');
    }
    return languages;
}

const addElement = (languages) => {
     languages.push('Ruby');
     languages.push('Python');
     return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-1);
    numbers.unshift(-2);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    var str=social_arr.split(",");
    return str;
  
}

const convertArrToStr = (languages) => {
    return languages.toString();
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}