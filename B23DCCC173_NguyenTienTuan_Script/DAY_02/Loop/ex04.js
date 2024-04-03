
var i = 1;
var sum = 0;
for (;;){
    if (sum >=100) break;
    sum += i;
    i++;
}
document.write('Tổng các số nguyên dương từ 1 đến n đến khi tổng >=100 thì dừng lại: '+ sum + '<br>')
document.write('Số cuối cùng được cộng là: ' + (i - 1) + '<br>')



var i = 1;
var sum = 0;
while (sum < 100){
    sum += i;
    i++;
}
document.write('Tổng các số nguyên dương từ 1 đến n đến khi tổng >=100 thì dừng lại: ' + sum + '<br>')
document.write('Số cuối cùng được cộng là: ' + (i - 1) + '<br>')


var i = 1;
var sum = 0;
do {
    sum += i;
    i++
} while (sum < 100);
document.write('Tổng các số nguyên dương từ 1 đến n đến khi tổng >=100 thì dừng lại: ' + sum + '<br>')
document.write('Số cuối cùng được cộng là: ' + (i - 1) + '<br>')