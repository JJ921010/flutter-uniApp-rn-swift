<template>
	<view class="indexPage">
		<view class="index-swiper-view"> 
			<swiper
				:indicator-dots="swiper.indicatorDots"
				:autoplay="swiper.autoplay"
				:interval="swiper.interval"
				:duration="swiper.duration"
				:circular="swiper.circular"
				:indicator-active-color="swiper.indicatorActiveColor"
				:previous-margin="swiper.previousMargin"
				:next-margin="swiper.previousMargin"
				class="index-swiper"
			>
				<swiper-item v-for="(item, index) in bannersList" :key="item.index" @tap="toRankingList(index)" class="index-swiper-item">
					<image :src="item.imageUrl" mode="scaleToFill" class="index-swiper-item-image"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="page-index-title" @tap="openPersonalizedList()">
			<text class="page-index-title-text">推</text>荐歌单
		</view>
		<scroll-view class="scroll-persona-view" scroll-x>
			<view style="display: flex; flex-direction: row;">
				<view
					class="scroll-persona-item"
					v-for="(item, index) in personalizedList"
					:key="item.index"
					v-if="index <= 10"
					@tap="openPersonalizedDetail({item})"
				>
					<image class="scroll-persona-item-image" :src="item.picUrl" mode="scaleToFill"></image>
					<text class="scroll-persona-item-name">{{ item.name }}</text>
				</view>
			</view>
		</scroll-view>
		<!-- #ifndef MP-WEIXIN -->
		<view class="page-index-title">
			<text class="page-index-title-text">M</text>V排行
		</view>
		<scroll-view class="scroll-mv-view" scroll-x>
			<view style="display: flex; flex-direction: row;">
				<view
					class="scroll-mv-item"
					v-for="item in topMvList"
					:key="item.index"
					@tap="openMvDetail({item})"
				>
					<image :src="item.cover" mode="scaleToFill" class="scroll-mv-item-image"></image>
					<text class="scroll-persona-item-name">{{ item.name }}</text>
					<view class="playBtn"> <view class="icon"></view> </view>
				</view>
			</view>
		</scroll-view>
		<!-- #endif -->
		<view class="page-index-title">
			<text class="page-index-title-text">歌</text>手榜
		</view>
		<scroll-view class="scroll-song-view" scroll-x>
			<view style="display: flex; flex-direction: row;">
				<view
					class="scroll-song-item"
					v-for="(item, index) in toplistArtistList"
					:key="item.index"
					v-if="index <= 20"
					@tap="toSingerInfo(index)"
				>
					<image :src="item.img1v1Url" mode="scaleToFill" class="scroll-song-image"></image>
					<text class="scroll-song-name">{{ item.name }}</text>
				</view>
			</view>
		</scroll-view>
		<view class="page-index-title">
			<text class="page-index-title-text">推</text>荐节目
		</view>
		<programsList :programsList="programsList"></programsList>
	</view>
</template>

