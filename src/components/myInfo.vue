<template>

<div class="page xlbMyInfo"  v-nav="{
	title: '用户信息',
	showBackButton:true,

	showMenuButton:false

}">
	
	<div class="page-content padding-top  ">	
		
		<p class="no-bg-title">基本信息</p>

		<ul class="listsLineWrap">
				
			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">姓名</span>
					<div class="liRight">
						李逍遥
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">客户代码</span>
					<div class="liRight">
						111111111
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">资金代号</span>
					<div class="liRight">
						1111111111
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">营业网点</span>
					<div class="liRight">
						中国银行
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">证件信息</span>
					<div class="liRight">
						111111111111
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">银行卡管理</span>
					<div class="liRight"  style="color:#C31840;"  @click="toCardInfo">
						查看
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">风险调查问卷</span>
					<div class="liRight">
						 稳健性 <span style="color:#C31840;"   @click="toTestPage">重新测评</span>
					</div>
				</div>
			</li>

			


		</ul>


		<p class="no-bg-title">安全设置</p>

		<ul class="listsLineWrap">
				
			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">登录密码</span>
					<div class="liRight"  style="color:#C31840;"   @click="toChangeLogin">
						修改
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">交易密码</span>
					<div class="liRight"  style="color:#C31840;"   @click="toChangePay">
						修改
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">密保设置</span>
					<div class="liRight"  style="color:#C31840;"  @click="toChangeQuestion">
						修改
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">手机验证</span>
					<div class="liRight"  @click="toChangeTel">
						1111111111  <span style="color:#C31840;">修改</span>
					</div>
				</div>
			</li>
		</ul>

		<div class="empty"></div>

	</div>
</div>

</template>

<script>
export default {

  name: 'myInfo',

  data () {
    return {

    };
  },

  methods:{

  	toCardInfo(){

  		$router.go({name:'myCards'});

  	},
  	toTestPage(){
  		$router.go({name:'testPage'});


  	},
  	toChangeLogin(){

  		$router.go({name:'changePsd',params: {type: 'login'}});


  	},

  	toChangePay(){
  		$router.go({name:'changePsd',params: {type: 'pay'}});
  	},
  	toChangeQuestion(){

  		$router.go({name:'psdSafe'});

  	},
  	toChangeTel(){

  		$router.go({name:'checkTel'});

  	},

  	






  },
};
</script>

