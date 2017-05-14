<template>
<div class="page xlbAddBankCard"  v-nav="{
	title: '添加银行卡',
	showBackButton:true,
	showMenuButton:false

}">
	<div class="page-content padding-top  ">
	
		<p class="title">基本资料</p>

		<ul class="listsLineWrap">
				
			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">银行名称</span>
					<div class="liRight hasSelect">
						<span class="selectText">请选择银行   <i class="icon ion-ios-arrow-right fr" style="font-size: 20px;"></i></span>
						<select  >
							<option value="0">规划局规划局规划局</option>
						</select>
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">姓名</span>
					<div class="liRight" >
						<input type="text" placeholder="请输入姓名" >
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">银行卡号</span>
					<div class="liRight" >
						<input type="text" placeholder="请输入银行卡号" >
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">银行归属省</span>
					<div class="liRight hasSelect" >
						<span class="selectText ">请选择省   <i class="icon ion-ios-arrow-right fr" style="font-size: 20px;"></i></span>
						<select  >
							<option value="0">规划局规划局规划局</option>
						</select>
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">银行归属市</span>
					<div class="liRight hasSelect" >
						<span class="selectText">请选择市   <i class="icon ion-ios-arrow-right fr" style="font-size: 20px;"></i></span>
						<select  >
							<option value="0">规划局规划局规划局</option>
						</select>
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">开户行</span>
					<div class="liRight" >
						<input type="text" placeholder="请输入开户行" >
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">身份证号</span>
					<div class="liRight" >
						<input type="text" placeholder="请输入身份证号" >
					</div>
				</div>
			</li>
			

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">交易密码</span>
					<div class="liRight" >
						<input type="text" placeholder="请输入6位交易密码" >
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">确认交易密码</span>
					<div class="liRight" >
						<input type="text" placeholder="请确认交易密码" >
					</div>
				</div>
			</li>



		</ul>

		<p class="title">营业网点</p>

		<p class="netWork">甘肃股权交易中心总部大厅</p>

		<div class="btnWrap">
			
			<md-button class="button button-positive loginBtn" @click="postData">添加</md-button>
		</div>


	</div>
</div>
</template>

<script>
export default {

  name: 'addBankCard',

  data () {
    return {

    };
  },
  methods:{

  	postData(){


  	}
  }
};
</script>

