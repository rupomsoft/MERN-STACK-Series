import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import {BaseURL} from "../helper/config";
import axios from "axios";

import {ErrorToast} from "../helper/FormHelper";
import {getToken} from "../helper/SessionHelper";

import {SetExpensesByDateList, SetPurchaseByDateList, SetReturnByDateList, SetSalesByDateList} from "../redux/state-slice/report-slice";
const AxiosHeader={headers:{"token":getToken()}}

export async function ExpensesByDateRequest(FormData,ToDate) {
    try {
        store.dispatch(ShowLoader())
        let PostBody={"FormDate":FormData+"T00:00:00.000+00:00","ToDate":ToDate+"T00:00:00.000+00:00"}
        let URL = BaseURL+"/ExpensesByDate";
        const result = await axios.post(URL,PostBody,AxiosHeader);
        store.dispatch(HideLoader());
        if (result.status === 200 && result.data['status']==="success") {
            store.dispatch(SetExpensesByDateList(result.data['data']))

        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}

export async function SalesByDateRequest(FormData,ToDate) {
    try {
        store.dispatch(ShowLoader())
        let PostBody={"FormDate":FormData+"T00:00:00.000+00:00","ToDate":ToDate+"T00:00:00.000+00:00"}
        let URL = BaseURL+"/SalesByDate";
        const result = await axios.post(URL,PostBody,AxiosHeader);
        store.dispatch(HideLoader());
        if (result.status === 200 && result.data['status']==="success") {
            store.dispatch(SetSalesByDateList(result.data['data']))

        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}

export async function PurchaseByDateRequest(FormData,ToDate) {
    try {
        store.dispatch(ShowLoader())
        let PostBody={"FormDate":FormData+"T00:00:00.000+00:00","ToDate":ToDate+"T00:00:00.000+00:00"}
        let URL = BaseURL+"/PurchaseByDate";
        const result = await axios.post(URL,PostBody,AxiosHeader);
        store.dispatch(HideLoader());
        if (result.status === 200 && result.data['status']==="success") {
            store.dispatch(SetPurchaseByDateList(result.data['data']))
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}

export async function ReturnByDateRequest(FormData,ToDate) {
    try {
        store.dispatch(ShowLoader())
        let PostBody={"FormDate":FormData+"T00:00:00.000+00:00","ToDate":ToDate+"T00:00:00.000+00:00"}
        let URL = BaseURL+"/ReturnByDate";
        const result = await axios.post(URL,PostBody,AxiosHeader);
        store.dispatch(HideLoader());
        if (result.status === 200 && result.data['status']==="success") {
            store.dispatch(SetReturnByDateList(result.data['data']))
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
    }
}