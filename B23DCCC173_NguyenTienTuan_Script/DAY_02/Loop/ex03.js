
var i = 0;
var sum = 0;
for (;i <= 100;){
    sum += i
    i+=2;
}
document.write('Tong cac so chan tu 1 den 100: ' + sum +'<br>')


var i = 2;
var sum = 0;
while (i <=100){
    sum += i;
    i+=2;
}
document.write('Tong cac so chan tu 1 den 100: ' + sum +'<br>')


var i = 2;
var sum = 0;
do {
    sum += i;
    i+=2;
} while (i <= 100);
document.write('Tong cac so chan tu 1 den 100: ' + sum + '<br>')


/*
Ý tưởng khác:
cho i chạy từ 1 với bước nhảy 1 và kiểm tra các giá trị của i tiếp theo đó có chia hết cho 2 hay không rồi mới cộng
*/