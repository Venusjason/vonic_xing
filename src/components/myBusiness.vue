<template>
<div class="page xlbMyBusiness" v-nav="{
	title: '我的交易',
	showBackButton:true,

	showMenuButton:false

}">
	<div class="page-content padding-top  short-padding">
		<tabs :tab-items="programTypes" :active-index.sync="activeTabIndex"  :on-tab-changed="changeTab"></tabs>

		<div class="emptyDiv"  v-if=" showList.length==0 ">

			<div class="xlbCenter">
				<img :src="emptyImg" alt="" >
				<p>你还没有{{ emptyText }}记录</p>

			</div>
			
			
		</div>

		<ul class="programs"  v-else>
			
			<li class="program"  v-for="item in showList">
				
				<p class="name">{{item.name}}</p>

				<ul>
					
					<li>
						
						<span class="fl">交易时间</span>
						<span class="fr">{{item.money}}元</span>

					</li>

					<li>
						
						<span class="fl">发生金额</span>
						<span class="fr">{{item.amulate}}%</span>

					</li>

					<li>
						
						<span class="fl">变动前金额</span>
						<span class="fr">{{item.limit}}</span>

					</li>

					<li  >
						
						<span class="fl">余额</span>
						<span class="fr">{{item.buyTime}}</span>

					</li>

					<li>
						
						<span class="fl">状态</span>
						<span class="fr">{{item.startTime}}</span>

					</li>

					

					
				</ul>


			</li>

		</ul>

	</div>
</div>
</template>

<script>
var list=[
	{
		'name':'我的交易01',
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
		'name':'我的交易02',
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
		'name':'我的交易03',
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

  name: 'myBusiness',



  data () {
    return {

    	programTypes:['全部','债权交易','转让交易','充值','提现'],

    	activeTabIndex:0,

    	emptyImg:require('../assets/img/empty.png'),
    	emptyText:'',

    	allList:list, //全部

    	list1:list,//债权交易

    	list2:[], //转让交易

    	list3:[], //充值

    	list4:[], //提现


    	showList:list, //展示的



    };
  },

  ready(){

  	this.showList=this.allList
  },

  methods:{

  	changeTab(){ //选项卡切换

  		console.log(this.activeTabIndex)

  		switch(this.activeTabIndex){

  			case 0: this.showList=this.allList
  					this.emptyText='交易'
  					break

  			case 1: this.showList=this.list1
  					this.emptyText='债权交易'
  					break

  			case 2: this.showList=this.list2
  					this.emptyText='转让交易'
  					break

  			case 3: this.showList=this.list3
  					this.emptyText='充值'
  					break

  			case 4: this.showList=this.list4
  					this.emptyText='提现'
  					break

  		}


  	},
  	showItemMore(i){
  		console.log(i)

  		this.showList[i].isShowMore=!this.showList[i].isShowMore
  	}


  },
};
</script>

