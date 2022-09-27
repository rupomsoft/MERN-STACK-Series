import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import {getToken} from "../helper/SessionHelper";
import {SetCustomerList, SetCustomerListTotal} from "../redux/state-slice/customer-slice";
import {BaseURL} from "../helper/config";
const AxiosHeader={headers:{"token":getToken()}}

export async function CustomerListRequest(pageNo, perPage, searchKeyword) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/CustomersList/"+pageNo+"/"+perPage+"/"+searchKeyword;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetCustomerList(result.data['data'][0]['Rows']))
                store.dispatch(SetCustomerListTotal(result.data['data'][0]['Total'][0]['count']))
            } else {
                store.dispatch(SetCustomerList([]))
                store.dispatch(SetCustomerListTotal(0))
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




export async function CreateCustomerRequest(PostBody) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/CreateCustomers"
        const result = await axios.post(URL,PostBody,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            SuccessToast("Request Successful")
        } else {
            ErrorToast("Request Fail ! Try Again")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}




