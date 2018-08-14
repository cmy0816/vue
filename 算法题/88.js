function all(num) {//1-10的和
    let sum = 0;
    function add(a, b) {
        sum += a + b;
        if (b <=1) {
            return 
        } else {
            add(b - 1, b - 2);
        }
    }
    add(num, num - 1);
    return sum
};
console.log(all())
function Incrementing(n){//这是下午我问你的题
    let num=0;
    function add(a,b){
        num++;
        if(num == n){
            return a
        }else{
            return add(b,a+b)
        }
    };
    return add(1,1);;                                                                                                                                                                                                                                                                   
};
console.log(Incrementing(3))