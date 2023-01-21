import axios from "axios";

// Promise CallBack
function GetRequestPromise() {

    let URL="https://crud.teamrabbil.com/api/v1/ReadProduct";

    axios.get(URL).then(
        function (res) {
            if(res.status===200){
              let myData=res.body();
            }
            else{
                // Error Messsage
            }
        }
    ).catch(function (err) {
        // Error Messsage
    });

}


// await---->
async function GetRequestAwait() {

    let URL = "https://crud.teamrabbil.com/api/v1/ReadProduct";



    try {

        let res1 = await axios.get(URL);
        let res2 = await axios.get(URL);
        let res3= await axios.get(URL);



        if(res1.status===200){
            let myData=res1.body();
        }



        if(res2.status===200){
            let myData=res2.body();
        }


        if(res3.status===200){
            let myData=res3.body();
        }





    }
    catch (e) {
        //
    }




}
