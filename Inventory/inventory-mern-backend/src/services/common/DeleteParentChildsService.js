const DeleteParentChildsService= async (Request, ParentModel, ChildsModel) => {
    try{
        // Parent Creation
        let Parent=Request.body['Parent'];
        let UserEmail=Request.headers['email'];


    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=DeleteParentChildsService