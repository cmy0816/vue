// function Foo(name){
//     this.name=name
// }
// Foo.prototype.alertName=function(){
//     console.log('111',this.name)
// }

// var f=new Foo('cmy');
// f.priventName=function(){
//     console.log('222',this.name)
// }

function wln(){
    let sum =0;
    add([...arguments]);
    function add(){
        let all = [...arguments];
        for(let i=0;i<all.length;i++){
            if(typeof all[i] == 'object'){
                for(let j=0;j<all[i].length;j++){
                    sum+=all[i][j]*1;
                }
            }else{
                sum+=all[i]*1;
            }
        }
        return add
    }
    add.value=function(){
        return sum;
    }
    return add
}
console.log(wln(0)(1,2,3)(4,10)(30).value());
