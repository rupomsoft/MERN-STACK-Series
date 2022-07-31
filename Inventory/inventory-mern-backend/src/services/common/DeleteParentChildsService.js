const DeleteParentChildsService= async (Request, ParentModel,ChildsModel,JoinPropertyName) => {
    try{
        // Parent Creation
        let DeleteID=Request.params.id;
        let UserEmail=Request.headers['email'];

        let ChildQueryObject={};
        ChildQueryObject[JoinPropertyName]=DeleteID;
        ChildQueryObject[UserEmail]=UserEmail;

        let ParentQueryObject={};
        ParentQueryObject['_id']=DeleteID;
        ParentQueryObject[UserEmail]=UserEmail;


        let ChildsDelete=  await ChildsModel.remove(ChildQueryObject);
        let ParentDelete= await ParentModel.remove(ParentQueryObject)

        return {status: "success",Parent:ParentDelete,Childs:ChildsDelete}

    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=DeleteParentChildsService