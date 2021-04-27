const express = require('express')


const app = express()

const port = 3000



const path = require('path')

 console.log(__dirname) 

const publicDirectory = path.join(__dirname,'../public')


app.use(express.static(publicDirectory))


// HBS

// Default
 app.set('view engine', 'hbs');


const viewsPath = path.join(__dirname,'../templates/views')
console.log(viewsPath)
app.set('views',viewsPath)


const hbs = require('hbs')
const partialPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialPath)

app.get('/',(req,res)=>{
   
    res.render('index',{
        title:'Home Page',
        name:'Amr'
    })
})


app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About page',
        name:'Ahmed'
    })
})



app.get('*',(req,res)=>{
    res.render('404page',{
        title:'Page Not Found',
        msg:'Error!!!',
        name:'Deafult'
    })
})



app.get('/products',(req,res)=>{
    console.log(req.query)
    console.log(req.query.search)
  
    res.send('Msg')
})



const geocode = require('./tools/geocode')
const forecast = require('./tools/forecast')

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'You must provide address'
        })
    }
    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({error})
        }
        forecast(data.latitude,data.longtiude,(error,forecastData)=>{
            if(error){
               return res.send({error}) // shorthand 
            }
            res.send({
                forecast: forecastData,
                location: data.location
            })
        })
    })
})


  app.listen(port,()=>{
      console.log('Listening on port 3000')
  })



  


