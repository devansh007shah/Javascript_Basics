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