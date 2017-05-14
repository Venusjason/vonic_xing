<template>

<div class="page  xlbCreatOrder  xlbProgramInfo"  v-nav="navBar">
	<div class="bottomBtn"  @click="bottomBtn">确认投资</div>
    <div class="page-content padding-top short-padding">

    	<div class="section1">
			
			<p class="title">一个项目</p>


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

    	<div class="operateMoneyBox">
    		
    		<div class="wrap clearfix">
				
				
				<div class="fl">投资金额</div>
				<div class="fr">
					
					<i class="ion-ios-minus-outline"  @click="minus"></i>

					<input type="text"  :value="realMoney">

					<i class="ion-ios-plus-outline"  @click="add"></i>
				</div>
    			

    		</div>

    		<p>认购起点1000元，递增金额1000元</p>
    	</div>

    	<div class="recommendBox">

    		<von-input type="text" :value.sync="recommender" placeholder="请输入推荐人"></von-input>
    		
    	</div>

    	<p class="onlyText">请确认回款资金账户信息</p>

    	<div class="cardsSection">
    		
    		<div class="cardSection"   v-for="bankCard in bankCards">
    			
    			<p class="cardType">{{bankCard.cardType}}</p>

    			<div class="typeWrap">
    				
    				<img :src="cardImg" alt="" class="bankImg">
    				<span class="bankName">{{ bankCard.name }}（尾号{{ bankCard.cardNum }}）</span>

    				<i   class="ion-ios-checkmark"  :class="{  'checked': bankCard.isChecked }  "> <input type="radio"   name="bankCard" @click="checkRadio($index)"> </i>


    			</div>
    		</div>

    	
    	</div>

    	<div class="agreeWrap">
    		
    		<input type="checkbox">我同意 <span>《认购协议》</span>

    	</div>


    </div>

    



</div>
</template>

<script>
export default {

  name: 'creatOrder',

  data () {
    return {

    	navBar:{

          title: '确认订单',
	      showBackButton:true,
	   
	      showMenuButton:false
	      
	   
      	},

      	listInfo:{  //获取的项目详情

      		precent:30
      	},

      	startMoney:100,

      	realMoney:0,

      	recommender:'',

      	bankCards:[
      		{
      			"name":"工商银行",
      			"cardNum":"11111",
      			"cardType":"三方支付",
            "isChecked":false

      			
      		},
      		{
      			"name":"邮政银行",
      			"cardNum":"22222",
      			"cardType":"三方存管",
            "isChecked":false
      		}
      	],

      	checkedCard:0,

      	cardImg:require('../assets/img/tabHome2.png'),

      	checkedCardInfo:null,  //被选中的银行卡信息



    };
  },
  ready(){

  	this.realMoney=this.startMoney
  },
  methods:{

  	minus(){//减少

  		this.realMoney=this.realMoney-100


  		
  		console.log(this.realMoney,this.startMoney)


  	},
  	add(){

  		this.realMoney=this.realMoney+100
  		console.log(this.realMoney,this.startMoney)
  	},
  	checkRadio(i){

  		

  		var e=e || window.event;

  		e=e.target;
  		

  		if( e.checked ){

  			for(let k=0;k<this.bankCards.length;k++){
  				if(k!==i){

  					this.bankCards[k].isChecked=false

  				}

  			}

  			this.checkedCardInfo=this.bankCards[i]

  			

  			this.bankCards[i].isChecked=true;

  			console.log(JSON.stringify(this.bankCards))



  		}

  	},
  	bottomBtn(){  //确认投资

	  	console.log('确认投资')

	  	// $router.go({ path: '/creatOrder' ,name:'creatOrder',params: {programId: this.programId}})

	  	 $router.go({
	  	 	path: '/payOrder'
	  	 })
	  },











  },

};
</script>

