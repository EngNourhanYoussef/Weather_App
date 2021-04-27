// let fun = async() =>{
//     try{
//         const res = await fetch('http://localhost:3000/weather?address=Egypt')
//         const data = await res.json()
//         console.log(data.location)
//         console.log(data.forecast)
        
//     }catch(e){
//         console.log(e)
//     }
// }
// fun()

///////////////////////////////////////////////////////////////////////////////

let fun = async(address) =>{
    try{
        const res = await fetch('http://localhost:3000/weather?address=' + address)
        const data = await res.json()
        document.getElementById('location').textContent = data.location
        document.getElementById('forecast').textContent = data.forecast
        document.getElementById('error').textContent = data.error
        
    }catch(e){
        console.log(e)
    }
}

let form = document.getElementById('myForm')

form.addEventListener('submit',(event)=>{
    event.preventDefault() // prevent page refresh
    // console.log(document.getElementById('address').value)
    const address = document.getElementById('address').value
    fun(address)
    form.reset()

})