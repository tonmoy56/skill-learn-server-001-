const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors')

app.use(cors())

const courses=require('./courses/courses.json')





app.get('/', (req, res) => {
    res.send('runing api')
  })

app.get('/courses',(req,res)=>{
  res.send(courses)
})  
  
app.get('/courses/:id',(req,res)=>{
  const id=req.params.id
  const data=courses.find(da=>da._id===id)
  res.send(data)

})
  

  app.listen(port,()=>{
    console.log(`listening on port ${port}`)
  })

  module.exports = app;
