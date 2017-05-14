<template>

<div class="page has-navbar has-tabbar" v-nav="navBar" v-tabbar-menu-index="3">
	<div class="page-content padding-top">
	  <div id="xlbTabMore">

      <div class="itemWithIcon"  v-for="item in tapLists"  @click="tapTo($index)">
        
        <i :class="item.icon "></i>

         <span class="text">{{ item.text }}</span>
          
         <i class="icon ion-ios-arrow-right  right"></i>        

      </div>

      <div class="itemWithIcon downloadApp "  @click="downloadApp">

        <i class="icon ion-android-phone-portrait  left "></i>

        <span class="text">下载app</span>
        
        <i class="icon ion-ios-arrow-right  right"></i>        

      </div>

      <div class="xlbCopyright">

          
          XX股权交易中心  Copyright<br>

           ©  2017 备ICP备0000000000号-3    
          
        </div>


     

    </div>
	  
	</div>
</div>
</template>

<script>

export default {

  name: 'tabMore',

  data () {
    return {

    	navBar:{

          'title':'更多',
          
          'showBackButton':false,
          
          'showMenuButton':false
      },

      tapLists:[
        {
          "icon":'icon ion-ios-information-outline  left',
          "text":"关于我们"
        },
        {
          "icon":'icon ion-android-volume-up  left ',
          "text":"新闻动态"
        },
        {
          "icon":'icon ion-ios-help-outline left ',
          "text":"常见问题"
        },
        {
          "icon":'icon ion-ios-telephone-outline  left ',
          "text":"联系我们"
        },

        {
          "icon":'icon ion-thumbsup  left  ',
          "text":"推荐用户"
        }
      ],

      


    };
  },
  ready(){
  	
  },

  components:{
    
  },

  methods:{

    tapTo(i){

     // console.log(i)

      var m={

          name:''
      }

      switch(i){

        case 0: m.name='aboutXlb'
                break
        case 1: m.name='news'
                break

        case 2: m.name='questions'
                break
        case 3: m.name='contactUs'
                break

        case 4: m.name='recommendMyself'
                break

      }

      $router.go(m)



    },
    downloadApp(){

      alert(1)
    }
  }
};
</script>

