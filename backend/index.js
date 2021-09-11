const express = require('express')
const vision =require('@google-cloud/vision')

const app = express()
const client =new vision.ImageAnnotatorClient();

const port = process.env.PORT || 3001

async function quickstart(){
    const [result] =await client.labelDetection("https://images.unsplash.com/photo-1624313976899-0fd4989a2fcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80")
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));

    try{
    }catch (error){
        console.error(error.response)
    }
}
quickstart()




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api',(req,res)=>{
    res.json({message:"hello マムシ"})
})



app.listen(port, () => {
    console.log(`listening on *:${port}`);
})