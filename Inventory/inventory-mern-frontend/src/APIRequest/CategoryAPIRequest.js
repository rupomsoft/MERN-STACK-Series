import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import axios from "axios";
import {ErrorToast} from "../helper/FormHelper";
import {getToken} from "../helper/SessionHelper";
import {SetCategoryList, SetCategoryListTotal} from "../redux/state-slice/category-slice";
import {BaseURL} from "../helper/config";
const AxiosHeader={headers:{"token":getToken()}}

export async function CategoryListRequest(pageNo, perPage, searchKeyword) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/CategoriesList/"+pageNo+"/"+perPage+"/"+searchKeyword;
        const result = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            if (result.data['data'][0]['Rows'].length > 0) {
                store.dispatch(SetCategoryList(result.data['data'][0]['Rows']))
                store.dispatch(SetCategoryListTotal(result.data['data'][0]['Total'][0]['count']))
            } else {
                store.dispatch(SetCategoryList([]))
                store.dispatch(SetCategoryListTotal(0))
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
