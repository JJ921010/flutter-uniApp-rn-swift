<template>
	<view class="indexPage">
		<!-- <nowPlay></nowPlay> -->
		<view class="left-tab">
			<view class="tab-title-view">
				<text :class="tabNum == 1 ? 'tab-title-view-item-selected' : 'tab-title-view-item'" @tap="tabNum = 1"
					>最新MV</text
				>
				<text :class="tabNum == 2 ? 'tab-title-view-item-selected' : 'tab-title-view-item'" @tap="tabNum = 2"
					>MV排行</text
				>
				<text :class="tabNum == 3 ? 'tab-title-view-item-selected' : 'tab-title-view-item'" @tap="tabNum = 3"
					>推荐MV</text
				>
			</view>
			<view class="tab-botton-view">
				<view class="tab-botton-view" v-if="tabNum == 1"><mvListT style="width: 100%;" :data="mvFirstList"></mvListT></view>
				<view class="tab-botton-view" v-if="tabNum == 2"><mvListT style="width: 100%;" :data="topMvList"></mvListT></view>
				<view class="tab-botton-view" v-if="tabNum == 3"
					><mvListT style="width: 100%;" :data="personalizedMvList"></mvListT
				></view>
			</view>
		</view>
	</view>
</template>

<script>
import nowPlay from '@/components/nowPlay.vue';
import mvListT from '@/components/mvListT.vue';
export default {
	data() {
		return {
			tabNum: 1,
			mvFirstList: '',
			topMvList: '',
			personalizedMvList: ''
		};
	},
	onLoad() {
		this.getDataList();	//请求所有数据
	},
	onPullDownRefresh() {
		//下拉请求所有数据
		this.getDataList(); //请求所有数据
		uni.stopPullDownRefresh();
	},
	components: {
		nowPlay,
		mvListT
	},
	methods: {
		getDataList(){
			//获取所有数据
			this.getMvFirstList(); //获取最新MV
			this.getTopMvList(); //获取mv排行
			this.getPersonalizedMvList(); //获取推荐mv
		},
		getMvFirstList() {
			//获取最新MV
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.mvFirst,
				success: res => {
					uni.hideLoading();
					//console.log(res.data.data);
					if (res.data.code == 200) {
						_this.mvFirstList = res.data.data;
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
		getTopMvList() {
			//获取MV排行
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.topMv,
				success: res => {
					uni.hideLoading();
					//console.log(res.data.data);
					if (res.data.code == 200) {
						_this.topMvList = res.data.data;
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
		getPersonalizedMvList() {
			//获取推荐MV
			var _this = this;
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
				url: _this.MusicApi.server + _this.MusicApi.type.personalizedMv,
				success: res => {
					uni.hideLoading();
					if (res.data.code == 200) {
						_this.personalizedMvList = res.data.result;
						//console.log(_this.personalizedMvList)
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
		}
	}
};
</script>

<style>
	
	.mvPage {
		flex: 1;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	
	.tab-title-view {
		height: 100upx;
		display: flex;
		flex-direction: row;
		width: 100%;
		background-color: #FFFFFF;
		border-bottom-width: 1upx;
		border-bottom-color: #808080;
	}
	
	.tab-title-view-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000000;
	}
	
	.tab-title-view-item-selected {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #e91e63;
	}
	
	.tab-botton-view {
		flex: 1;
		display: flex;
		background-color: #FFFFFF;
	}
	
.left-tab .tab-title {
	text-align: center;
}
.left-tab .tab-title .item {
	display: inline-block;
	box-shadow: 0 0 10px hsla(0, 0%, 50%, 0.1);
	text-align: center;
	font-size: 26upx;
	padding: 20upx 40upx;
	margin: 0upx 20upx 30upx;
	border-radius: 10upx;
	color: #888;
}
.left-tab .tab-title .item.active {
	background: #e91e63;
	color: #fff;
}
</style>
