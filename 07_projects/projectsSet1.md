# Projects related to DOM

## project link 
[Click Here](https://stackblitz.com/edit/web-platform-z1jqc6)

# Solution Code

## project 1

```javascript
const bodyTag = document.body

const button = document.querySelectorAll('.button')

console.log(button); //NodeList -- apply forEach

button.forEach((button)=>{
    console.log(button);

    //AddEventListener
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target.id); // .target gets you the actual HTML element
        
        bodyTag.style.backgroundColor = e.target.id

        // return bodyTag.style.backgroundColor = e.id 
    })
})

```

## project 2 

```javascript

const form = document.querySelector('form')



// console.log(resVal);
const button = document.querySelector('button')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    console.log(height)

    const weight = parseInt(document.querySelector('#weight').value)
    console.log(weight);

    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Enter valid height not ${height}`
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Enter valid weight not ${weight}`
    }

    else {
        const bmi = ((weight / (height ** 2)) * 10000 ).toFixed(2) // bmi formula
        console.log(bmi);
        result.innerHTML = `<span>${bmi}</span>`
    }

    
}
)

```

## project 3 

```javascript 

// const date = new Date()

const clock = document.querySelector('#clock')

// setInterval(function(){},1000) --- syntax for interval 

setInterval(() => {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);

```