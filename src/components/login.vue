<template>

<div class="page  xlbLogin has-navbar"  v-nav="{ 
	
		title: '登录',
      showBackButton:true,
   
      showMenuButton:true,
      menuButtonText:navRightText,
      onMenuButtonClick:toLogon
	
}">
	<div class="page-content">
		
		<div class="loginForm">

		
			<von-input type="text" :value.sync="loginData.username" placeholder="用户名/手机/邮箱" label="用户名"></von-input>

			
			
      		<von-input type="password" :value.sync="loginData.password" placeholder="密码" label="密码" style="margin-bottom: 5px;"></von-input>


			<md-button class="button button-positive loginBtn" @click="postLogin">
			    登录
			</md-button>


			<button class="button button-energized button-clear toForget"  @click="toForget">忘记密码？</button>

		</div>
	</div>
</div>



</template>

<script>
export default {

	name: 'login',

	data () {
	    return {

	    	navRightText:'注册',

	    	loginData:{
	    		username:'',
	    		password:''
	    	}
	    };
	},

	methods:{

		toLogon(){

			$router.go({ name:'logon'})
		},
		postLogin(){



		},

		toForget(){


		}
	},

};
</script>

<style lang="scss" scoped>
</style>