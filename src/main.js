
import Vue from 'vue'
import Vonic from 'vonic'

import xlb from './xlb.js'
import vueResource from 'vue-resource'


import	Index from './components/index'
import  Home from './components/home'

import Login from './components/login'
import Logon from './components/logon'

import	tabHome from './components/tabHome'
import	tabProgram from './components/tabProgram'
import	tabMe from './components/tabMe'
import	tabMore from './components/tabMore'


import  programInfo from './components/programInfo'
import  creatOrder from './components/creatOrder'
import  payOrder from './components/payOrder'
import  aboutCardMoney from './components/aboutCardMoney'
import  myInfo from './components/myInfo'
import  myProgram from './components/myProgram'
import  myBusiness from './components/myBusiness'
import  myPromotion from './components/myPromotion'
import  myCards from './components/myCards'

import  testPage from './components/testPage'
import  changePsd from './components/changePsd'
import  psdSafe from './components/psdSafe'
import  checkTel from './components/checkTel'
import  addBankCard from './components/addBankCard'

import  unWrapCard from './components/unWrapCard'

//更多
import  aboutXlb from './components/aboutXlb'
import  news from './components/news'
import  questions from './components/questions'
import  contactUs from './components/contactUs'
import  recommendMyself from './components/recommendMyself'


//recommendMyself






// Routes
const routes = {
  '/': {
    component: Home,
   

    subRoutes:{
    	'/':{

    		component:tabHome
    	},
    	'/tabProgram':{
    		component:tabProgram
    	},
    	'/tabMe':{
    		component:tabMe
    	},
    	'/tabMore':{
    		component:tabMore
    	}

    }


    
  },
  '/login':{
    name:'login',
    component:Login,
    meta:{

        keepAlive:false

    }
  },

  '/logon':{
    name:'logon',
    component:Logon
    
  },


  '/programInfo/:programId':{
        name:'programInfo',
        component:programInfo
    },
    '/creatOrder/:programId':{
        name:'creatOrder',
        component:creatOrder
    },

    '/payOrder':{

        name:'payOrder',
        component:payOrder
    },

    '/aboutCardMoney/:type':{

        name:'aboutCardMoney',
        component:aboutCardMoney
    },

    '/myInfo':{

        name:'myInfo',
        component:myInfo
    },
    '/myProgram':{

        name:'myProgram',
        component:myProgram
    },
    '/myBusiness':{

        name:'myBusiness',
        component:myBusiness
    },
    '/myPromotion':{

        name:'myPromotion',
        component:myPromotion
    },
    '/myCards':{

        name:'myCards',
        component:myCards
    },
    '/testPage':{

        name:'testPage',
        component:testPage
    },
    '/changePsd/:type':{

        name:'changePsd',
        component:changePsd
    },
    '/psdSafe':{

        name:'psdSafe',
        component:psdSafe
    },
    '/checkTel':{

        name:'checkTel',
        component:checkTel
    },
    
    '/addBankCard/:type':{ //添加银行卡  分三方支付和存管

        name:'addBankCard',
        component:addBankCard
    },

    

    '/unWrapCard/:type':{ //解绑银行卡  分三方支付和存管

        name:'unWrapCard',
        component:unWrapCard
    },

    
    '/aboutXlb':{

        name:'aboutXlb',
        component:aboutXlb
    },
    '/news':{

        name:'news',
        component:news
    },
    '/questions':{

        name:'questions',
        component:questions
    },
    '/contactUs':{

        name:'contactUs',
        component:contactUs
    },
    '/recommendMyself':{

        name:'recommendMyself',
        component:recommendMyself
    },



    //recommendMyself


}






Vue.prototype.$xlb=xlb






Vue.use(vueResource)

Vue.use(Vonic.app,{routes: routes, defaultRouteUrl: '/'})


