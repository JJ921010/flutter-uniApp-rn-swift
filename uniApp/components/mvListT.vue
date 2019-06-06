<template>
	<view class="mvListTPage">
		<view
			class="mvListTPage-item"
			v-for="(item, index) in data"
			:key="item.id"
			@tap="openMvDetail(item.id)"
		>
			<image :src="item.cover ? item.cover : item.picUrl" mode="scaleToFill" class="mvListTPage-item-image"></image>
			<text class="mvListTPage-item-name">{{ item.name }}</text>
			<view class="mvListTPage-item-playBtn"> <view class="mvListTPage-item-playBtn-icon"></view> </view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ['data'],
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
	.mvListTPage {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.mvListTPage-item {
		z-index: 1;
		overflow: hidden;
		height: 400upx;
		margin-bottom: 25upx;
		border-radius: 10upx;
		box-shadow: 0 0 10px hsla(0, 0%, 50%, 0.1);
		margin-left: 12upx;
		margin-right: 12upx;
		background-color: #007AFF;
		position: relative;
	}
	.mvListTPage-item-name {
		position: absolute;
		z-index: 2;
		left: 0;
		bottom: 0;
		width: 100%;
		color: #fff;
		font-size: 22upx;
		box-sizing: border-box;
		padding: 12upx 16upx;
		background: rgba(0, 0, 0, 0.5);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.mvListTPage-item-image {
		width: 100%;
		height: 400upx;
		border-radius: 10upx;
	}
	.mvListTPage-item-playBtn {
		left: 40upx;
		top: 40upx;
		width: 100upx;
		height: 100upx;
		position: absolute;
		background: rgba(255, 255, 255, 0.6);
		border-radius: 50%;
	}

	.mvListTPage-item-playBtn-icon {
		margin: 32upx 0upx 0upx 40upx;
		border-top: 16upx solid transparent;
		border-bottom: 16upx solid transparent;
		border-left: 30upx solid #e91e63;
		position: absolute;
	}
</style>
