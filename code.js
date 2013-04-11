

























var i;
var dic = new Object();

var code = "y qeeejp mysljylc kd kxveddknmc re jsicpdrysirbcpc ypc rtcsra dkh wyfrepkym veddknkmkrkcdde kr kd eoya kw aej tysr re ujdr lkgc jvz";
var decode ="a zooour language is impossible to understandthere are twenty six factorial possibilitiesso it is okay if you want to just give upq";
for(i = 0; i<code.length; i++)
    dic[code[i]] = decode[i];
    
for(i = "a".charCodeAt(0); i<="z".charCodeAt(0); i++)
    if (!dic[String.fromCharCode(i)])
        console.log(String.fromCharCode(i));
var bool = new Array();
for(i = "a".charCodeAt(0); i<="z".charCodeAt(0); i++)
    bool[String.fromCharCode(i)] = false;
    
for(i = 0; i<decode.length; i++)
    bool[decode[i]] = true;
    

    

for(i = "a".charCodeAt(0); i<="z".charCodeAt(0); i++)
    if (!bool[String.fromCharCode(i)])
        console.log(String.fromCharCode(i));

function main(){

    var s, s1;
    var i,j;
    var n = readInt();
    for(i=0; i<n; i++ ){
        s =  readLine();
        s1 = "";
        var s1 = "";
        for (j = 0; j<s.length; j++)
            s1 += dic[s[j]];
          println("Case #" + (i+1) + ": " + s1); // (i+1) very important
        
    
    }
}

