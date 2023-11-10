
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import {SetALLProduct, SetTotal} from "../redux/state-slice/product-slice";
import axios from "axios";
const BaseURL="http://localhost:5020/api/v1"




export function GetProductList(pageNo,perPage,searchKey){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/ProductList/"+pageNo+"/"+perPage+"/"+searchKey;
    axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetALLProduct(res.data['data']))
            store.dispatch(SetTotal(res.data['total']))

        }
        else{

        }
    }).catch((err)=>{
        store.dispatch(HideLoader())
    });
}

