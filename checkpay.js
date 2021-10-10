//인증키값 설정

require("./rtpay.class.php");

var RTPay = new RTPay();
RTPay.RTP_KEY = "d7351fc5-89d7-4037-9f8f-xxxxxxxxxx";
var resultArray = Array();
resultArray.PCHK = "NO";

if (_POST.regPkey == RTPay.RTP_KEY) {
  if (RTPay.checkCURL()) {
    if (_POST.ugrd < 20) RTPay.RTP_URL = "https://rtpay.net/CheckPay/test_checkpay.php";else RTPay.RTP_URL = "https://rtpay.net/CheckPay/checkpay.php";
    var retRTP = RTPay.getRTPay();

    if (retRTP.RCODE == "200") //은행명
      //입금자명
      //입금금액
      //전송 데이터 전문
      //========================== 인증키값 설정과 이 부분만 고쳐주세요. =======================
      //입금신청을 기록하신 기존 DB 데이터와 비교하는 코드 입력부분
      //입금자명과 금액이 일치하는 갯수를 비교하여 한개 이상이면 입금완료 처리 보류
      //입금데이터와 비교하여 매칭이 되었을 경우 $resultArray['PCHK'] =  "OK";
      //입금데이터와 비교하여 매칭이 되지 않았을 경우 $resultArray['PCHK'] =  "NO";
      //========================== 인증키값 설정과 이 부분만 고쳐주세요. =======================
      {
        var pbank = retRTP.RBANK;
        var pname = retRTP.RNAME;
        var pmoney = retRTP.RPAY;
        var tall = retRTP.RTEXT;
      }

    resultArray.RCODE = retRTP.RCODE;
  } else {
    resultArray.RCODE = "300";
  }
} else {
  if (!_POST.regPkey) {
    _POST.regPkey = RTPay.RTP_KEY;
    RTPay.RTP_URL = "https://rtpay.net/CheckPay/setPurl.php";
    retRTP = RTPay.getRTPay();
  }

  resultArray.RCODE = "400";
}

echo(JSON.stringify(resultArray));
