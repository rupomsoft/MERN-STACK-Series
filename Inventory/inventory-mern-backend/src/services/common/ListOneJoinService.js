const ListOneJoinService= async (Request, DataModel, SearchArray, JoinStage) => {
    try{
        let pageNo = Number(Request.params.pageNo);
        let perPage = Number(Request.params.perPage);
        let searchValue = Request.params.searchKeyword;
        let UserEmail=Request.headers['email'];
        let skipRow = (pageNo - 1) * perPage;

        let data;

        if (searchValue!=="0") {
            data = await DataModel.aggregate([
                {$match: {UserEmail:UserEmail}},
                JoinStage,
                {$match: {$or: SearchArray}},
                {
                $facet:{
                    Total:[{$count: "count"}],
                    Rows:[{$skip: skipRow}, {$limit: perPage}]
                }
                }
            ])

        }
        else {
            data = await DataModel.aggregate([
                {$match: {UserEmail:UserEmail}},
                JoinStage,
                {
                $facet:{
                    Total:[{$count: "count"}],
                    Rows:[{$skip: skipRow}, {$limit: perPage}]
                }
                }
            ])
        }
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error.toString()}
    }
}
module.exports=ListOneJoinService