const storageHelper = (function() {
  function setToken(token) {
    localStorage.setItem("token", token);
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function setRefreshToken(token) {
    localStorage.setItem("refresh_token", token);
  }

  function getRefreshToken() {
    return localStorage.getItem("refresh_token");
  }

  function setUserInfo(userInfo) {
    localStorage.setItem("info", JSON.stringify(userInfo));
  }

  function getUserInfo() {
    const _info = localStorage.getItem("info");
    return JSON.parse(_info);
  }

  function setIdentityType(type) {
    return localStorage.setItem("identity_type", type);
  }

  function getIdentityType() {
    return localStorage.getItem("identity_type");
  }


  function setIsPassInitial(strBool) {
    localStorage.setItem("isPassInitial", strBool);
  }

  function getIsPassInitial() {
    return localStorage.getItem("isPassInitial");
  }

  function setCheckGuideForIOS(strBool) {
    localStorage.setItem("check-guide", strBool);
  }

  function getCheckGuideForIOS() {
    return localStorage.getItem("check-guide");
  }

  function clearLocalStorage() {
    const instance_uuid = getInstanceUUID();
    localStorage.clear();
    setInstanceUUID(instance_uuid);
  }

  function setBalanceInLocal(balance) {
    localStorage.setItem("balance", balance.toString());
  }

  function getBalanceInLocal() {
    return localStorage.getItem("balance");
  }
  function setLastChatUpdateTime(tran_uuid, val) {
    return localStorage.setItem(tran_uuid, val);
  }

  function getLastChatUpdateTime(tran_uuid) {
    return localStorage.getItem(tran_uuid);
  }

  function setUserQr(qr) {
    return localStorage.setItem("user_qr_code", qr);
  }

  function getUserQr() {
    return localStorage.getItem("user_qr_code");
  }

  function setUserPass(content) {
    return localStorage.setItem("4ff258784836201af40c76e8eab23a99", content);
  }
  function getUserPass() {
    return localStorage.getItem("4ff258784836201af40c76e8eab23a99");
  }
  function removeUserPass() {
    return localStorage.removeItem("4ff258784836201af40c76e8eab23a99");
  }

  function setUserPassSession(content) {
    return localStorage.setItem("275490781cf4edaf1162b326726d7c91", content);
  }
  function getUserPassSession() {
    return localStorage.getItem("275490781cf4edaf1162b326726d7c91");
  }
  function removeUserPassSession() {
    return localStorage.removeItem("275490781cf4edaf1162b326726d7c91");
  }

  function setUserPassAttempts(content) {
    return localStorage.setItem("acc60f0a17c7ca309b0fee033af2d9c2", content);
  }
  function getUserPassAttempts() {
    return localStorage.getItem("acc60f0a17c7ca309b0fee033af2d9c2");
  }
  function removeUserPassAttempts() {
    return localStorage.removeItem("acc60f0a17c7ca309b0fee033af2d9c2");
  }

  function setUserPassAttemptsCounter(content) {
    return localStorage.setItem("4ade1b742509eae818fb75f1ee58f301", content);
  }
  function getUserPassAttemptsCounter() {
    return localStorage.getItem("4ade1b742509eae818fb75f1ee58f301");
  }
  function removeUserPassAttemptsCounter() {
    return localStorage.removeItem("4ade1b742509eae818fb75f1ee58f301");
  }
  function setAmountWhenSendIfNotEnough(amount, description) {
    sessionStorage.setItem("description", description);
    return sessionStorage.setItem("amount", amount);
  }
  function getAmountWhenSendIfNotEnough() {
    const _amount = sessionStorage.getItem("amount");
    const _description = sessionStorage.getItem("description");
    sessionStorage.removeItem("amount");
    sessionStorage.removeItem("description");
    return {
      amount: _amount ? _amount : "",
      description: _description ? _description : "",
    };
  }

  function setSelectedMenuItem(item) {
    sessionStorage.setItem("selectMenu", item);
  }

  function getSelectedMenuItem() {
    return sessionStorage.getItem("selectMenu");
  }

  function setDynamicData(data) {
    localStorage.setItem("dynamicData", JSON.stringify(data));
  }
  function getDynamicData() {
    return JSON.parse(localStorage.getItem("dynamicData"));
  }

  function setInstanceUUID(item) {
    localStorage.setItem("instance_uuid", item);
  }

  function getInstanceUUID() {
    return localStorage.getItem("instance_uuid");
  }

  function setMenuState(status) {
    localStorage.setItem("menu_state", status);
  }

  function getMenuState() {
    return localStorage.getItem("menu_state");
  }

  return {
    setToken,
    getToken,
    setRefreshToken,
    getRefreshToken,
    setUserInfo,
    getUserInfo,
    setIsPassInitial,
    getIsPassInitial,
    setCheckGuideForIOS,
    getCheckGuideForIOS,
    clearLocalStorage,
    setBalanceInLocal,
    getBalanceInLocal,
    setLastChatUpdateTime,
    getLastChatUpdateTime,
    setUserQr,
    getUserQr,
    setUserPass,
    getUserPass,
    removeUserPass,
    setUserPassSession,
    getUserPassSession,
    removeUserPassSession,
    setUserPassAttempts,
    getUserPassAttempts,
    removeUserPassAttempts,
    setUserPassAttemptsCounter,
    getUserPassAttemptsCounter,
    removeUserPassAttemptsCounter,
    setAmountWhenSendIfNotEnough,
    getAmountWhenSendIfNotEnough,
    setSelectedMenuItem,
    getSelectedMenuItem,
    setDynamicData,
    getDynamicData,
    setInstanceUUID,
    getInstanceUUID,
    setMenuState,
    getMenuState,
    setIdentityType,
    getIdentityType
  };
})();

export default storageHelper;
