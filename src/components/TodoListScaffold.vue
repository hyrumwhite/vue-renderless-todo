<template lang="html">
  <div class="state-todo-list">
    <div @input="logInput" @keydown.enter="addTodo">
      <slot name="input"></slot>
    </div>
    <div v-for="(todo, index) of todos" :key="index" @click="TOGGLE_COMPLETE({index})" class="list-item">
      <slot name="list" :todo="todo"></slot>
      <div @click.stop.prevent="REMOVE_TODO({index})" class="delete-icon-div">
        <slot name="delete"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import * as Mutation from '@/mutation-types';
export default {
  computed: {
    ...mapState(['todos']),
  },
  data() {
    return {
      newTodo:''
    }
  },
  methods: {
    ...mapMutations([Mutation.ADD_TODO, Mutation.TOGGLE_COMPLETE, Mutation.REMOVE_TODO]),
    logInput($event) {
      this.newTodo = $event.target.value;
      console.log(this.$refs.input);
    },
    addTodo($event) {
      this.ADD_TODO({text: this.newTodo});
      $event.target.value = '';
      this.newTodo = '';
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-item {
  display: flex;
  align-items: center;
}
.delete-icon-div {
  display: flex;
  align-items: center;
}
</style>
