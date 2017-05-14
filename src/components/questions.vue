<template>
<div class="page xlbQuestions"  v-nav="{
	title: '常见问题',
	showBackButton:true,

	showMenuButton:false

}">
	
	<div class="page-content padding-top short-padding">

		<div class="tabBarWrap">

     
			<div class="tabItems">
          
          <span class="fl"  v-for="item in tabs"  :class=" activeTabIndex==$index? 'active':'' "   @click="tabTypes($index)">{{item}}</span>

         

      </div>
			

		</div>


   
      
      <ul class="allLists">
        
        <li v-for="item in answers">
          <p class="answer">{{item.answer}}</p>

          <p class="question">{{ item.question}}</p>
        </li >
      </ul>

   

			

	</div>
</div>
</template>

<script>
var answers=[
    {
      'answer':'问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1',
      'question':'回答一问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1'
    },
    {
      'answer':'问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1',
      'question':'回答一问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1'

    },
    {
      'answer':'问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1',
      'question':'回答一问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1'
    },
    {
      'answer':'问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1',
      'question':'回答一问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1问题1'
      
    }
]

export default {

  name: 'questions',

  data () {
    return {
    	tabs: [
          "开户类",
          "认购类",
          "转让类"
        ],
        activeTabIndex: 0,
        answers:answers,
        
    };
  },
  computed:{

   /* activeTabIndex:function(){
      console.log(this.activeTabIndex)
    }*/

  },
  watch:{
    activeTabIndex:function(val,oldVal){

       console.log('new: %s, old: %s', val, oldVal)
    }

  },
  methods:{

  	tabTypes(i){
      this.activeTabIndex=i
    }
  }
};
</script>
