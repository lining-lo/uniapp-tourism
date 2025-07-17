<template>
	<view class="detail">
		<up-navbar title="" bg-color="#00000000" :autoBack="true" left-icon-color="#fff" />
		<view class="detail-bg">
			<image v-if="detail" :src="detail.img" mode=""></image>
		</view>
		<view class="detail-content">
			<view class="content-title">
				<view v-if="detail" class="title-name">
					{{ detail.title }}
				</view>
				<view class="title-tag">5A级景区</view>
			</view>
			<view class="content-introduction">
				<view class="introduction-title">景区介绍：</view>
				<view v-if="detail" class="introduction-msg">{{ detail.introduce }}</view>
			</view>
			<view class="content-time">
				<view class="time-title">开放时间：</view>
				<view v-if="detail" class="time-msg">{{ detail.times }}</view>
			</view>
			<view class="content-recommend">
				<view class="recommend-title">游玩推荐</view>
				<view class="recommend-list">
					<view class="list-item" @click="toLine(item)" v-for="(item, index) in project" :key="index">
						<image :src="item.url" mode=""></image>
						<view class="item-title">{{ item.title }}</view>
						<view class="item-desc">
							<span>📍</span>
							<span>{{ item.desc }}</span>
						</view>
						<view class="item-tag">{{ item.tag }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { getProject } from '../../api/api';

// 传入的内容
const detail = ref();
onLoad((opt) => {
	detail.value = JSON.parse(decodeURIComponent(opt.item));
	// console.log(detail.value);
	getProjectData();
});

// 游玩项目
const project = ref([]);
// 获取游玩项目
const getProjectData = async () => {
	const data = await getProject();
	project.value = data;
	// console.log(data);
};

// 跳转到路线
const toLine = (item)=>{
	uni.navigateTo({
		url:`/pages/line/line?id=${item.id}`
	})
}
</script>

<style lang="scss">
.detail {
	width: 100%;
	.detail-bg {
		width: 100%;
		height: 600rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.detail-content {
		position: absolute;
		width: 100%;
		height: 500px;
		padding: 10rpx 20rpx;
		border-radius: 20rpx 20rpx 0 0;
		box-sizing: border-box;
		margin-top: -20rpx;
		z-index: 1;
		background-color: #fff;
		.content-title {
			margin: 30rpx 0;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			.title-name {
				font-size: 17px;
				margin-right: 7px;
				font-weight: 600;
			}
			.title-tag {
				font-size: 13px;
				font-weight: 600;
				background-color: #5a99f8;
				color: #fff;
				padding: 4rpx 8rpx;
				border-radius: 20rpx;
			}
		}
		.content-introduction {
			.introduction-title {
				font-size: 14px;
				font-weight: 700;
				display: inline;
			}
			.introduction-msg {
				color: #b5b8ba;
				display: inline;
			}
		}
		.content-time {
			margin: 30rpx 0;
			.time-title {
				font-size: 14px;
				font-weight: 700;
				display: inline;
			}
			.time-msg {
				color: #b5b8ba;
				display: inline;
			}
		}
		.content-recommend {
			.recommend-title {
				font-size: 17px;
				margin-right: 7px;
				font-weight: 600;
				margin-bottom: 30rpx;
			}
			.recommend-list {
				width: 100%;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.list-item {
					width: 48%;
					box-sizing: border-box;
					margin-bottom: 20rpx;
					box-shadow: 1px 2px 3px gainsboro;
					border-radius: 20rpx 20rpx 0 0;
					position: relative;
					image {
						box-sizing: border-box;
						width: 100%;
						height: 200rpx;
						border-radius: 20rpx 20rpx 0 0;
						margin-bottom: 20rpx;
					}
					.item-title {
						font-size: 14px;
						font-weight: 700;
						margin-bottom: 20rpx;
					}
					.item-desc {
						display: flex;
						margin-bottom: 20rpx;
						color: #b5b8ba;
						font-size: 14px;
					}
					.item-tag {
						position: absolute;
						top: 0;
						left: 0;
						color: #fff;
						background-color: #eead8a;
						padding: 4rpx 20rpx;
						border-radius: 20rpx 0 20rpx 0;
					}
				}
			}
		}
	}
}
</style>
