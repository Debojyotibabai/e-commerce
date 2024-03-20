import toast from "react-hot-toast";
import constants from "../app/constants";

export const showToast = (messsage, type) => {
  switch (type) {
    case constants.toastType.SUCCESS:
      return toast.success(messsage);

    case constants.toastType.ERROR:
      return toast.error(messsage);

    case constants.toastType.NORMAL:
      return toast(messsage);

    default:
      break;
  }
};
