import { createApiInterface } from "~/plugins/apiInterface";
import { getToken } from "~/utils/storageHelper";
export default function(context, inject) {
  inject('api', createApiInterface({
    token: () => getToken(),
    // onSessionExpire: () => userContext?.onSessionExpire(),
  }))
}
