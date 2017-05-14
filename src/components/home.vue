<template>



 <!--    
  <div class="page has-navbar" v-nav="{
      title: navBar.pageTitle,
      showBackButton:navBar.showBackButton,
      
      backButtonText:navBar.backButtonText,
      showMenuButton:navBar.showMenuButton,
      menuButtonText:navBar.navRightText,
      onBackButtonClick:backLogin,
      onMenuButtonClick:toLogin

     
      }"   >

      <div class="page-content"> -->
  
      
        <div v-tabbar="{'menus': menus, menuColor: '#B19D9D', activeMenuColor: '#D20E40', onMenuClick: menuClicked}">
          <router-view></router-view>
        </div>

    <!-- </div>

  </div> -->
  




</template>

<script>
export default {

  name: 'home',

  data () {
    return {

      navBar:{

          'pageTitle':'兴陇宝',
          'navRightText':'登录',
          'showBackButton':true,
          'backButtonText':'<a class="button button-icon icon ion-ios-telephone-outline"></a>',
          'showMenuButton':true


      },


     
    	menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home',
            text: '首页',
            path: '/'
          },
          {
            iconOn: 'ion-ios-list',
            iconOff: 'ion-ios-list',
            text: '项目',
            path: '/tabProgram'
          },
          {
            iconOn: 'ion-person',
            iconOff: 'ion-person',
            text: '我的',
            path: '/tabMe'
          },
          {
            iconOn: 'ion-grid',
            iconOff: 'ion-grid',
            text: '更多',
            path: '/tabMore'
          }
        ],

        isDistory:false

    };
  },
  methods: {
	  menuClicked(menuIndex) {
	    // console.log('111111',menuIndex)

     // this.switchMenu(menuIndex)
      

	  },

    switchMenu(i){  //下标切换

        


    },
	
    backLogin(){    
      console.log('backLogin')
    },
    toLogin(){

        this.hideTabbar()
        
        $router.go({ path: '/login' })
        
    },

  	hideTabbar() {
        $tabbar.$emit('hideTabbar')
      },
    hideNav(){

      //$nav.$emit('hideNav')

    }
  },

  beforeDestroy(){

   /* var body=document.getElementsByTagName('body')[0];
    body.innerHtml='';*/
    this.hideTabbar()

    console.log('destroyed')
  }

    
  

  

};
</script>

<style lang="scss" >
@import "src/assets/scss/base";
.navbar{
  
    .tabbar{//下菜单

        border-top:1px solid $b;
        


    }



}

</style>