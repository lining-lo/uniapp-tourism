<template>
	<view class="line">
		<map
			v-if="projectInfo"
			id="myMap"
			style="width: 100%; height: 900rpx"
			:markers="projectInfo.markers"
			:latitude="projectInfo.location[0]"
			:longitude="projectInfo.location[1]"
			:show-scale="true"
		></map>
		<view class="line-content">
			<view class="content-title" v-if="projectInfo">当前游玩项目：{{ projectInfo.title }}</view>
			<view class="content-starts">
				<text>项目推荐：</text>
				<up-rate v-if="projectInfo" v-model="projectInfo.count"></up-rate>
			</view>
			<view class="content-scrollview">
			  <up-scroll-list
			    :indicator="true"
			    indicatorColor="#fff0f0"
			    indicatorActiveColor="#f56c6c"
			  >
			    <view class="item" v-if="projectInfo" v-for="(item, index) in projectInfo.other" :key="item.id">
			      <image class="img" :src="item.url" mode="aspectFill"></image>
			      <view class="title" v-if="projectInfo">{{ item.name }}</view>
			    </view>
			  </up-scroll-list>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app';
import { getProjectInfo } from '../../api/api';
import { ref } from 'vue';

// 项目信息
const projectInfo = ref();
// 获取用户信息
const getProjectInfoData = async (id) => {
	const data = await getProjectInfo(id);
	projectInfo.value = data;
	console.log(projectInfo.value);
};

onLoad((props) => {
	getProjectInfoData(props.id);
});
</script>

<style lang="scss">
.line {
	.line-content {
		margin: 30rpx 0;
		padding: 10rpx;
		.content-title {
			font-size: 20px;
			font-weight: 600;
			margin-bottom: 30rpx;
		}
	}
	.content-starts {
		display: flex;
		margin-bottom: 30rpx;
		font-size: 18px;
	}
	.content-scrollview{
		.item{
			margin-right: 20rpx;
			image{
				width: 320rpx;
				height: 200rpx;
				border-radius: 14rpx;
			}
		}
	}
}
</style>
