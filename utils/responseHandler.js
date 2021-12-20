import { getTextByTextKey } from "~/modules/splitPartJsonResource";
import RESPONSE_CODE from "~/config/constants";
// import { showSnackbar } from "@Store/common/actions";
// import { store } from "@Store/initSetup";

function useResponseHandler(RESPONSE_CODE_OK = RESPONSE_CODE.OK) {
  function handleResult(result) {
    let messageForUser = "";
    const data = result?.response?.data || result?.data;
    const { response_message, response_code, response_value } = data || {};

    if (data && response_code !== RESPONSE_CODE_OK) {
      //let errorMsg = getTextByTextKey({ response_code });
      let errorMsg = response_message;
      messageForUser = errorMsg;
      let hasResource = !!errorMsg;

      console.log(messageForUser);

      // if (!errorMsg) {
      //   errorMsg = `${response_code}`;
      // }

      //   if (response_value?.length) {
      //     let show = false;
      //     response_value?.map((res_value) => {
      //       for (const [key, value] of Object.entries(res_value)) {
      //         if (errorMsg?.includes(key)) {
      //           show = true;
      //           errorMsg = errorMsg?.replace({${ key }}, value);
      //         } else if (!hasResource || response_code === 0) {
      //           if (response_code === 0) {
      //             messageForUser.push(` ${value || ""} `);
      //           } else {
      //             messageForUser.push(` ${key || ""}: ${value || ""} `);
      //           }
      //         }
      //       }
      //     });
      //
      //     if (!show) {
      //       if (messageForUser?.length && response_code !== 0) {
      //         messageForUser.unshift(${getTextByTextKey("seller.error_parameters")});
      //       }
      //       messageForUser.unshift(errorMsg);
      //       store.dispatch(showSnackbar(messageForUser, 'error', true));
      //       console.log('error: ', messageForUser);
      //     }
      //   } else if (response_code === 0) {
      //    // store.dispatch(showSnackbar([getResourceText({ response_code })], 'error', true));
      //     console.log('error: ', getTextByTextKey({ response_code }));
      //   }
      //
      // } else {
      //   console.log("result is: ", result);
      // }
    }
  }

  return {
    handleResult,
  };
}

export default useResponseHandler;
