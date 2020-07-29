//接收訊息
onmessage = function(event) {
	var num = event.data ;
	var result = 0;
	for (var i = 1; i <= num; i++) {
		result += i;
	}
	// 回傳結果給原建立者
	postMessage(result) ;
};
