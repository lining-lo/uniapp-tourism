<template>
	<view class="like">
		<view class="like-item" @click="toDetail(item)" v-for="(item, index) in likeList" :key="index">
			<image v-if="likeList" :src="item.img" mode=""></image>
			<view v-if="likeList" class="item-title">{{ item.title }}</view>
			<view v-if="likeList" class="item-introduce">{{ item.introduce }}</view>
			<view class="item-tag">喜爱</view>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { getLike } from '../../api/api';
import { ref } from 'vue';

// 喜爱数据
const likeList = ref();
// 获取喜爱数据
const getLikeList = async () => {
	const data = await getLike();
	likeList.value = data;
	// console.log(likeList.value);
};
onLoad(() => {
	getLikeList();
});

// 跳转到详情页
const toDetail = (item)=>{
	const can = JSON.stringify(item)
	uni.navigateTo({
		url:`/pages/detail/detail?item=${encodeURIComponent(can)}`
	})
}
</script>

<style lang="scss">
.like {
	box-sizing: border-box;
	padding: 10rpx;
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	.like-item {
		position: relative;
		box-sizing: border-box;
		width: 48%;
		margin-bottom: 20rpx;
		border-radius: 20rpx 20rpx 0 0;
		box-shadow: 1px 2px 3px gainsboro;
		image {
			box-sizing: border-box;
			width: 100%;
			border-radius: 20rpx 20rpx 0 0;
			height: 200rpx;
			margin-bottom: 16rpx;
		}
		.item-title {
			margin-bottom: 16rpx;
			font-size: 16px;
			font-weight: 600;
			padding: 0 10rpx;
		}

		.item-introduce {
			margin-bottom: 16rpx;
			padding: 0 10rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2; /* 控制显示的行数，这里是 2 行 */
			overflow: hidden;
			text-overflow: ellipsis;
			color: #c0bfbd;
		}
		.item-tag{
			position: absolute;
			top: 0;
			right: 0;
			color: #fff;
			background-color: #eead8a;
			padding: 4rpx 20rpx;
			border-radius: 20rpx 0 20rpx 0;
		}
	}
}
</style>
