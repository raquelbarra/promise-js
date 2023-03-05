// Criado por Raquel Barra - 04/03/2023

function verify(){

    let numberUser = randomInt();
    let numberRandom = randomInt();

    const promiseRandom = new Promise((resolve, reject) => {
        
        if(validate(numberRandom,numberUser)) {
            resolve('Sucesso!');
        } else {
            reject(e);
        }
    });

    promiseRandom.then((value) => {
        console.log(`Resultado: Sucesso! \nNúmero do usuário: ${numberUser} - Número gerado pela máquina: ${numberRandom}.`);
    },(reason) => {
        console.log(`Resultado: Erro! \nNúmero do usuário: ${numberUser} - Número gerado pela máquina: ${numberRandom}.`);
    },
    );

}

function validate (number, compare){
    return number === compare ? true : false;
}


function randomInt() { 
    return Math.floor((Math.random() * 10) + 1)
}