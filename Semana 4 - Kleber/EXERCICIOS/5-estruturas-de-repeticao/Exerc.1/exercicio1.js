for (var i = 1; i <-50; i++ ) {
    if(i % 2 ==0) {
        console.log(i + ' é par.');
        } else {
            console.log(i + ' é impar.');
        }
    
}

console.log('Par ou Ímpar com WHILE...');
var i  = 1;

while (i <=50) {
    if(i %  2 ==0){
        console.log(i + ' é par.');
    }else{
        console.log(i + ' é impar.');
    }
    i++;
}

console.log('Múltiplos de 3 com FOR...');

for (var j=1;j<=100; j++){
    if(j%3 === 0) {
        console.log(j);
    }
}

console.log('Mútiplos de 3 com WHILO...');

var j = 1;
while(j<=100){
    if(j%3 == 0){
        console.log(j);
        }
    j++;
}

