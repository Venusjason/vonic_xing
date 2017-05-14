<template>

<div class="page  xlbProgramInfo  "  v-nav="navBar">
	<div class="bottomBtn"  @click="bottomBtn">立即投资</div>
    <div class="page-content padding-top  short-padding">

		

    	<div class="section1">
			
			<p class="title">一个项目1</p>
			<div class="wrap">
				
				<i></i>
				<span>预期年化收益率</span>
				<i></i>

			</div>

			<div class="numWrap">
				<span class="num">88</span>%
			</div>

    		
    	</div>

    	<div class="section2">

    		<div class="fl">
    			<p>融资期限</p>
    			<div>
    				<span>12</span>个月
    			</div>
    		</div>
    		<div class="fl">

    			<p>认购起点</p>
    			<div>
    				<span>1000</span>元
    			</div>
    			
    		</div>

    		<i class="xlbCenter"></i>


    		
    	</div>

    	<div class="section3">

	    	<div class="list list-ios" >
	    		
				<div class="item item-icon-right  item-ios" thin-border>
			        进度

			        <div class="xlbCenter"><p  :style="{width: listInfo.precent +'%'}"></p></div>
			        <span class="item-note">{{listInfo.precent}}%</span>
			        
			    </div>
			    <div class="item item-icon-right  item-ios" thin-border>
			        发行规模
			        <span class="item-note">700万元</span>
			        
			    </div>

			    <div class="item item-icon-right  item-ios" thin-border>
			        剩余可投
			        <span class="item-note">700万元</span>
			        
			    </div>

			    <div class="item item-icon-right  item-ios" thin-border>
			        增信状态
			        <span class="item-note">700万元</span>
			        
			    </div>

			    <div class="item item-icon-right  item-ios" thin-border>
			        投资者限定
			        <span class="item-note">700万元</span>
			        
			    </div>

			    <div class="item item-icon-right  item-ios" thin-border>
			        已投资人数
			        <span class="item-note">700万元</span>
			        
			    </div>

			    <div class="item item-icon-right  item-ios" thin-border>
			        还款方式
			        <span class="item-note">700万元</span>
			        
			    </div>

			</div>

    	</div>

    	<div  class="section4">

    		<div class="box">

    			<div class="list list-ios" thin-border  @click="isShowIntroduce">

					<div class="item item-icon-right  item-ios" thin-border>
			        项目介绍
			       
			        <i  style="color: #BBBBC1;"  :class="[ 'icon', isShow.isShowIntroduce? 'ion-ios-arrow-up':'ion-ios-arrow-down']"></i>
			    </div>

			    <p v-show="isShow.isShowIntroduce">
			    	合金丝袜法规及额外花费岗位分工会进入峰哥  而贵妃orghi偶尔hi欧冠黑哦日哦和个体户IEhi哦哦hi         hi借款人和高考分hiUR过户而hi骨灰而后已孤儿和已回u

			    </p>
    				
    			</div>
				
				

    		</div>

    		<div class="box">

    			<div class="list list-ios" thin-border  @click="isShowCompany">

					<div class="item item-icon-right  item-ios" thin-border>
			        企业简介
			       
			        <i  style="color: #BBBBC1;"  :class="[ 'icon', isShow.isShowCompany? 'ion-ios-arrow-up':'ion-ios-arrow-down']"></i>
			    </div>

			    <p v-show="isShow.isShowCompany">
			    	合金丝袜法规及额外花费岗位分工会进入峰哥  而贵妃orghi偶尔hi欧冠黑哦日哦和个体户IEhi哦哦hi         hi借款人和高考分hiUR过户而hi骨灰而后已孤儿和已回u

			    </p>
    				
    			</div>
				
				

    		</div>

    		<div class="box">

    			<div class="list list-ios" thin-border  @click="isShowMoney">

					<div class="item item-icon-right  item-ios" thin-border>
			        预期收益
			       
			        <i  style="color: #BBBBC1;"  :class="[ 'icon', isShow.isShowMoney? 'ion-ios-arrow-up':'ion-ios-arrow-down']"></i>
			    </div>

			    <p v-show="isShow.isShowMoney">
			    	合金丝袜法规及额外花费岗位分工会进入峰哥  而贵妃orghi偶尔hi欧冠黑哦日哦和个体户IEhi哦哦hi         hi借款人和高考分hiUR过户而hi骨灰而后已孤儿和已回u

			    </p>
    				
    			</div>
				
    		</div>

    		<div class="box">

    			<div class="list list-ios" thin-border  @click="isShowMeans">

					<div class="item item-icon-right  item-ios" thin-border>
			        项目资料
			       
			        <i  style="color: #BBBBC1;"  :class="[ 'icon', isShow.isShowMeans? 'ion-ios-arrow-up':'ion-ios-arrow-down']"></i>
			    </div>

			    <p v-show="isShow.isShowMeans">
			    	合金丝袜法规及额外花费岗位分工会进入峰哥  而贵妃orghi偶尔hi欧冠黑哦日哦和个体户IEhi哦哦hi         hi借款人和高考分hiUR过户而hi骨灰而后已孤儿和已回u

			    </p>
    				
    			</div>
				
    		</div>
    		
    		
    	</div>

    </div>

</div>



</template>

<script>
export default {

  name: 'programInfo',

  data () {
    return {

    	navBar:{

          title: '项目详情',
	      showBackButton:true,
	   
	      showMenuButton:false
	      
	   
      	},

      	isShow:{

      		isShowIntroduce:false,
      		isShowCompany:false,
      		isShowMoney:false,
      		isShowMeans:false
      	},

      	listInfo:{  //获取的项目详情

      		precent:30
      	},

      
      	programId:this.$router._currentRoute.params.programId


    };
  },

  ready(){
  	console.log(this.programId)
  	//console.log(this.$router)
  },
  methods:{

  	isShowIntroduce(){

  		this.isShow.isShowIntroduce=!this.isShow.isShowIntroduce
  	},
  	isShowCompany(){

  		
  		this.isShow.isShowCompany=!this.isShow.isShowCompany
  	},

  	isShowMoney(){
		
  		this.isShow.isShowMoney=!this.isShow.isShowMoney
  	},
  	isShowMeans(){

  		this.isShow.isShowMeans=!this.isShow.isShowMeans

  	},

  	bottomBtn(){  //立即投资

  		 //$router.go({ path: '/creatOrder' })

  		 //console.log(this.programId)

  		 $router.go({ path: '/creatOrder' ,name:'creatOrder',params: {programId: this.programId}})





  	}



  }
};
</script>
