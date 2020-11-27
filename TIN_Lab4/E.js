const ss='xyz lorem ipsum yes no purple';
const longestWord=(ss)=>{
  const strArray=ss.split(' ');
  const sortedStrArray=strArray.sort(
    (strA, strB)=>{
      return strB.length-
      strA.length;
    });
  return sortedStrArray[0];
}
console.log(longestWord(str));
