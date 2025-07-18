import http from "./http";

// 首页 banner
export const getBanner = () => {
	return http('/user/getBanner')
}

// 首页列表
export const getHomeList = () => {
	return http('/user/getHomeList')
}

// 游玩项目
export const getProject = () => {
	return http('/detail/project')
}

// 用户登录
export const login = (data) => {
	return http(
		'/login', {
			code: data
		},
		'POST')
}

// 用户信息
export const getUserInfo = () => {
	return http('/getUserInfo')
}

// 路线
export const getProjectInfo = (id) => {
	return http('/project/info', {
		id
	})
}

// 喜爱
export const getLike = () => {
	return http('/like/list')
}