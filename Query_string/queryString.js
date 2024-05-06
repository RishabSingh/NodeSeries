var url=require('url');
var querystring=require('querystring');

let  sampleUrl='http://www.company.com:81/a/b/c.html?user=GEEKSFORGEEKS&year=2021#p2';

console.log("parsing the url using url module");
var parsed_Url=url.parse(sampleUrl);
console.log(parsed_Url);



console.log("parsing the url using querystring module");  
var QueryString=querystring.parse(parsed_Url.query);
console.log(QueryString);