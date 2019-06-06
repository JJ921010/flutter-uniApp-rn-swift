<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.playBtn {
		position: absolute;
		z-index: 99;
		left: 30upx;
		top: 30upx;
		width: 80upx;
		height: 80upx;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 50%;
	}
	
	.playBtn .icon {
		margin: 26upx 0upx 0upx 30upx;
		width: 0;
		height: 0;
		border-top: 14upx solid transparent;
		border-bottom: 14upx solid transparent;
		border-left: 28upx solid #e91e63;
		border-radius: 5upx;
	}
	
</style>
