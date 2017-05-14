<template>
<div class="page xlbUnWrapCard"  v-nav="{
	title: '银行卡解绑',
	showBackButton:true,

	showMenuButton:false

}">
	<div class="page-content padding-top  ">

		<p class="title">身份信息</p>

		<ul class="listsLineWrap">
				
			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">姓名</span>
					<div class="liRight ">
						战三
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">身份证号</span>
					<div class="liRight ">
						1111111111111111111
					</div>
				</div>
			</li>
		</ul>

		<p class="title">银行卡信息</p>

		<ul class="listsLineWrap">
				
			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">银行名称</span>
					<div class="liRight ">
						战三
					</div>
				</div>
			</li>

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">银行卡号</span>
					<div class="liRight ">
						1111111111111111111
					</div>
				</div>
			</li>
		</ul>

		<ul class="listsLineWrap">
				
			

			<li class="listLine">
				<div class="listItem">
					<span class="liLeft">交易密码</span>
					<div class="liRight ">
						<input type="text" placeholder="请输入交易密码">
					</div>
				</div>
			</li>
		</ul>

		

		<div class="btnWrap">
			
			<md-button class="button button-positive loginBtn" @click="addCard">添加</md-button>
		</div>


	</div>
</div>
</template>

<script>
export default {

  name: 'unWrapCard',

  data () {
    return {

    };
  },
  methods:{

  	addCard(){

  		$dialog.alert({
          theme: 'ios',
          title: '',
          content: '解绑成功',
          okText: '确定'
        }).then(() => {
          $router.go({name:'myCards'})
        })
  	}
  }
};
</script>
