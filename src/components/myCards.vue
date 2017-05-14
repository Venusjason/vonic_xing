<template>
<div class="page xlbMyCards"  v-nav="{
	title: '银行卡管理',
	showBackButton:true,

	showMenuButton:false

}">
	<div class="page-content padding-top  ">	
		
		<ul>
			<li class="cardBox">
				
				<p class="title">三方支付</p>

				<div class="bankCard">

					<div v-if="thirdPayCard" class="hasCard">

						<div class="card">
							
							<div class="name">

								<div class="fl">
									
									<img :src="thirdPayCard.logo" alt="">

									{{ thirdPayCard.bankName}}

								</div>

								<span class="fr"  @click="unWrapCard( thirdPayCard )">
									
									解绑

								</span>
								
							</div>

							<p class="cardNum">{{ thirdPayCard.cardNum}}</p>

						</div>
						

					</div>

					<div class="empty"  @click="addPay"  v-else>

						<div></div>

						<p>添加银行卡</p>
						
					</div>

				</div> 

			</li>

			<li class="cardBox">
				
				<p class="title">三方存管</p>

				<div class="bankCard">

					<div v-if="thirdSaveCard" class="hasCard">

						<div class="card">
							
							<div class="name">

								<div class="fl">
									
									<img :src="thirdSaveCard.logo" alt="">

									{{ thirdSaveCard.bankName}}

								</div>

								<span class="fr"  @click="unWrapCard(thirdSaveCard )">
									
									解绑

								</span>
								
							</div>

							<p class="cardNum">{{ thirdSaveCard.cardNum}}</p>

						</div>
						

					</div>

					<div class="empty"  @click="addSave"  v-else>

						<div></div>

						<p>添加银行卡</p>
						
					</div>
					


				</div> 

			</li>
		</ul>

	</div>
	
</div>
</template>

<script>
export default {

  name: 'myCards',

  data () {
    return {

    	thirdPayCard:{

    		logo:require('../assets/img/tabHome2.png'),
    		bankName:'工商银行',
    		cardNum:'1111111111111'
    	},

    	thirdSaveCard:null,

    };
  },
  methods:{

  	addPay(){//添加三方支付
  		$router.go({
  			name:'addBankCard',
  			params:{type:'thirdPay'}
  		})

  	},
  	addSave(){ //添加三方存管

  		$router.go({
  			name:'addBankCard',
  			params:{type:'thirdSave'}
  		})


  	},
  	unWrapCard(item){

  		console.log(item)
  		
  		/*$router.go({
  			name:'unWrapCard',
  			params:{type:item.}
  		})*/

  		$router.go({name:'unWrapCard'})


  	}
  }
};
</script>

<style lang="css" scoped>
</style>