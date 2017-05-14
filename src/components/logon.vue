<template>
<div class="page  xlbLogon has-navbar"  v-nav="{ 
	
		title: '注册',
      showBackButton:true,  
      showMenuButton:true,
      menuButtonText:navRightText,
      onMenuButtonClick:toLogin
	
}">
	<div class="page-content" id="xlbLogonPage" style="background: #fff;">

		<ul class="formGroup">
			
			<li class="inputWithIcon">
				
				<i class="icon ion-android-person"></i>
				<input type="text" placeholder="请输入用户名">

				<p class="warn">至少3个字符或两个中文字符，最多18个字符</p>
			</li>

			<li class="inputWithIcon">
				
				<i class="icon ion-ios-locked"></i>
				<input type="text" placeholder="请输入密码">

				<p class="warn">6-16位字符，至少包含数字、字母</p>
			</li>

			<li class="inputWithIcon">
				
				<i class="icon ion-ios-locked"></i>
				<input type="text" placeholder="请确认密码">

				<p class="warn">两次输入不一致</p>
			</li>

			<li class="inputWithIcon">
				
				<i class="icon ion-android-phone-portrait"></i>
				<input type="text" placeholder="请输入手机号">

				<p class="warn">请输入正确格式手机号</p>
			</li>

			<li class="inputWithIcon">
				
				<i class="icon ion-ios-unlocked"></i>
				<input type="text" placeholder="请输入验证码">
				<span class="gerCode btn">获取验证码</span>
				<p class="warn">请输入6位验证码</p>

			</li>

			<li class="inputWithIcon">
				
				<i class="icon ion-thumbsup"></i>
				<input type="text" placeholder="推荐人（选填）">

				<p class="warn"></p>
			</li>

		</ul>

		<div class="agreeWrap">
    		
    		<input type="checkbox">我同意 <span>《认购协议》</span>

    	</div>

		<div class="btnWrap">
			
			<md-button class="button button-positive loginBtn" @click="postData">注册</md-button>
		</div>


		 <div class="xlbCopyright">

          XX股权交易中心  Copyright<br>

           ©  2017 备沪ICP备000000号-0    
          
        </div>
	</div>
</div>
</template>

<script>
export default {

  name: 'logon',

  data () {
    return {
    	navRightText:'登录',
    };
  },
  methods:{

  	toLogin(){

  		$router.go({ name:'login'})
  	},
  	postData(){

  		
  	}
  }
};
</script>

<style lang="css" scoped>
</style>