function num(max){
    let end=[];
    for(let i=1;i<max+1;i++){
            if(i<=10){
                if(i<=3){
                   end.push(i); 
                }else if(i%2 != 0 && i%3 != 0 ){
                    end.push(i);
                }
            }else if(i%2 != 0 && i%3 != 0 && i%5 != 0 && i%7 != 0 ){
                    end.push(i);
            }
    }
    return end;
};
console.log(num(1000));