const UpdateService= async (PostBody,UserEmail,Model,Id) => {
    try{


        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=UpdateService