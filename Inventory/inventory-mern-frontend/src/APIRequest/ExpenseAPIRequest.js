import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import {getToken} from "../helper/SessionHelper";
import {
    OnChangeExpenseInput,
    ResetExpenseFormValue,
    SetExpenseList,
    SetExpenseListTotal,
    SetExpenseTypeDropDown
} from "../redux/state-slice/expense-slice";
import {BaseURL} from "../helper/config";
const AxiosHeader={headers:{"token":getToken()}}

export async function ExpenseListRequest(pageNo, perPage, searchKeyword) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/ExpensesList/"+pageNo+"/"+perPage+"/"+searchKeyword;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetExpenseList(result.data['data'][0]['Rows']))
                store.dispatch(SetExpenseListTotal(result.data['data'][0]['Total'][0]['count']))
            } else {
                store.dispatch(SetExpenseList([]))
                store.dispatch(SetExpenseListTotal(0))
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



export async function ExpenseTypeDropDownRequest() {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/ExpenseTypesDropDown";
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'].length > 0) {
                store.dispatch(SetExpenseTypeDropDown(result.data['data']))
            } else {
                store.dispatch(SetExpenseTypeDropDown([]))
                ErrorToast("No Expense Type Found")
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


export async function CreateExpenseRequest(PostBody,ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/CreateExpenses"
        if(ObjectID!==0){
            URL = BaseURL+"/UpdateExpenses/"+ObjectID;
        }
        debugger;
        const result = await axios.post(URL,PostBody,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            SuccessToast("Request Successful");
            store.dispatch(ResetExpenseFormValue())
            return  true;
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}



export async function FillExpenseFormRequest(ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/ExpenseDetailsByID/"+ObjectID;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            let FormValue=result.data['data'][0];
            store.dispatch(OnChangeExpenseInput({Name:"TypeID",Value:FormValue['TypeID']}));
            store.dispatch(OnChangeExpenseInput({Name:"Amount",Value:FormValue['Amount']}));
            store.dispatch(OnChangeExpenseInput({Name:"Note",Value:FormValue['Note']}));
            return  true;
        } else {
            debugger;
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        debugger;
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}



export async function DeleteExpenseRequest(ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/DeleteExpense/"+ObjectID;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader());
        if (result.status === 200 && result.data['status'] === "success") {
            SuccessToast("Request Successful");
            return  true
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}

