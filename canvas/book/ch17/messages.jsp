<%-- MIME Type設定 --%>
<%@page contentType="text/event-stream"%>
<%-- 重試時間的間隔:2秒 --%>
retry: 2000
<%
String[] symbols = new String[]{"YHOO", "GOOG", "MSFT"};
for (String symbol : symbols) {
	int delta = (int) (Math.random() * 10);
	// 相差值為7以下才傳送
	if (delta < 7) {
		// 50%機率會變為負值
		if (System.currentTimeMillis() % 2 == 0)
			delta = -delta;
%>
data: <%= symbol %>
data: <%= delta %>
<%
	}
}
%>
