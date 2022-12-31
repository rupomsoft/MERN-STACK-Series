import {removeSessions} from "../helper/SessionHelper";
export  function UnAuthorizeRequest(error){
    if (error.response.status === 401) {
        removeSessions()
    }
}