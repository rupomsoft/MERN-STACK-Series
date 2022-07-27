const DeleteService= async (Request,DataModel) => {
    try{
        let UserEmail=Request.headers['email'];
        let id=Request.params.id;
        let data = await DataModel.remove({_id:id,UserEmail:UserEmail});
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=DeleteService