<template>
<div class="page xlbRecommendMyself"  v-nav="{
	title: '我的推广',
	showBackButton:true,

	showMenuButton:false

}">
	
	<div class="page-content padding-top  ">	

    <div class="xlbCenter">
      
      <p @click="makeCode">扫一扫二维码，立即开户</p>
      <div class="qrcodeWrap" id="qrcode"  >


        
      </div>
    </div>

    <div class="xlbCopyright">

           XX股权交易中心  Copyright<br>

           ©  2017 备ICP备0000000000号-3     
          
    </div>

	</div>
</div>
</template>

<script>
import xlb from '../xlb.js'

export default {

  name: 'recommendMyself',

  data () {
    return {

      qrcode:null,
    };
  },
  ready(){
    this.qrcode = new QRCode(document.getElementById("qrcode"), {
      text: "http://jindo.dev.naver.com/collie",
      width: 200,
      height: 200,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
   });

    
  
  },

  methods:{

    makeCode(){
       // this.qrcode.makeCode("金星")
    }
  }
};
</script>
