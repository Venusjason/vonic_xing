<template>
<div class="page xlbCheckTel"  v-nav="{
	title: '手机验证',
	showBackButton:true,

	showMenuButton:false

}">
	<div class="page-content padding-top  ">	
		<ul class="listsLineWrap">
				
			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">新手机号</span>
					<div class="liRight">
						<input type="text" placeholder="请输入新手机号 " style="text-align:left;">
					</div>
				</div>
			</li>
		</ul>

		<div class="floorOne">
			
			<input type="text" placeholder="请输入验证码" class="fl">

			<span class="fr">获取验证码</span>
		</div>
		
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

  name: 'checkTel',

  data () {
    return {

    };
  },
  methods:{

  	postData(){

  		
  	}
  }
};
</script>

