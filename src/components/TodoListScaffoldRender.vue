<script>
import { mapState, mapMutations } from 'vuex';
import * as Mutation from '@/mutation-types';
export default {
	render(h) {
		let inputDiv = h(
			'div',
			{ on: { input: this.logInput, keydown: this.addTodo } },
			this.$slots.input
		);
		let children = [inputDiv];
		for (let [index, todo] of this.todos.entries()) {
			let deleteIconSlotContainer = h(
				'div',
				{
					attrs: { class: 'delete-icon-div' },
					on: {
						click: $event => {
							this.REMOVE_TODO({ index });
							$event.preventDefault();
							$event.stopPropagation();
						},
					},
				},
				this.$slots.delete
			);
			let listItem = this.$scopedSlots.list({ todo });
			let deleteIconOrder = +this.$slots.delete[0].data.attrs.order;
			let listItemOrder = +listItem.data.attrs.order;
			let taskRowChildren = [];
			taskRowChildren[deleteIconOrder] = this.$slots.delete[0];
			taskRowChildren[listItemOrder] = listItem;
			let taskRow = h(
				'div',
				{
					attrs: {
						key: index,
						class: 'list-item',
					},
					on: {
						click: () => this.TOGGLE_COMPLETE({ index }),
					},
				},
				taskRowChildren
			);
			children.push(taskRow);
		}

		let parent = h('div', { attrs: { class: 'state-todo-list' } }, children);
		return parent;
	},
	computed: {
		...mapState(['todos']),
	},
	data() {
		return {
			newTodo: '',
		};
	},
	methods: {
		...mapMutations([Mutation.ADD_TODO, Mutation.TOGGLE_COMPLETE, Mutation.REMOVE_TODO]),
		logInput($event) {
			this.newTodo = $event.target.value;
			console.log(this.newTodo);
		},
		addTodo($event) {
			if (event.keyCode !== 13) {
				return;
			}
			this.ADD_TODO({ text: this.newTodo });
			$event.target.value = '';
			this.newTodo = '';
		},
	},
};
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
