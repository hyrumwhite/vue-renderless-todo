<template>
  <div class="home">
    <MaterialTodo/>
    <LinearTodo/>
  </div>
</template>

<script>
// @ is an alias to /src
import MaterialTodo from '@/components/MaterialTodo';
import LinearTodo from '@/components/LinearTodo';
import HelloWorld from '@/components/HelloWorld';
import * as Mutation from '@/mutation-types';

export default {
	name: 'home',
	components: {
		HelloWorld,
		MaterialTodo,
		LinearTodo,
	},
	subscriptions: {
		[Mutation.ADD_TODO]({ type, payload }, state) {
			console.log(payload);
		},
	},
};
</script>

<style lang="stylus" scoped>
.home {
  flex: 1 1 auto;
  display: flex;
  justify-content: space-around;
}
</style>
