<template>
<div class="page xlbPsdSafe"  v-nav="{
	title: '密保设置',
	showBackButton:true,

	showMenuButton:false

}">
	<div class="page-content padding-top  ">	
		<ul class="listsLineWrap">
				
			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">密保问题一</span>
					<div class="liRight hasSelect">
						<span class="selectText">请选择问题   <i class="icon ion-ios-arrow-right fr" style="font-size: 20px;"></i></span>
						<select  >
							<option value="0">规划局规划局规划局</option>
						</select>
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">确认密码</span>
					<div class="liRight" style="width:40%;">
						<input type="text" placeholder="请输入答案" style="text-align:left;">
					</div>
				</div>
			</li>


		</ul>

		<ul class="listsLineWrap">
				
			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">密保问题二</span>
					<div class="liRight hasSelect">
						<span class="selectText">请选择问题   <i class="icon ion-ios-arrow-right fr" style="font-size: 20px;"></i></span>
						<select  >
							<option value="0">规划局规划局规划局</option>
						</select>
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">确认密码</span>
					<div class="liRight" style="width:40%;">
						<input type="text" placeholder="请输入答案" style="text-align:left;">
					</div>
				</div>
			</li>


		</ul>

		<ul class="listsLineWrap">
				
			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">密保问题三</span>
					<div class="liRight hasSelect">
						<span class="selectText">请选择问题   <i class="icon ion-ios-arrow-right fr" style="font-size: 20px;"></i></span>
						<select  >
							<option value="0">规划局规划局规划局</option>
						</select>
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">确认密码</span>
					<div class="liRight" style="width:40%;">
						<input type="text" placeholder="请输入答案" style="text-align:left;">
					</div>
				</div>
			</li>


		</ul>

		<div class="btnWrap">
			
			<md-button class="button button-positive loginBtn" @click="postData">确认提交</md-button>
		</div>

		<div class="onlyText">
			
			<p class="title">温馨提示</p>
			
			<p class="text">1，请牢记您设置的密码保护问题，密码问题将用于找回密码等重要操作；</p>
			<p class="text">2，使用过程遇到问题，请联系客服。</p>

		</div>
		
		

	</div>
	
</div>
</template>

<script>
export default {

  name: 'psdSafe',

  data () {
    return {

    };
  }
};
</script>

