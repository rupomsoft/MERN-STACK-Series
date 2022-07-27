const CreateService= async (PostBody,UserEmail,Model) => {
    try{
        PostBody.UserEmail=UserEmail
        let data = await  Model.create(PostBody)
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=CreateService