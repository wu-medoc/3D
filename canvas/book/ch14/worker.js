// 存放Client數量的變數
var shared = 0;
// 接受Client連線要求的處理函式
onconnect = function(e) {
	// 變更全域變數
	// 由於Worker是多個Client所共享，因此
	// 當有連線要求時，就將這個數值增加
	shared++;
	if (shared == 1) {
		// 對Client的通訊埠來回傳訊息
		// "name"是只有在共享Worker內才可以參照的變數
		e.ports[0].postMessage ("產生新的共享Worker[" + name + "]。");
	} else {
		e.ports[0].postMessage ("Worker的名稱是[" + name + "] 並且被" + shared + "個物件所共享。");
	}
};
