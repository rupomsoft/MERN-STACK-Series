import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import axios from "axios";
import {ErrorToast} from "../helper/FormHelper";
import {getToken} from "../helper/SessionHelper";
import {SetCustomerDropDown, SetProductDropDown, SetSaleList, SetSaleListTotal} from "../redux/state-slice/sale-slice";
import {BaseURL} from "../helper/config";
const AxiosHeader={headers:{"token":getToken()}}

export async function SaleListRequest(pageNo, perPage, searchKeyword) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/SalesList/"+pageNo+"/"+perPage+"/"+searchKeyword;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetSaleList(result.data['data'][0]['Rows']))
                store.dispatch(SetSaleListTotal(result.data['data'][0]['Total'][0]['count']))
            } else {
                store.dispatch(SetSaleList([]))
                store.dispatch(SetSaleListTotal(0))
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

export async function CustomerDropDownRequest() {
    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL+"/CustomersDropDown";
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'].length > 0) {
                store.dispatch(SetCustomerDropDown(result.data['data']))
            } else {
                store.dispatch(SetCustomerDropDown([]));
                ErrorToast("No Customer Found");
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

export async function ProductDropDownRequest() {
    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL+"/ProductsDropDown";
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'].length > 0) {
                store.dispatch(SetProductDropDown(result.data['data']))
            } else {
                store.dispatch(SetProductDropDown([]));
                ErrorToast("No Product Found");
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