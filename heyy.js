/*
洪恩英语 by踮起脚尖过日子
*/


var obj = JSON.parse($response.body);
obj.result.books = [{
      "is_vip": 0
       
    }]

$done({body: JSON.stringify(obj)});
