<template>
	<view class="my-containter">
		<view class="containter-top">
			<view class="top-btn">
				<view class="btn-left">
					<up-icon name="gift-fill" color="#fff" size="28"></up-icon>
					<span>签到</span>
				</view>
				<view class="btn-right">
					<up-icon name="setting" color="#fff" size="28"></up-icon>
					<up-icon name="chat" color="#fff" size="28"></up-icon>
				</view>
			</view>
			<view class="top-card">
				<view class="card-user">
					<view @click="toLogin" class="user-avator" style="margin-right: 20rpx">
						<image src="/static/tt.jpg" mode=""></image>
					</view>
					<view class="user-name">登录 / 注册</view>
				</view>
				<view class="card-info">
					<view class="info-praise">
						<span class="count">12</span>
						<span class="name">点赞</span>
					</view>
					<view class="info-praise">
						<span class="count">12</span>
						<span class="name">点赞</span>
					</view>
					<view class="info-praise">
						<span class="count">12</span>
						<span class="name">点赞</span>
					</view>
					<view class="info-praise">
						<span class="count">12</span>
						<span class="name">点赞</span>
					</view>
				</view>
			</view>
		</view>
		<view class="container-list">
			<view class="list-item">
				<view class="item-left">
					<up-icon name="photo" color="##959495"></up-icon>
					<span style="margin-left: 10rpx">个人信息</span>
				</view>
				<div class="item-right">
					<span style="margin-right: 10rpx">右侧文字</span>
					<up-icon name="arrow-right" color="##959495"></up-icon>
				</div>
			</view>
			<view class="list-item">
				<view class="item-left">
					<up-icon name="photo" color="##959495"></up-icon>
					<span style="margin-left: 10rpx">个人信息</span>
				</view>
				<div class="item-right">
					<span style="margin-right: 10rpx">右侧文字</span>
					<up-icon name="arrow-right" color="##959495"></up-icon>
				</div>
			</view>
			<view class="list-item">
				<view class="item-left">
					<up-icon name="photo" color="##959495"></up-icon>
					<span style="margin-left: 10rpx">个人信息</span>
				</view>
				<div class="item-right">
					<span style="margin-right: 10rpx">右侧文字</span>
					<up-icon name="arrow-right" color="##959495"></up-icon>
				</div>
			</view>
			<view class="list-item">
				<view class="item-left">
					<up-icon name="photo" color="##959495"></up-icon>
					<span style="margin-left: 10rpx">个人信息</span>
				</view>
				<div class="item-right">
					<span style="margin-right: 10rpx">右侧文字</span>
					<up-icon name="arrow-right" color="##959495"></up-icon>
				</div>
			</view>
			<view class="list-item">
				<view class="item-left">
					<up-icon name="photo" color="##959495"></up-icon>
					<span style="margin-left: 10rpx">个人信息</span>
				</view>
				<div class="item-right">
					<span style="margin-right: 10rpx">右侧文字</span>
					<up-icon name="arrow-right" color="##959495"></up-icon>
				</div>
			</view>
		</view>
		<up-popup :show="isShowPopup" round="20">
			<view class="popup">
				<view class="popup-title">
					<span>获取您的昵称、头像</span>
					<span style="float: right;padding-right: 20rpx;">×</span>
				</view>
			</view>
		</up-popup>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { getUserInfo, login } from '../../api/api';
import { ref } from 'vue';

// 控制弹出层
const isShowPopup = ref(true);
// 关闭弹出层
const close = ()=>{
	isShowPopup.value = false
}

// 用户信息
const userInfo = ref();
// 微信授权
const toLogin = () => {
	uni.showModal({
		title: '温馨提示',
		content: '亲，授权登录微信后才能正常实现小程序',
		success: (res) => {
			if (res.confirm) {
				uni.login({
					success: async (data) => {
						const { token } = await login(data.code);
						uni.setStorageSync('token', token);
						const result = await getUserInfo();
						userInfo.value = result;
						isShowPopup.value = true;
					}
				});
			}
		}
	});
};
</script>

<style lang="scss">
.my-containter {
	width: 100%;
	height: 100vh;
	padding: 20rpx;
	box-sizing: border-box;
	background-color: #f8f8f8;
	.containter-top {
		width: 100%;
		height: 300rpx;
		background-color: #52a7f9;
		box-sizing: border-box;
		.top-btn {
			width: 94%;
			height: 80rpx;
			padding: 60rpx 20rpx;
			margin: 0 auto;
			box-sizing: border-box;
			background-color: #52a7f9;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			.btn-left {
				display: flex;
				align-items: center;
			}
			.btn-right {
				display: flex;
				align-items: center;
			}
		}
		.top-card {
			width: 94%;
			height: 300rpx;
			margin: 20rpx auto;
			background-color: #fff;
			border-radius: 10rpx;
			box-sizing: border-box;
			.card-user {
				width: 100%;
				height: 50%;
				padding: 20rpx;
				padding-bottom: 0;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				.user-avator {
					width: 110rpx;
					height: 110rpx;
					border-radius: 50%;
					background-color: orange;
					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				.user-name {
				}
			}
			.card-info {
				width: 100%;
				height: 50%;
				display: flex;
				justify-content: space-around;
				.info-praise {
					width: 80rpx;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}
	.container-list {
		width: 100%;
		margin-top: 200rpx;
		box-sizing: border-box;
		.list-item {
			width: 100%;
			height: 80rpx;
			box-sizing: border-box;
			padding: 10rpx 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 6rpx;
			background-color: #fff;
			font-size: 26rpx;
			.item-left {
				display: flex;
				align-items: center;
			}
			.item-right {
				display: flex;
				align-items: center;
			}
		}
	}
	.popup{
		padding: 20rpx;
		border-radius: 20rpx 20rpx 0 0;
		.popup-title{
			width: 100%;
			text-align: center;
			margin-bottom: 20rpx;
			font-size: 40rpx;
		}
	}
}
</style>
