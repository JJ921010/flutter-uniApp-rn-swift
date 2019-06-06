<template>
	<view class="privileges">
		<view
			class="item"
			v-for="(item, index) in singerHotSongs"
			:key="item.index"
			@tap="toPlay(item.id)"
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
</template>

<script>
export default {
	data() {
		return {};
	},
	props: ['singerHotSongs'],
	methods: {
		toPlay(id) {
			//跳到音乐播放页面
			var id = id;
			//console.log(id);
			uni.navigateTo({
				url: '../play/play?id=' + id
			});
		}
	}
};
</script>

<style>
	
.privileges {
	margin-left: 20upx;
	margin-right: 20upx;
}

.privileges .item {
	background: #fff;
	border-radius: 10upx;
	box-shadow: 0 0 10px hsla(0, 0%, 51%, 0.3);
	margin-top: 32upx;
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
