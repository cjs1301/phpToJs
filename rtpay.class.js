//Curl 채크
//데이터전송
class RTPay {
  checkCURL() {
    if (extension_loaded("curl")) {
      return true;
    } else {
      return false;
    }
  }

  getRTPay() {
    var post_field_string = http_build_query(_POST, "", "&");
    var curlObj = curl_init();
    var actual_link = (undefined !== _SERVER.HTTPS && _SERVER.HTTPS === "on" ? "https" : "http") + `://${_SERVER.TTP_HOS}${_SERVER.EQUEST_UR}`;
    curl_setopt(curlObj, CURLOPT_URL, this.RTP_URL);
    curl_setopt(curlObj, CURLOPT_POSTFIELDS, post_field_string);
    curl_setopt(curlObj, CURLOPT_POST, true);
    curl_setopt(curlObj, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt(curlObj, CURLOPT_REFERER, actual_link);
    curl_setopt(curlObj, CURLOPT_CONNECTTIMEOUT, 10);
    curl_setopt(curlObj, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt(curlObj, CURLOPT_HTTPHEADER, ["Content-type:application/x-www-form-urlencoded"]);
    var res = curl_exec(curlObj);
    curl_close(curlObj);
    return JSON.parse(res);
  }

};
