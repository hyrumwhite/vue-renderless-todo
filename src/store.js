import Vue from 'vue';
import Vuex from 'vuex';
import * as Mutation from './mutation-types';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todos: [{ name: 'Create a Todo List App', complete: true }],
	},
	mutations: {
		[Mutation.ADD_TODO](state, { text }) {
			state.todos.push({ name: text, complete: false });
		},
		[Mutation.REMOVE_TODO](state, { index }) {
			state.todos.splice(index, 1);
		},
		[Mutation.UPDATE_TODOS](state, { todos }) {
			state.todos = todos;
		},
		[Mutation.TOGGLE_COMPLETE]: (state, { index }) => {
			state.todos[index].complete = !state.todos[index].complete;
		},
	},
	actions: {},
});
