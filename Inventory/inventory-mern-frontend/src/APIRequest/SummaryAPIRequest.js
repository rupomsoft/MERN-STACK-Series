import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings/settingsSlice";
import {getToken} from "../helper/SessionHelper";
import {
    SetExpenseChart,
    SetExpenseTotal, SetPurchaseChart, SetPurchaseTotal,
    SetReturnChart,
    SetReturnTotal, SetSaleChart, SetSaleTotal
} from "../redux/state-slice/dashboard/dashboardSlice";
const AxiosHeader={headers:{"token":getToken()}}
const BaseURL="http://localhost:5000/api/v1"

export async function ExpensesSummary(){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/ExpensesSummary";
        let res=await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetExpenseChart(res.data['data'][0]['Last30Days']))
            store.dispatch(SetExpenseTotal(res.data['data'][0]['Total'][0]['TotalAmount']))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
    }
}

export async function ReturnSummary(){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/ReturnSummary";
        let res=await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetReturnChart(res.data['data'][0]['Last30Days']))
            store.dispatch(SetReturnTotal(res.data['data'][0]['Total'][0]['TotalAmount']))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
    }
}

export async function SaleSummary(){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/SalesSummary";
        let res=await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetSaleChart(res.data['data'][0]['Last30Days']))
            store.dispatch(SetSaleTotal(res.data['data'][0]['Total'][0]['TotalAmount']))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
    }
}

export async function PurchaseSummary(){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/PurchaseSummary";
        let res=await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetPurchaseChart(res.data['data'][0]['Last30Days']))
            store.dispatch(SetPurchaseTotal(res.data['data'][0]['Total'][0]['TotalAmount']))
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
    }
}

