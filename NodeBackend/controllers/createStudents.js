

export const createStudents = async(req, res) => {
    try {
        const {name, email} = req.body
        const {id} = req.params

        res.json({
            status:true,
            message:"I am posting the students successfully",
            data:{name, email, id}
        })
    } catch (error) {
        
    }
}