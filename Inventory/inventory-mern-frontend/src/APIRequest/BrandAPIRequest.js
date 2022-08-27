import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import axios from "axios";
import {ErrorToast} from "../helper/FormHelper";
import {getToken} from "../helper/SessionHelper";
import {SetBrandList} from "../redux/state-slice/brand-slice";
const BaseURL="https://inventory-mern-backend.herokuapp.com/api/v1"
const AxiosHeader={headers:{"token":getToken()}}

export async function GetProductList(pageNo, perPage, searchKeyword) {

    store.dispatch(ShowLoader())

    let URL = BaseURL + "/BrandList/" + pageNo + "/" + perPage + "/" + searchKeyword;

    try {
        const result = await axios.get(URL,AxiosHeader)

        store.dispatch(HideLoader())

        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetBrandList(result.data['data'][0]['Rows']))
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
