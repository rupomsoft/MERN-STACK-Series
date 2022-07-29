const ListOneJoinService= async (Request, DataModel, SearchArray, JoinStage) => {
    try{
        let pageNo = Number(Request.params.pageNo);
        let perPage = Number(Request.params.perPage);
        let searchValue = Request.params.searchKeyword;
        let UserEmail=Request.headers['email'];
        let skipRow = (pageNo - 1) * perPage;
        let data;

        if (searchValue!=="0") {
            let SearchQuery = {$or: SearchArray,$and:[{UserEmail:UserEmail}]}

            data = await DataModel.aggregate([{
                $facet:{
                    Total:[{$match: SearchQuery},{$count: "count"}],
                    Rows:[JoinStage,{$skip: skipRow}, {$limit: perPage}],
                }
            }])

        }
        else {
            data = await DataModel.aggregate([{
                $facet:{
                    Total:[{$match: {UserEmail:UserEmail}},{$count: "count"}],
                    Rows:[JoinStage,{$skip: skipRow}, {$limit: perPage}],
                }
            }])
        }
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=ListOneJoinService