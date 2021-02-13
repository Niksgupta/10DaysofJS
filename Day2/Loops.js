function vowelsAndConsonants(s) {
  
    var vowels = "aeiou";
    var consonents = "";
    for(var i =0; i <s.length; i++){
        if(vowels.includes(s[i])){
            console.log(s[i]);
        }
        else {
            consonents = consonents + s[i] + '\n';
        }
    }
    console.log(consonents.trim());
}