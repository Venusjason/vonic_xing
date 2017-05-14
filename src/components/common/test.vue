<template>
<div class="testss"  @click="hhhh">

	{{uss}}

	
</div>

</template>

<script>
export default {

  name: 'test',

  props:['uss'],

  data () {
    return {

    };
  },

  methods:{

  	hhhh(){

  		alert(this.uss)
  	}
  }
};
</script>

<style lang="scss" scoped>

.testss{

	background:red;
}
</style>