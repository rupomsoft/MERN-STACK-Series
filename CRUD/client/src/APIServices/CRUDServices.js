import axios from "axios";

export function Create(ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice){
    let URL="/api/v1/CreateProduct";
    let PostBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Img:Img,
        UnitPrice:UnitPrice,
        Qty:Qty,
        TotalPrice:TotalPrice
    }
   return axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
           return true;
        }
        else{
           return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

export function Read(){
    let URL="/api/v1/ReadProduct";
  return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

export function ReadByID(id){
    let URL="/api/v1/ReadProductByID/"+id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data['data'];
        }
        else{
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}



export function Delete(id){
    let URL="/api/v1/DeleteProduct/"+id;
    return  axios.get(URL).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

export function Update(id,ProductName,ProductCode,Img,UnitPrice,Qty,TotalPrice){
    let URL="/api/v1/UpdateProduct/"+id;
    let PostBody={
        ProductName:ProductName,
        ProductCode:ProductCode,
        Img:Img,
        UnitPrice:UnitPrice,
        Qty:Qty,
        TotalPrice:TotalPrice
    }
    return axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            return true;
        }
        else{
            return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

