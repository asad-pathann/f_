export const handleError = (err,req,res,next)=>{
    res.json({
        error:err.message
    })
}