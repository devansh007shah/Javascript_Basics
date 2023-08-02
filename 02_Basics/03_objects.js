// singleton
//object.create()

//OBJECT LITERAL

const obj1 = Symbol('key1')

const newObj ={
    name:'Dev',
    rank:1,
    isMale:true,
    [obj1]:'myKey1',
    portfolio:{
        instaID : 'UPSC_BULL',
        telegramID : 'LOLs'
    }
     // KEYS (assumed strings) : VALUES (any datatype)
} // curly-braces -- object

console.log(newObj['name']); //preferred way of accessing keys from objects
console.log(newObj.rank); // should not be used because if the key is written -- 'rank' than there is no way to access the values 

console.log(newObj[obj1]); // correct way to access symbol


//OVERWRITE values in object

newObj['name'] = 'Devansh'
console.log(newObj);

//FREEZE object Values

Object.freeze(newObj['name'])
console.log(newObj);

newObj['name']=  'Dev' //value won't change
newObj['rank'] = 2 

console.log(newObj);

//Using of function in the objects

newObj.greeting = function(){
    console.log('Here is a new value');
}

console.log(newObj);
newObj.greeting = function(){
    console.log(`He welcomed us ! thnk you ${this['name']}`);
}

console.log(newObj.greeting());