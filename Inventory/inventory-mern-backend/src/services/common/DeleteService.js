const DeleteService= async (Request, Model) => {
    try{
        let DeleteID=Request.params.id;
        let UserEmail=Request.headers['email'];

        let QueryObject={};
        QueryObject['_id']=DeleteID;
        QueryObject[UserEmail]=UserEmail;

        let Delete=  await Model.deleteMany(QueryObject)

        return {status: "success",Delete:Delete}

    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=DeleteService