<template>
<div class="page  xlbChangePsd"  v-nav="{
	title: '修改密码',
	showBackButton:true,

	showMenuButton:false

}">
	<div class="page-content padding-top  ">	

		<div class="floorOne">
			
			<input type="text" placeholder="请输入验证码" class="fl">

			<span class="fr">获取验证码</span>
		</div>

		<p class="withFloorOne">验证码将会发到你注册尾号为{{tel}}的手机上</p>

		<ul class="listsLineWrap">
				
			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">{{ changeText.text}}</span>
					<div class="liRight">
						<input type="text" :placeholder="changeText.placeholder ">
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">确认密码</span>
					<div class="liRight">
						<input type="text" placeholder="请再次输入密码">
					</div>
				</div>
			</li>


		</ul>


		<div class="btnWrap">
			
			<md-button class="button button-positive loginBtn" @click="postData">确认提交</md-button>

		</div>


		
	</div>
	
</div>
</template>

<script>
export default {

  name: 'changePsd',

  data () {
    return {
    	tel:8989,
    	pageType:this.$router._currentRoute.params.type,
    	changeText:{

    		placeholder:'请输入新密码',
    		text:'新密码'
    	},

    };
  },

  ready(){

  	console.log(this.pageType)

  	if( this.pageType=='pay'){

  		this.changeText={
  			placeholder:'请输入6位数字',
    		text:'设置交易密码'

  		}
  	}
  },

  methods:{

  	postData(){


  	}
  }
};
</script>

