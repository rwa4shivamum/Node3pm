import express from 'express';
const app = express();

app.use(express.json());

app.get("/getData", async(req, res)=>{
    try {
        throw new Error("Error is throwing")
        res.json({
            "name":"shivam",
            "email":"shivam@gmail.com"
        })
        console.log("heer")
    } catch (error) {
        res.json({
            "message":`${error}`
        })
    }
})

app.get("/getjsonData", async (req, res) => {
  try {
    res.json({
      name: "shivajkasnd",
      email: "shivamsdfsfsf@gmail.com",
    });
  } catch (error) {
    res.json({
        messsage:`Error ${error}`
    })
  }
});

app.listen(8080, ()=>{
    console.log(`Server is running on this 8080`)
})