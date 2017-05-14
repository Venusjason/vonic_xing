<template>


<div class="page has-navbar has-tabbar" v-nav="{
      title: navBar.pageTitle,
      showBackButton:navBar.showBackButton,
      
      backButtonText:navBar.backButtonText,
      showMenuButton:navBar.showMenuButton,
      menuButtonText:navBar.navRightText,
      onBackButtonClick:phoneCall,
      onMenuButtonClick:toLogin

     
      }"  v-tabbar-menu-index="0"  id="xlbTabHome">
    <div class="page-content padding-top short-padding">
      

    <!-- 推荐项目列表 -->
    
        <div class="xlbCarousel">
          <swiper direction="horizontal" width="100%"  pager-color="#ea5a49" pager-bg-color="#e5e4e3">
              <swiper-item  v-for="item in swiperImgs">
                <img :src="item.img " alt="">
              </swiper-item>        
         </swiper>
          
        </div>

    		

          <!-- <div v-for="(index, item) in items" @click="onItemClick(index, item)"
               class="item thin-border" :class="{'item-stable': index % 2 == 0}">
            {{ item }}
          </div> -->

          	<p class="hotText">热卖产品</p>
            <programitem :item-info="item" v-for="(index, item) in items" ></programitem>
    		<!-- <div  class="item thin-border"   v-for="(index, item) in items"    >

    			
    	
    		</div> -->

        <p class="getMore"  @click="getMore">查看更多 <i class="icon ion-ios-arrow-right"></i></p>

        <ul class="fourShow clear">
          <li  v-for="item in fourShow"  >
            
            <div>
              <img :src="item.img" alt="">
            </div>

            <p class="one">{{item.title}}</p>
            <p class="two" >{{{item.text}}}</p>

          </li>
          
        </ul>

        <div class="xlbCopyright">

          
          XX股权交易中心  Copyright<br>

           ©  2017 备ICP备0000000000号-3   
          
        </div>

    


    </div>
</div>
</template>

<script>
import	programitem from './common/programItem.vue'

var itemData=[

    		{
          "id":1,
    			"name":"热卖产品一",
    			"precent":10,
    			"month":12,
    			"money":1000,
    			"payStyle":"按月还款",
    			"last":'10万',
    			"bar":60
    		},

    		{
          "id":2,
    			"name":"热卖产品二",
    			"precent":20,
    			"month":12,
    			"money":1000,
    			"payStyle":"按月还款",
    			"last":'10万',
    			"bar":60
    		},

    		{
          "id":3,
    			"name":"热卖产品三",
    			"precent":30,
    			"month":12,
    			"money":1000,
    			"payStyle":"按月还款",
    			"last":'10万',
    			"bar":60
    		},

    		{	
          "id":4,
    			"name":"热卖产品四",
    			"precent":40,
    			"month":12,
    			"money":1000,
    			"payStyle":"按月还款",
    			"last":'10万',
    			"bar":60
    		}



    	]


export default {

  name: 'tabHome',

  data () {
    return {

      navBar:{

          'pageTitle':'vue移动端',
          'navRightText':'登录',
          'showBackButton':true,
          'backButtonText':'<a class="button button-icon icon ion-ios-telephone-outline"  href="tel:400-0971-781"></a>',
          'showMenuButton':true


      },

    	swiperImgs:[//轮播图片

    		{
    			img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490078451&di=98195251df9a541a58bfb693092c423e&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.bkjia.com%2Fuploads%2Fallimg%2F141128%2F162930C38-1.jpg"
    		},

    		{

    			img:"http://www.runoob.com/wp-content/uploads/2016/02/react.png"
    		},
    		{

    			img:"http://www.runoob.com/wp-content/uploads/2014/06/angular.jpg"
    		},
        {

          img:"https://www.w3.org/html/logo/img/html5-display.png"
        }


    	],

    	items: itemData,

    	itemInfo:null,

      fourShow:[

          {
            img:require('../assets/img/tabHome2.png'),
            title:'高保障',
            text:'多重风控筛选，资金三方托管<br>安全放心'
          },
          {
            img:require('../assets/img/tabHome2.png'),
            title:'高收益',
            text:'高于银行存款利息<br>收益稳定'
          },
          {
            img:require('../assets/img/tabHome3.png'),
            title:'低门槛',
            text:'一万起投 <br>选择更轻松'
          },
          {
            img:require('../assets/img/tabHome4.png'),
            title:'高流动',
            text:'产品可转让 <br> 充值、提现网上操作，便捷省心'
          }

      ],

    };
  },
  components:{
  	'programitem':programitem
  },
 

  ready(){
 
      this.top = 1
      this.bottom = 20



     


  },

  methods: {
      
      

      phoneCall(){    


        console.log('phoneCall')
      },

      hideTabbar() {
        $tabbar.$emit('hideTabbar')
      },


      toLogin(){

         
           
          $router.go({ path: '/login' })
          
      },

      getMore(){

        

       $router.go({ path: '/tabProgram' })

      },





    },


};


</script>

