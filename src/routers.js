//路由文件

export default[
	{
	
  '/': {
    component: Index
  },

  '/tabMenu': {//菜单导航
    component: TabBar,

    subRoutes:{

    	'/':{
    		component:
    	}
    }

  },

}
]

