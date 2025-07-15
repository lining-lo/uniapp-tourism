// api/http.js
const baseUrl = 'https://m1.apifoxmock.com/m1/4728220-0-default/api';

// 使用传统function声明（而非箭头函数）
function http(url, data = {}, method = 'GET') {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			data,
			method,
			header: {
				'token': uni.getStorageSync('token') || ''
			},
			success: (result) => {
				if (result.statusCode === 200) {
					if (result.data.code === 1) {
						resolve(result.data.data);
					} else {
						uni.showToast({
							title: result.data.msg || '请求失败',
							icon: 'none'
						});
						reject(result.data.msg);
					}
				} else {
					uni.showToast({
						title: `网络错误：${result.statusCode}`,
						icon: 'none'
					});
					reject(`HTTP错误：${result.statusCode}`);
				}
			},
			fail: (err) => {
				uni.showToast({
					title: '服务器请求异常',
					icon: 'none'
				});
				reject(err);
			}
		});
	});
}

export default http;