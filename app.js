const express=require('express')
const port=process.env.PORT || 3000

const app=express()

app.use(express.json());

app.get('/', (req, res) =>{
    res.status(200).json({message:'Welsome to the Unsplash API!'})
} )




app.listen(port, () => console.log("Server started on port "+ port))