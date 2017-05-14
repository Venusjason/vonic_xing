<template>

<div>
	<p class="title">共 {{total}}  条记录,每页{{pageSize}}条，共{{pageTotal}}页</p>

	<div class="pagenationDiv">
	
		
			
		<span class="toTopBtn toBtn"  v-show=" activePage!==1 "></span>
		<span :class="['prev', activePage==1?'unable' : 'able']"  @click="prevPage"></span>

		<p>第 {{activePage}} 页</p>
		<span :class="['next', activePage==pageTotal?'unable':'able' ]"  @click="nextPage"></span>

		<span class="toBottomBtn  toBtn"  v-show=" activePage!==pageTotal "></span>


		
		
	</div>



</div>


</template>

<script>
//分页组件
export default {

  name: 'pagenation',

  data () {
    return {

    	
    	activePage:1,
    	pageSize:2,  //一页默认2条
    	pageTotal:0,  //总页数




    };
  },

  props:{

  	total:{
  		type:[String, Number],
  		required: true
  	}
  },
  ready(){

  	this.pageTotal=Math.ceil(this.total/this.pageSize)

  },
  methods:{

  	prevPage(){

  		var vm=this;

  		if(vm.activePage!=1){

  			vm.activePage--

  		}

  	},

  	nextPage(){
  		var vm=this;

  		if(vm.activePage<vm.pageTotal){

  			vm.activePage++

  		}

  	}


  }


};
</script>

<style lang="scss" scoped>

p.title{
	text-align:center;
}

.pagenationDiv{

	text-align:center;
	position: relative;


	span.toBtn{

		margin :0 20px;
		background-size:40%;
	}

	span{
		display:inline-block;

		width:30px;
		height:30px;
		
		vertical-align: middle;

		background-size:30%;
		background-repeat: no-repeat;

		background-position:center;
		position: absolute;
		


	}
	.prev{
		left:30%;
	}
	.next{
		right:30%;
	}

	p{
		display:inline-block;
		vertical-align: middle;
		margin-bottom:0;
		padding:0 20px;
		position: absolute;
		left:40%;
		height:30px;
		line-height:30px;

	}

	.toTopBtn{
		background-image:url(../../assets/img/topLeft.png);
		left:10%;

	}

	.toBottomBtn{

		background-image:url(../../assets/img/topRight.png);
		right:10%;
	}

	


	.prev.able{

		background-image:url(../../assets/img/prevAble.png);
		background-size:52%;
	}

	.prev.unable{

		background-image:url(../../assets/img/prevUnable.png);
	}



	.next.able{
		background-image:url(../../assets/img/nextAble.png);

	}

	.next.unable{
		background-image:url(../../assets/img/nextUnable.png);
	}
}





</style>