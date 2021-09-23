const str = "20210405";
const pattern = /(\w{4})(\w{2})(\w{2})/;
const newstr = str.replace(pattern, '$1.$2.$3');
console.log(newstr);
