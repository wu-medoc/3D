from mod_pywebsocket import msgutil

connections = []

def web_socket_do_extra_handshake(request):
	# 接受全部的連線要求
	pass

def web_socket_transfer_data(request):
	# 保存所有Client的連線
	connections.append(request)
	while True:
		try:
			# 等到接收到由Client傳來的訊息
			message = msgutil.receive_message(request)
		except Exception:
			# 由於連線中斷所以處理結束
			return
		# 傳送訊息給所有Client
		for con in connections:
			try:
				# 傳送訊息
				msgutil.send_message(con, message)
			except Exception:
				# 移除不能夠傳送訊息的Client
				connections.remove(con)
