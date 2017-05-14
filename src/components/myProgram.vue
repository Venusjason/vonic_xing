<template>
<div class="page xlbMyProgram" v-nav="{
	title: '我的项目',
	showBackButton:true,

	showMenuButton:false

}">
	<div class="page-content padding-top  short-padding">
		<tabs :tab-items="programTypes" :active-index.sync="activeTabIndex"  :on-tab-changed="changeTab"></tabs>

		<div class="emptyDiv"  v-if=" showList.length==0 ">

			<div class="xlbCenter">
				<img :src="emptyImg" alt="" >
				<p>你还没有项目记录</p>

			</div>
			
			
		</div>

		<ul class="programs"  v-else>
			
			<li class="program"  v-for="item in showList">
				
				<p class="name">{{item.name}}</p>

				<ul>
					
					<li>
						
						<span class="fl">投资金额</span>
						<span class="fr">{{item.money}}元</span>

					</li>

					<li>
						
						<span class="fl">年化收益率</span>
						<span class="fr">{{item.amulate}}%</span>

					</li>

					<li>
						
						<span class="fl">期限</span>
						<span class="fr">{{item.limit}}</span>

					</li>

					<li  v-show="item.isShowMore">
						
						<span class="fl">认购日期</span>
						<span class="fr">{{item.buyTime}}</span>

					</li>

					<li v-show="item.isShowMore">
						
						<span class="fl">起息日</span>
						<span class="fr">{{item.startTime}}</span>

					</li>

					<li v-show="item.isShowMore">
						
						<span class="fl">实际投资金额</span>
						<span class="fr">{{item.realMoney}}</span>

					</li>

					<li v-show="item.isShowMore">
						
						<span class="fl">操作</span>
						<span class="fr operateBtn"  @click="transferItem">我要转让</span>

					</li>
				</ul>

				<div class="showMore"  @click="showItemMore($index)">
					
					<i :class="['icon', item.isShowMore?'ion-ios-arrow-up':'ion-ios-arrow-down']"></i>

				</div>




			</li>

		</ul>

	</div>
</div>
</template>

<script>
var list=[
	{
		'name':'飞规划局飞规划局飞规划局规划局与01',
		'money':'10000',
		'amulate':6,
		'limit':'12个月',
		'buyTime':'2016-09-09',
		'startTime':'2014-09-09',
		'realMoney':'1201',
		'id':'01',
		'isShowMore':false
	},
	{
		'name':'飞规划局飞规划局飞规划局规划局与02',
		'money':'10000',
		'amulate':6,
		'limit':'12个月',
		'buyTime':'2016-09-09',
		'startTime':'2014-09-09',
		'realMoney':'1201',
		'id':'01',
		'isShowMore':false
	},
	{
		'name':'飞规划局飞规划局飞规划局规划局与03',
		'money':'10000',
		'amulate':6,
		'limit':'12个月',
		'buyTime':'2016-09-09',
		'startTime':'2014-09-09',
		'realMoney':'1201',
		'id':'01',
		'isShowMore':false
	}
]

export default {

  name: 'myProgram',



  data () {
    return {

    	programTypes:['已持有','已转让','已还本'],

    	activeTabIndex:0,

    	emptyImg:require('../assets/img/empty.png'),

    	hasOwnList:list, //已持有

    	transferList:list,//已转让

    	repaymentList:[], //已还本


    	showList:list, //展示的



    };
  },

  ready(){

  	this.showList=this.hasOwnList
  },

  methods:{

  	changeTab(){ //选项卡切换

  		console.log(this.activeTabIndex)

  		switch(this.activeTabIndex){

  			case 0: this.showList=this.hasOwnList
  					break

  			case 1: this.showList=this.transferList
  					break

  			case 2: this.showList=this.repaymentList
  					break

  		}


  	},
  	showItemMore(i){
  		console.log(i)

  		this.showList[i].isShowMore=!this.showList[i].isShowMore
  	},

  	transferItem(){  //我要转让

  		$dialog.confirm({
          theme: 'ios',
          title: '你确定要转让吗?',
          cancelText: '取消',
          okText: '确定'
        }).then((res) => {
          console.log('confirm result: ', res)
        })


  	}


  },
};
</script>

