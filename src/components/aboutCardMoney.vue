<template>
<div class="page   xlbAboutCardMoney "  v-nav="{
	
	title: pageTypeText,
	showBackButton:true,

	showMenuButton:false

}">
	
    <div class="page-content padding-top  short-padding">
		
		<tabs :tab-items="programTypes" :active-index.sync="activeTabIndex"  :on-tab-changed="changePageType"></tabs>

		<div class="operateCardDiv">

			<ul class="listsLineWrap">
				
				<li class="listLine">
					<div class="listItem">
						<span class="liLeft">账户余额	</span>
						<div class="liRight">
							<span style="color:#C31840;margin-right:10px;">120</span>元
						</div>
					</div>
				</li>
			</ul>

			<ul class="listsLineWrap">
				<li class="listLine"  v-show=" activeTabIndex==0 ">
					<div class="listItem">

						<span class="liLeft">选择银行卡</span>
						<div class="liRight">
							<select  style="position:absolute;top:0;width:100%;height:100%;z-index:10;opacity:0;">
								<option value="0">请选择银行</option>
								<option value="1">工商银行</option>
								<option value="2">邮政银行</option>
								<option value="3">建设银行</option>
							</select>
							请选择银行卡 <i class="icon ion-ios-arrow-right "></i>
						</div>						
					</div>
					
				</li>

				<li class="listLine"  v-show=" activeTabIndex==1 ">
					<div class="listItem">

						<span class="liLeft"><img :src="bankLogo" alt="">工商银行</span>
						<div class="liRight"  style="color:#6D6D6D;">
							尾号2222
						</div>						
					</div>
					
				</li>


				<li class="listLine">
					<div class="listItem">

						<span class="liLeft">充值金额</span>
						<div class="liRight">
							<input type="text" placeholder="请输入充值金额">元
						</div>						
					</div>
					
				</li>

				<li class="listLine"  v-show=" activeTabIndex==1 ">
					<div class="listItem">

						<span class="liLeft">银行密码</span>
						<div class="liRight">
							<input type="password" placeholder="请输入银行密码">
						</div>						
					</div>
					
				</li>
			</ul>


			<div class="agreeDiv">
				
				<input type="checkbox"> 我已阅读并确认下方重要提示信息
			</div>


			
				
			<md-button class="button button-positive moneyBtn"  @click="moneyClick" >确认{{pageTypeText}}</md-button>

			<div class="xlbPrompt">

				<p class="title">温馨提示:</p>
				
				<ol v-if=" pageType=='put' ">
					
					<li>1.您的账户资金将由第三方平台托管。</li>
					<li>2.为了您的资金安全，请您在充值前完成手机绑定，身份认证及支付密码设置。</li>
					<li>3.严禁信用卡充值、套现等行为，一经发现将予以处罚，包括但不限于：限制收款、冻结账户、永久停止服务，并会影响银行征信记录。</li>
					<li>4.充值过程遇到问题，请联系客服，<a href="tel:100-1000-666">100-1000-666</a>(9:00-17:00)。</li>
				</ol>

				<ol  v-if=" pageType=='get' ">
					
					<li>1.请您留意，使用三方存管的中国银行或者信合进行转账的时间为每交易日9:00—16:30，其他时间及节假日无法操作提现；</li>
					<li>2.使用三方支付方式提现的，应当遵守与该第三方的各项协议及其服务规则；在使用第三方支付服务过程中用户应当妥善保管个人信息，包括但不限于银行卡账号、密码、验证码等；</li>
					<li>3.如果您在使用过程中碰到问题无法解决，请联系我们，客服电话：<a href="tel:100-1000-666">100-1000-666</a>(9:00-17:00)。</li>
					

				</ol>



			</div>



		</div>

    </div>
</div>
</template>

<script>
export default {

  name: 'aboutCardMoney',

  init(){

  },

  data () {
    return {

    	navBar:{

          title: '充值',
	      showBackButton:true,
	   
	      showMenuButton:false
	      
	   
      	},

      	bankLogo:require('../assets/img/tabHome2.png'),

      	pageType:'put', //判断是充值 put还是提现 get
      	pageTypeText:'充值',
      	isPutPage:true,  //默认充值页面

      	programTypes:[

      		'三方支付',
      		'三方存管'

      	],
      	activeTabIndex:0,





    };
  },
  ready(){

  	this.pageType=this.$router._currentRoute.params.type;

  	if(this.pageType=='get'){

  		this.pageTypeText='提现'	

  		this.isPutPage=!this.isPutPage	

  	}

  	console.log(this.pageTypeText+'页面')
  	


  },

  methods:{

  	changePageType(){

  		console.log(this.activeTabIndex)
  	},

  	moneyClick(){

  		console.log('确认')


  	},








  },










};
</script>
