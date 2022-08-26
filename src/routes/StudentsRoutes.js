const express = require('express')
const Student= require('../model/students')

const routers=new express.Router()


routers.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const CreateStudent = await user.save();
        res.status(201).send(CreateStudent)
    } catch (e) {
        res.status(400).send(e)


    }

})

routers.get('/students', async (req, res) => {
    try {

        const getStudents = await Student.find();

        res.send(getStudents)

    } catch (e) {
        res.status(400).send(e)

    }
})

// get data indivisual student

routers.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const getStudent = await Student.findById(_id);
        if (!getStudent) {
            res.send(404)
        } else {

            res.status(500).send(getStudent)
        }


    } catch (e) {
        res.send(e)
    }
})


// Find By Name


// routers.get("/students/:name", async (req, res) => {
//     try {
//         const _id = req.params.name;

//         const getStudent = await Student.findOne({name:_id});
//         if (!getStudent) {
//             res.send(404)
//         } else {

//             res.status(500).send(getStudent)
//         }


//     } catch (e) {
//         res.send(e)
//     }
// })




// Update Students---------------------------

routers.patch('/students/:id',async(req,res)=>{
try{
    const _id=req.params.id

    const updateStudents=await Student.findByIdAndUpdate(_id,req.body,{
        new:true
    })
    res.send(updateStudents)

}catch(e){
    res.status(401).send(e)

}
})



// Delete Students-----


routers.delete('/students',async(req,res)=>{
    try{
        // const _id=req.params.id
        const deleteStudent=await Student.findByIdAndDelete(req.body)

        if(!req.body){
          return  res.status(400).send()
        }else{
            res.send({
                success:true,
                message:"Delete SuccessFull",
                data:deleteStudent
            })
        }

    }catch(e){

        res.status(500).send(e)
    }
})



module.exports = routers;
