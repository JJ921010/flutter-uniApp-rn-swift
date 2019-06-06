<template>
	<view class="simiMvList">
		<view class="item" v-for="item in singerMvs" :key="item.id" @tap="openMvDetail(item.id)">
			<view class="pic"> <image :src="item.imgurl16v9" mode="aspectFill"></image> </view>
			<view class="info">
				<view class="name">{{ item.name }}</view>
				<view class="artistName">{{ item.artistName }}</view>
			</view>
			<view class="btn"> <text></text><text></text><text></text> </view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ['singerMvs'],
	methods: {
		openMvDetail(mvid) {
			//跳转mv详情
			var mvid = mvid;
			uni.navigateTo({
				url: '../mvDetail/mvDetail?mvid=' + mvid
			});
		}
	}
};
</script>

<style>

.simiMvList {
	margin-left: 20upx;
	margin-right: 20upx;
}

.simiMvList .item {
	background: #fff;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.2);
	margin-bottom: 40upx;
	display: flex;
}

.simiMvList .item .pic {
	width: 270upx;
	height: 170upx;
	margin-right: 30upx;
}

.simiMvList .item .pic image {
	max-width: 100%;
	height: 170upx;
	border-radius: 10upx;
}

.simiMvList .item .info {
	flex: 1;
}

.simiMvList .item .info .name {
	margin-top: 25upx;
	font-weight: bold;
	font-size: 30upx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.simiMvList .item .info .artistName {
	color: #999;
	font-size: 24upx;
}

.simiMvList .item .btn {
	margin-top: 50upx;
	margin-left: 10upx;
	width: 85upx;
}
.simiMvList .item .btn text {
	display: inline-block;
	width: 10upx;
	height: 10upx;
	border-radius: 50%;
	background: #999;
	margin: 0upx 5upx;
}
	
</style>
