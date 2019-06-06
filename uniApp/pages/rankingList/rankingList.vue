<template>
	<view style="display: flex; flex-direction: column;" v-if="!playlist== ''">
		<view style="height: 300upx; flex-direction: row; display: flex; width: 100%;">
			<view class="coverImgUrls">
				<image :src="playlist.coverImgUrl" mode="scaleToFill"></image>
			</view>
			<view class="playlistInfo">
				<view class="name">{{ playlist.name }}</view>
				<view class="description">{{ playlist.description }}</view>
			</view>
		</view>
		<view class="privileges">
			<view
				class="item"
				v-for="(item, index) in playlist.tracks"
				:key="item.index"
				@tap="toPlay({item})"
			>
				<view class="index">{{ index + 1 }}</view>
				<view class="info">
					<view class="name">{{ item.name }}</view>
					<text v-for="(childItem, i) in item.ar" :key="childItem.i" class="arName"
						>{{ childItem.name }}
					</text>
				</view>
				<view class="btn"> <text></text><text></text><text></text> </view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			id: '',
			playlist: '',
			playlistDetailSwith: false
		};
	},
	components: {
	},
	onLoad: function(e) {
		//console.log(e);
		this.id = e.id;
		this.getTopList(); //获取歌单详情
	},
	methods: {
		getTopList() {
			//获取详情
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.topList,
				data: {
					idx: _this.id
				},
				success: res => {
					//console.log(res.data);
					if (res.data.code == 200) {
						_this.playlist = res.data.playlist;
						uni.hideLoading();
					} else {
						uni.hideLoading();
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
		toPlay(model) {
			//跳到音乐播放页面
			var id = model.item.id;
			uni.navigateTo({
				url: '../play/play?id=' + id
			});
		}
	}
};
</script>

<style>
	.coverImgUrls {
		left: 0upx;
		top: 0upx;
		height: 100%;
		min-width: 300upx;
		align-items: center;
		justify-content: center;
		display: flex;
		position: relative;
	}
	
	.coverImgUrls image {
		width: 240upx;
		height: 240upx;
		border-radius: 10upx;
		box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
	}
	
	.playlistInfo {
		margin-right: 12upx;
		margin-top: 24upx;
	}
	
	.playlistInfo .name {
		font-weight: bold;
		font-size: 32upx;
	}
	
	.playlistInfo .description {
		margin-top: 6upx;
		color: #999;
		font-size: 22upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	
	.privileges {
		margin-left: 12upx;
		margin-right: 12upx;
	}
	
	.privileges .item {
		background: #fff;
		border-radius: 10upx;
		box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
		margin-bottom: 20upx;
		padding: 20upx 32upx;
		display: flex;
	}
	
	.privileges .item .index {
		font-weight: bold;
		color: #666;
		margin-right: 32upx;
		line-height: 94upx;
		font-size: 48upx;
		padding: 0upx 10upx;
	}
	
	.privileges .item .info {
		flex: 1;
		overflow: hidden;
	}
	
	.privileges .item .info .name {
		width: 100%;
		font-size: 34upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.privileges .item .info .arName {
		font-size: 28upx;
		color: #888;
	}
	
	.privileges .item .btn {
		margin-top: 20upx;
		margin-left: 10upx;
		width: 70upx;
	}
	.privileges .item .btn text {
		display: inline-block;
		width: 10upx;
		height: 10upx;
		border-radius: 50%;
		background: #999;
		margin: 0upx 5upx;
	}
</style>
