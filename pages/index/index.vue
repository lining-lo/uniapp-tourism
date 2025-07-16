<template>
	<view class="content">
		<up-search placeholder="搜索景点" bg-color="#e3e3e3" style="margin-top: 10rpx" v-model="keyword"></up-search>
		<up-swiper :list="bannerList" :showTitle="true" keyName="image" height="160" radius="8" :autoplay="true"></up-swiper>
		<up-notice-bar text="这是一个练习uniapp的旅游项目"></up-notice-bar>
		<view class="waterfall">
			<up-waterfall v-model="waterfallList">
				<template v-slot:left="{ leftList }">
					<view class="waterfall-item" v-for="(item, index) in leftList" :key="index">
						<up-lazy-load threshold="-450" border-radius="10" :image="item.img" :index="index"></up-lazy-load>
						<view class="item-title">
							{{ item.title }}
						</view>
						<view class="item-times">
							{{ item.times }}
						</view>
						<view class="item-tags">
							<view class="tag" v-for="(t, i) in item.tag" :key="i">
								{{ t }}
							</view>
						</view>
						<view class="item-dot">
							{{ item.isDot }}
						</view>
					</view>
				</template>
				<template v-slot:right="{ rightList }">
					<view class="waterfall-item" v-for="(item, index) in rightList" :key="index">
						<up-lazy-load threshold="-450" border-radius="10" :image="item.img" :index="index"></up-lazy-load>
						<view class="item-title">
							{{ item.title }}
						</view>
						<view class="item-times">
							{{ item.times }}
						</view>
						<view class="item-tags">
							<view class="tag" v-for="(t, i) in item.tag" :key="i">
								{{ t }}
							</view>
						</view>
						<view class="item-dot">
							{{ item.isDot }}
						</view>
					</view>
				</template>
			</up-waterfall>
		</view>
		<view class="top" v-if="isShowTop" @click="toTop">
			<up-icon name="arrow-upward" color="#fff" size="20"></up-icon>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getBanner, getHomeList } from '../../api/api';
import { onLoad, onReachBottom, onPageScroll } from '@dcloudio/uni-app';

// 搜索内容
const keyword = ref('');

// 轮播图数据
const bannerList = ref([]);
// 获取轮播图数据
const getbannerList = async () => {
	const data = await getBanner();
	bannerList.value = data.bannerList;
	// console.log(data)
};

// 首页列表数据
const waterfallList = ref([]);
// 获取首页列表数据
const getWaterfallList = async () => {
	const data = await getHomeList();
	waterfallList.value = data;
};

// 触底事件
onReachBottom(() => {
	setTimeout(() => {
		addRandomData();
	}, 500);
});
// 模拟触底后端返回数据
const addRandomData = () => {
	for (var i = 0; i < 10; i++) {
		let index = uni.$u.random(0, waterfallList.value.length - 1);
		let item = JSON.parse(JSON.stringify(waterfallList.value[index]));
		item.id = uni.$u.guid();
		waterfallList.value.push(item);
	}
};

// 控制置顶按钮
const isShowTop = ref(false);
// 滚动事件
onPageScroll((e) => {
	if (e.scrollTop > 400) {
		isShowTop.value = true;
	} else {
		isShowTop.value = false;
	}
});
// 置顶
const toTop = () => {
	uni.pageScrollTo({
		scrollTop: 0,
		duration: 300
	});
};

onLoad(() => {
	getbannerList();
	getWaterfallList();
});
</script>

<style lang="scss">
.content {
	width: 100%;
	padding: 20rpx;
	box-sizing: border-box;
	background-color: #f8f8f8;
	.waterfall {
		width: 100%;
		padding: 20rpx 0;
		box-sizing: border-box;
		.waterfall-item {
			width: 100%;
			box-sizing: border-box;
			padding: 10rpx;
			margin: 10rpx;
			border-radius: 10rpx;
			position: relative;
			background-color: #fff;
			.item-title {
				font-size: 30rpx;
				margin-top: 10rpx;
				color: #303133;
			}
			.item-times {
				font-size: 24rpx;
				color: #777;
				margin-top: 10rpx;
			}
			.item-tags {
				width: 100%;
				display: flex;
				margin-top: 10rpx;

				/* 第 1 个 .tag 的样式 */
				.tag:nth-child(1) {
					color: #ffaa00;
					border: 1px solid rgb(252, 163, 129);
				}

				/* 第 2 个 .tag 的样式（如果需要） */
				.tag:nth-child(2) {
					color: #00aaff;
					border: 1px solid #00aaff;
				}

				.tag {
					font-size: 20rpx;
					padding: 4rpx 14rpx;
					border-radius: 50rpx;
					margin-right: 10rpx; /* 增加间距避免拥挤 */
				}
			}
			.item-dot {
				position: absolute;
				top: 20rpx;
				right: 20rpx;
				padding: 3rpx 10rpx;
				border: 1rpx solid red;
				color: #fff;
				background-color: red;
				border-radius: 10rpx;
			}
		}
	}
	.top {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		right: 30rpx;
		bottom: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
