import http from "./http";

// 首页 banner
export const getBanner = ()=>{
	return http('/user/getBanner')
}