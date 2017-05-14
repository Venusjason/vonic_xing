<template>
<div class="xlbProgramItem"  >



	<div class="firstFloor" >
		<span class="fl">{{ listInfo.name }}</span>

		<span class="fr"  @click="toListInfo"> 产品介绍<i class="ion-ios-arrow-right"></i></span>
	</div>

	<div class="secondFloor clearfix">

		
		<div class="fl">
			<p class="percentageWrap">
				<span class="percentage">{{ listInfo.precent }}</span>%
			</p>
			<p>预期年化收益率</p>
		</div>
		<div class="fl">
			
			<p>
				<span class="month">{{ listInfo.month}}</span>个月融资期限
			</p>
			<p>
				<span class="money">{{ listInfo.money}}</span>元认购起点
			</p>
		</div>
		
	</div>

	<div class="thirdFloor clearfix">

		<span class="fl overText">还款方式：{{ listInfo.payStyle}}</span>

		<span class="fr">剩余可投：{{ listInfo.last}}</span>
		

	</div>

	<div class="fouthFloor"  >

		<div>
			<p  :style="{width: listInfo.precent +'%'}"></p>
		</div>

		<span >{{ listInfo.precent}}%</span>
		

	</div>

	

	<md-button class="button button-positive fiveFloor"  @click="investProgram" >立即投资</md-button>




</div>
</template>

<script>




//项目组件
export default {

  name: 'programItem',

  data () {
    return {

    	listInfo:{
    		
    	},

    }
  },
  props:['itemInfo'],
  ready(){
	//console.log('接收项目详情：'+this.itemInfo.name)

	this.listInfo=this.itemInfo



  },

  methods:{

  	toListInfo(){

  		


  		$router.go({ name:'programInfo',params: {programId: this.itemInfo.id}})


  	},

  	investProgram(){

  		$router.go({ name:'programInfo',params: {programId: this.itemInfo.id}})
  		
  	},

  	


  }
};
</script>

