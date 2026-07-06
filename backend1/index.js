import express from 'express'


const app = express();

app.get("/getJson", async (req, res) => {
  try {
    res.json({
        name:"shivam",
        age:"age"
    })     
  } catch (error) {
    console.log(error)
  }
});

app.listen(8080, () => {
    console.log("server is running")
});

// function add(a,b){
//     return a+b
// }

// console.log(add(1,2))