<script>
	import programsList from '@/components/programsList.vue';
	export default {
		data() {
			return {
				swiper: {
					indicatorDots: true,
					autoplay: true,
					interval: 5000,
					duration: 500,
					circular: true,
					indicatorActiveColor: '#e91e63',
					previousMargin: '10px'
				},
				bannersList: '',
				personalizedList: '',
				topMvList: '',
				toplistArtistList: '',
				djRecommendList: '',
				djListNumber: '5',
				programsList: ''
			}
		},
		components: {
			programsList
		},
		onLoad() {
			this.getDataList(); //请求所有数据
		},
		onPullDownRefresh() {
			//下拉请求所有数据
			this.getDataList(); //请求所有数据
			uni.stopPullDownRefresh();
		},
		methods: {
			getDataList(){
				this.getBannerList(); //获取banner
				this.getPersonalizedList(); //获取推荐歌单
				// #ifndef MP-WEIXIN
				this.getTopMvList(); //获取mv排行
				// #endif
				this.getToplistArtistList(); //获取歌手榜单
				//this.getDjRecommendList(); //获取推荐电台
				this.getProgramRecommendList(); //获取推荐节目
			},
			getBannerList() {
				//获取banner
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.banner,
					success: res => {
						uni.hideLoading();
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.bannersList = res.data.banners;
						} else {
							//console.error("数据获取失败");
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
			getTopMvList() {
				//获取mv排行
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.topMv,
					data: {
						limit: 10
					},
					success: res => {
						uni.hideLoading();
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.topMvList = res.data.data;
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
			getToplistArtistList() {
				//获取歌手榜单
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.toplistArtist,
					data: {
						limit: 10
					},
					success: res => {
						uni.hideLoading();
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.toplistArtistList = res.data.list.artists;
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
			getDjRecommendList() {
				//获取推荐电台
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.djRecommend,
					data: {
						limit: 10
					},
					success: res => {
						uni.hideLoading();
						//console.log(res.data);
						if (res.data.code == 200) {
							_this.djRecommendList = res.data.djRadios;
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
			getProgramRecommendList() {
				//获取推荐节目
				var _this = this;
				uni.showLoading({
					title: '加载中'
				});
				uni.request({
					url: _this.MusicApi.server + _this.MusicApi.type.programRecommend,
					success: res => {
						uni.hideLoading();
						if (res.data.code == 200) {
							_this.programsList = res.data.programs;
						} else {
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
			openMvDetail(model) {
				//跳转mv详情
				var mvid = model.item.id;
				uni.navigateTo({
					url: '../mvDetail/mvDetail?mvid=' + mvid
				});
			},
			openDjList() {
				//跳转推荐节目详情
				uni.navigateTo({
					url: '../djList/djList'
				});
			},
			openPersonalizedDetail(model) {
				//跳转歌单详情
				var id = model.item.id;
				uni.navigateTo({
					url: '../getPlaylistDetail/getPlaylistDetail?id=' + id
				});
			},
			openPersonalizedList() {
				//跳转推荐歌单列表
				uni.navigateTo({
					url: '../personalizedList/personalizedList'
				});
			},
			toSingerInfo(index) {
				//跳转歌手详情
				var data = {
					picUrl: encodeURIComponent(this.toplistArtistList[index].img1v1Url),
					name: this.toplistArtistList[index].name,
					id: this.toplistArtistList[index].id
				};
				data = JSON.stringify(data);
				uni.navigateTo({
					url: '../singerInfo/singerInfo?data=' + data
				});
			},
			toRankingList(e) {
				//因为对banner做太多的处理，先跳到一个榜单
				uni.navigateTo({
					url: '../rankingList/rankingList?id=' + e
				});
			},
			openMvList() {
				//跳转推荐歌单列表
				uni.navigateTo({
					url: '../mvList/mvList'
				});
			}
		}
	}
</script>

<style>
	.indexPage {
		flex: 1;
		display: flex;
		margin-left: 14upx;
		margin-right: 14upx;
		margin-top: 12upx;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	
	.index-swiper-view {
		height: 300upx;
		width: 100%;
	}
	
	.index-swiper {
		height: 300upx;
		border-radius: 10upx;
		overflow: hidden;
	}
	
	.index-swiper-item {
		padding: 0upx 5upx;
		box-sizing: border-box;
		height: 300upx;
	}
	
	.index-swiper-item-image {
		width: 100%;
		height: 300upx;
		border-radius: 10upx;
		box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.1);
	}
	
	.page-index-title{
		height: 100upx;
		align-items: center;
		font-size: 40upx;
		display: flex;
	}
	
	.page-index-title-text {
		color: #e91e63;
		font-size: 50upx;
	}
	
	.scroll-persona-view {
		height: 260upx;
		width: 100%;
	}
	
	.scroll-persona-item{
		width: 260upx;
		height: 260upx;
		margin-right: 12upx;
		position: relative;
	}
	
	.scroll-persona-item-image {
		border-radius: 10upx;
		height: 260upx;
		width: 260upx;
	}
	
	.scroll-persona-item-name {
		background-color: rgb(0, 0, 0, 0.3);
		width: 100%;
		border-radius: 0upx 0upx 10upx 10upx;
		left: 0upx;
		bottom: 0upx;
		font-size: 10px;
		padding: 15upx;
		color: #fff;
		position: absolute;
		box-sizing: border-box;
		display: inline-block;
		white-space: nowrap; 
		overflow: hidden;
		text-overflow:ellipsis;
	}
	
	.scroll-mv-view {
		height: 240upx;
		width: 100%;
	}
	
	.scroll-mv-item{
		width: 360upx;
		height: 240upx;
		margin-right: 12upx;
		position: relative;
	}
	
	.scroll-mv-item-image {
		border-radius: 10upx;
		height: 240upx;
		width: 360upx;
	}
	
	.scroll-song-view {
		width: 100%;
		height: 200upx;
	}
	
	.scroll-song-item {
		width: 200upx;
		height: 200upx;
		margin-right: 12upx;
		position: relative;
	}
	
	.scroll-song-image {
		width: 200upx;
		height: 200upx;
		border-radius: 50%;
	}
	
	.scroll-song-name {
		background-color: rgb(0, 0, 0, 0.3);
		width: 100%;
		top: 90upx;
		left: 0upx;
		font-size: 10px;
		color: #fff;
		position: absolute;
		box-sizing: border-box;
		display: inline-block;
		white-space: nowrap; 
		overflow: hidden;
		text-overflow:ellipsis;
		text-align: center;
		z-index: 1;
	}
	
</style>
