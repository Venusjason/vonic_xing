<template>

<div class="page  xlbPayOrder  xlbProgramInfo"  v-nav="navBar">
	<div class="bottomBtn"  @click="toPay">确认支付</div>
    <div class="page-content padding-top short-padding">

    	<div class="section1">
			
			<p class="title">支付金额</p>


			<div class="wrap">
				
				
				<span>100000</span>
				

			</div>

			<div class="numWrap">
				请您及时支付，以便订单尽快处理
			</div>

    		
    	</div>

    	<div class="orderSection orderSection1">
    		<div class="title">基本信息</div>

    		<div class="wrap">
    			<div class="floor">
    			
	    			<span class="name">产品名称</span>
	    			<span class="info">风格和风格和风格和风格和</span>
	    		</div>

	    		<div class="floor">
	    			
	    			<span class="name">订单编号</span>
	    			<span class="info">111111111</span>
	    		</div>

	    		<div class="floor">
	    			
	    			<span class="name">产品编号</span>
	    			<span class="info">1111111111</span>
	    		</div>

	    		<div class="floor">
	    			
	    			<span class="name">客户名称</span>
	    			<span class="info">风格和风格和风格和风格和</span>
	    		</div>

	    		<div class="floor">
	    			
	    			<span class="name">年化收益率</span>
	    			<span class="info">9%</span>
	    		</div>

	    		<div class="floor">
	    			
	    			<span class="name">认购时间</span>
	    			<span class="info">2019-10-10</span>
	    		</div>
    			

    		</div>

    	</div>	

    	<div class="orderSection orderSection2">

    		<div class="title">请选择支付方式 <span>2种支付方式可以同时使用</span></div>

	    		<div class="cardsSection"  style="margin-bottom:0;">
	    		
		    		<div class="cardSection"   v-for="bankCard in bankCards">
		    			
		    			<p class="cardType">{{bankCard.cardType}}</p>

		    			<div class="typeWrap">
		    				
		    				<img :src="cardImg" alt="" class="bankImg">
		    				<span class="bankName">{{ bankCard.name }}（尾号{{ bankCard.cardNum }}）</span>

		    				<i   class="ion-ios-checkmark"  :class="{  'checked': bankCard.isChecked }  "> <input type="radio"   name="bankCard" @click="checkRadio($index)"> </i>

		    			</div>
		    		
		    	</div>
    	
    		</div>
		
    	</div>	

    	<div class="orderSection  payPsd">

    		<span>交易密码 </span>
			
			<input type="password" placeholder="请输入密码">    		

    	</div>

    </div>
</div>
</template>

<script>
export default {

  name: 'payOrder',

  data () {
    return {

    	navBar:{

          title: '支付订单',
	      showBackButton:true,
	   
	      showMenuButton:false
	      
	   
      	},

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
  methods:{

  	toPay(){  //支付

  		var status="B";

  		if(status=="A"){
  			$dialog.alert({
	          theme: 'ios',
	          title: '',
	          content: '投资成功',
	          okText: '确定'
	        }).then(() => {
	          

	        })

  		}else{

  			$dialog.confirm({
	          theme: 'ios',
	          title: '账户余额不足，马上去充值',
	          cancelText: '取消',
	          okText: '充值'
	        }).then((res) => {
	        

	          if( res){
	          	 console.log('路由前往充值') 
	          }
	         
	        })

  			

	        
  		}
  		

  		


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










  }
};
</script>

