const UserCreateService= async (Request,DataModel) => {
    try{
        let PostBody=Request.body;
        let data = await DataModel.create(PostBody)
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error.toString()}
    }
}
module.exports=UserCreateService