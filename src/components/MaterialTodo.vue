<template lang="html">
  <div class="material-todo">
    <TodoListScaffold>
      <MaterialInput slot="input" class="todo-input" label="New Todo"/>
      <span slot="list" slot-scope="{todo}" class="todo-list-item" order="2">
        <input v-model="todo.complete" type="checkbox">
        <span :class="{completed: todo.complete}">{{todo.name}}</span>
      </span>
      <i slot="delete" order="1" class="material-icons">delete_outline</i>
    </TodoListScaffold>
  </div>
</template>

<script>
import TodoListScaffold from '@/components/TodoListScaffoldRender';
// comment out the line below to use the render function
// import TodoListScaffold from '@/components/TodoListScaffoldRender';
import MaterialInput from '@/components/MaterialInput';
export default {
	components: {
		TodoListScaffold,
		MaterialInput,
	},
};
</script>

<style lang="stylus">
.material-todo {
  width: 32rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fafafa;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14), 0 1px 14px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: 1rem;

  .todo-input {
    margin-bottom: 0.5rem;
  }

  .material-icons {
    cursor: pointer;
    opacity: 0;

    &:hover {
      color: red;
      opacity: 1;
    }
  }

  .todo-list-item {
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    cursor: pointer;

    &:hover {
      & + .delete-icon-div {
        .material-icons {
          opacity: 1;
        }
      }
    }

    span {
      &.completed {
        text-decoration: line-through;
      }
    }
  }
}
</style>
