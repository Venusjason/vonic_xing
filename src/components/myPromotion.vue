<template>
<div class="page xlbMyPromotion" v-nav="{
	title: '我的推广',
	showBackButton:true,

	showMenuButton:false

}">
	<div class="page-content padding-top  short-padding">
		
		<tabs :tab-items="programTypes" :active-index.sync="activeTabIndex"  :on-tab-changed="changeTab"></tabs>

		<ul class="tabBoxUl">
			<li class="tabBox  popularizeMe"  v-show="activeTabIndex==0">
				
				<p class="title">如何推广</p>

				<p class="li">1、发送下面的邀请链接给好友等（建议不要发送给陌生人），通过此链接注册并绑定银行卡成功即可成为您的推荐用户</p>


				<div class="link"> 邀请链接：<a href="javascript:;"> https://www.baidu.com</a></div>

				<p class="li">2、用户注册时，在“推荐人”处填写您的用户名，注册并绑定银行卡成功即可成为您的推荐用户。如下图：</p>

				<img :src="img" alt="">
				
			</li>
			<li class="tabBox  popularizeOther" v-else >
				
				<div class="emptyDiv"  v-if=" showList.length==0 ">

					<div class="xlbCenter">
						<img :src="emptyImg" alt="" >
						<p>你还没有推荐记录</p>

					</div>
					
					
				</div>

				<div class="list"  v-else>

					<search :value.sync="keywords" placeholder="请输入用户名" :on-search="onSearch" :on-cancel="onCancel"  cancel-text="搜索"></search>

					<table>
						<thead>
							<tr>
								<th class="one"></th>
								<th class="two">用户名</th>
								<th class="three">姓名</th>
							</tr>


						</thead>

						<tbody>
							<tr v-for="item in showList">
								<td class="one">{{$index+1}}</td>
								<td class="two">{{ item.userName}}</td>
								<td class="three">{{ item.realName}}</td>
							</tr>
						</tbody>
						
						
					</table>


					<pagenation :total.sync="totalItem"></pagenation>
					

				</div>

				

			</li>
		</ul>



	</div>
</div>

</template>

<script>
import  pagenation from './common/pagenation'
var manList=[ //推荐人列表

	{
		'userName':'iverson',
		'realName':'艾弗森'
	},

	{
		'userName':'iverson1',
		'realName':'艾弗森1'
	},

	{
		'userName':'iverson2',
		'realName':'艾弗森2'
	},

	{
		'userName':'iverson3',
		'realName':'艾弗森3'
	}


]

export default {

  name: 'myPromotion',



  data () {
    return {

    	programTypes:['推广用户','推荐记录'],

    	activeTabIndex:0,

    	img:require('../assets/img/logonImg.png'),

    	emptyImg:require('../assets/img/empty.png'),

    	showList:manList,

    	keywords:'',
    	searching: false,

    	totalItem:9,


    };
  },

  components:[

  		pagenation

  ],
  methods:{

  	changeTab(){



  	},

  	onSearch(){

  		this.searching = true;
  	},
  	onCancel(){
  		console.log(this.keywords)
  		this.searching = false;
        this.keywords = ''

  	},

  }
};
</script>

