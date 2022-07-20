import axios from "axios";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import {SetALLProduct, SetTotal} from "../redux/state-slice/product-slice";
import {ErrorToast} from "../helper/FormHelper";
const BaseURL="http://localhost:5000/api/v1"


export async function GetProductList(pageNo, perPage, searchKeyword) {

    store.dispatch(ShowLoader())

    let URL = BaseURL + "/ProductList/" + pageNo + "/" + perPage + "/" + searchKeyword;

    try {
        const result = await axios.get(URL)

        store.dispatch(HideLoader())

        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetALLProduct(result.data['data'][0]['Rows']))
                store.dispatch(SetTotal(result.data['data'][0]['Total'][0]['count']))
            } else {
                store.dispatch(SetALLProduct([]))
                store.dispatch(SetTotal(0))
                ErrorToast("No Data Found")
            }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }

    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}

