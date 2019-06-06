<template>
	<view style="display: flex;" v-if="!personalizedList== ''">
		<view style="display: flex; flex-direction: row; flex-wrap: wrap; width: 100%; margin-left: 12upx;">
			<view
				class="item"
				v-for="(item, index) in personalizedList"
				:key="item.id"
				@tap="openPersonalizedDetail(item.id)"
			>
				<image :src="item.picUrl" mode="scaleToFill" class="item-image"></image>
				<text class="item-name">{{ item.name }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			personalizedList: ''
		};
	},
	components: {
	},
	onLoad() {
		this.getPersonalizedList();
	},
	methods: {
		getPersonalizedList() {
			//获取推荐歌单
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.personalized,
				success: res => {
					uni.hideLoading();
					//console.log(res.data);
					if (res.data.code == 200) {
						_this.personalizedList = res.data.result;
					} else {
						console.error('数据获取失败');
						uni.showToast({
							title: 'banner数据获取失败',
							duration: 5000,
							icon: 'none'
						});
					}
				},
				fail: err => {
					uni.hideLoading();
					uni.showToast({
						title: '请求超时',
						duration: 5000,
						icon: 'none'
					});
				}
			});
		},
		openPersonalizedDetail(id) {
			//跳转歌单详情
			var id = id;
			uni.navigateTo({
				url: '../getPlaylistDetail/getPlaylistDetail?id=' + id
			});
		}
	}
};
</script>

<style>
.item {
	display: inline-block;
    width: calc((100% - 12upx) / 2 - 12upx);
    height: 0;
    padding-bottom: calc((100% - 12upx) / 2 - 12upx);
    position: relative;
	margin-right: 12upx;
	margin-top: 12upx;
}
.item-name {
	position: absolute;
	z-index: 2;
	bottom: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	border-radius: 0upx 0upx 10upx 10upx;
	padding: 15upx;
	font-size: 22upx;
	width: 100%;
	box-sizing: border-box;
	color: #fff;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align: center;
}
.item-image {
	width: 100%;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
	height: 100%;
	left: 0;
	top: 0;
	position: absolute;
}
</style>
