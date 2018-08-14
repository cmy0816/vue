function strNum(str) { 
    let obj = {}; 
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] ? (obj[str[i]] = obj[str[i]]+1): obj[str[i]] = 1; 
    };
    return obj
};
console.log(strNum('aaaabbbbccccddd'));