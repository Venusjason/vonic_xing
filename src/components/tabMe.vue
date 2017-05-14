<template>
<!--  <div class="page has-navbar has-tabbar sectionBar" v-nav="{
		title:navBar.title,
		showBackButton:navBar.showBackButton,
		backButtonText:navBar.backButtonText,
		onBackButtonClick:toLogin


 }" v-tabbar-menu-index="2"    id="xlbTabMe">
    <div class="page-content padding-top">
      	
      	<div></div>
      
    </div>
</div> -->
<div class="page  "  v-nav="{ hideNavbar: true }" v-tabbar-menu-index="2"    id="xlbTabMe">

	<div class="page-content padding-top">
      	
      	<div class="topSection">

			<div class="floorOne">
				<span class="fl"  @click="toLogin">登录</span>
				<span class="xlbCenter overText">李逍遥</span>
			</div>

			<div class="floorTwo">
				
				<p class="text">已收收益<i class="ion-help-circled icon"  @click="showToast0"></i></p>
				<p class="num">1000000</p>

			</div>

			<div class="floorThree">

				<div class="fl">
					<p class="text">资产总计（元）<i class="ion-help-circled icon"  @click="showToast1"></i></p>
					<p class="num">1000000</p>
				</div>

				<div class="fl">
					<p class="text"  >应收收益（元）<i class="ion-help-circled icon"  @click="showToast2"></i></p>
					<p class="num">1000000</p>
				</div>
				
			</div>

		</div>

		<div class="userInfos">
			
			<div class="lastMoney">
				可用余额：  <span> {{userInfos.lastMoney}}</span>  <i class="ion-help-circled icon"  @click="showToast3" ></i>
			</div>

			<div class="operate">

				<span  @click="recharge">充值</span>
				<i class="xlbCenter"></i>
				<span  @click="withdraw">提现</span>

			</div>

		</div>

		<div class="userDetails"  >

			
			<div class="itemWithIcon"  v-for="item in tapLists"  @click="tapTo($index)">
				
		      <i :class="item.icon "></i>

		       <span class="text">{{ item.text }}</span>
		        
		       <i class="icon ion-ios-arrow-right  right"></i>        

		    </div>


		 

			

		</div>


		<div class="quitDiv"  @click="quitLogin">

			<button class="button button-assertive button-block">退出登录</button>
			

		</div>

		 <div class="xlbCopyright">

          XX股权交易中心  Copyright<br>

           ©  2017 备ICP备0000000000号-3    
          
        </div>

	
      
    </div>

</div>

</template>

<script>
export default {

  	name: 'tabMe',

  	data () {
	    return {

	    	navBar:{

	          'title':'我的',
	          
	          'showBackButton':true,
	          'backButtonText':'登录',
	          
	          'showMenuButton':false
	      	},

	      	userInfos:{

	      		lastMoney:10000    //可用余额
	      	},

	      	tapLists:[
	      		{
	      			"icon":'icon ion-android-contact  left',
	      			"text":"用户信息"
	      		},
	      		{
	      			"icon":'icon ion-document-text  left',
	      			"text":"我的项目"
	      		},
	      		{
	      			"icon":'icon ion-social-yen  left',
	      			"text":"我的交易"
	      		},
	      		{
	      			"icon":'icon ion-android-share  left ',
	      			"text":"我的推广"
	      		}
	      	],



	    };
  	},
  	ready(){

  	
  	},

  	methods:{

  		toLogin(){

  			$router.go({ path: '/login' })
  		},

  		showToast0() {
	        $toast.show('已经到账的投资收益')
	    },
	    showToast1() {
	        $toast.show('所有固定收益产品的转让参考价格+冻结资金+股权资产的价值+可用余额')
	    },
	    showToast2() {
	        $toast.show('根据您持有的所有产品估算的截止到所有产品到期的预期收益')
	    },
	    showToast3() {
	        $toast.show('用于投资的金额')
	    },

	    tapTo(i){

	    	console.log(i);

	    	var m={

	    		name:'myInfo'
	    	}

	    	switch(i){

	    		case 0: m={
		    			name:'myInfo'
		    		}

	    			break

	    		case 1: m={
		    			name:'myProgram'
		    		}

	    			break
	    		case 2: m={
		    			name:'myBusiness'
		    		}

	    			break

	    		case 3: m={
		    			name:'myPromotion'
		    		}

	    			break


	    	}



	    	$router.go(m)




	    },
	    recharge(){//充值

	    	$router.go({ name:'aboutCardMoney',params: {type: 'put'}})


	    },
	    withdraw(){//提现

	    	$router.go({ name:'aboutCardMoney',params: {type: 'get'}})
	    },

	    toLogin(){

	    	$router.go({ name:'login'})
	    },

	    quitLogin(){

	    	$dialog.confirm({
	          theme: 'ios',
	          title: '你确定要退出吗?',
	          cancelText: '取消',
	          okText: '退出'
	        }).then((res) => {
	          console.log('confirm result: ', res)
	        })

	    },



  		

  	}
};
</script>

<style lang="css" scoped>
</style>