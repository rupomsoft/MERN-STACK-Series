import cogoToast from "cogo-toast";

class ValidationHelper{

    isEmpty(value){
        if(value.length===0){
            return true;
        }
        else {
            return false
        }
    }

    SuccessToast(msg){
        cogoToast.success(msg, {position:"bottom-center"})
    }
    ErrorToast(msg){
        cogoToast.error(msg, {position:"bottom-center"})
    }


}

export const {isEmpty,SuccessToast,ErrorToast}=new ValidationHelper();