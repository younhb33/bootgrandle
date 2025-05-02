//고객의 고유번호 난수 생성코드
var w = 0;
let usercode = "";
while(w < 4){
	usercode += Math.floor(Math.random() * 9);
	w++;
}
frm.usercode.value = usercode;

//오늘날짜를 자동으로 
frm.mdate.value = new Date().toISOString().substring(0,10);
var reserve = () =>{
	if(frm.mname.value == ""){//배포할때 사용
		alert("고객명을 입력하세요");
		return false;
	}else if(frm.mtime.value == ""){
		alert("예매시간을 입력하세요");
		return false;
	}else if(frm.mperson.value == ""){
		alert("인원수를 입력하세요");
		return false;
	}else{
		frm.submit();
	}
}