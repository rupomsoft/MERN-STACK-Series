import cogoToast from "cogo-toast";

class FormHelper {
    ErrorToast(msg) {
        cogoToast.error(msg, { position: "bottom-center" });
    }
    SuccessToast(msg) {
        cogoToast.success(msg, { position: "bottom-center" });
    }

}

export const {
    ErrorToast,
    SuccessToast,
} = new FormHelper();