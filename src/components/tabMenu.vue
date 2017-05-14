<template>

<div >

  
  <div v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
	    <router-view></router-view>
	</div>

 </div>
</template>

<script>
export default {

  name: 'index',

  data () {
    return {
    	menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home-outline',
            text: '首页',
            path: '/'
          },
          {
            iconOn: 'ion-ios-pricetags',
            iconOff: 'ion-ios-pricetags-outline',
            text: '折扣',
            path: '/tabProgram'
          },
          {
            iconOn: 'ion-ios-cart',
            iconOff: 'ion-ios-cart-outline',
            text: '购物车',
            path: '/tabMore'
          },
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person-outline',
            text: '我的',
            path: '/tabMe'
          }
        ]

    };
  },
  methods: {
	  menuClicked(menuIndex) {
	    console.log(menuIndex)
	  }
	},

	beforeDestroy() {
      $tabbar.$emit('hideTabbar')
    }

};
</script>

<style lang="scss" >
@import "src/assets/scss/base";



</style>