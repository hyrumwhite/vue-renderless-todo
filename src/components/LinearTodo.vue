<template lang="html">
  <div class="linear-todo">
    <TodoListScaffold>
      <linear-input label="New Todo" slot="input" background="white" class="todo-input"></linear-input>
      <span slot="list" slot-scope="{todo}" class="todo-list-item">
        <span :class="{completed: todo.complete}">{{todo.name}}</span>
      </span>
      <button slot="delete" slot-scope="scope">Delete</button>
    </TodoListScaffold>
  </div>
</template>

<script>
import TodoListScaffold from '@/components/TodoListScaffold';
import MaterialInput from '@/components/MaterialInput';
export default {
	components: {
		TodoListScaffold,
		MaterialInput,
	},
};
</script>

<style lang="stylus" scoped>
.linear-todo {
  width: 32rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  margin-bottom: 1rem;
  background: white;

  >>> .list-item {
    margin-top: 0.5rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }

  linear-input {
    margin-bottom: 0.5rem;
  }

  .todo-list-item {
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    cursor: pointer;

    &:hover {
      span {
        text-decoration: line-through;
        text-decoration-color: green;
      }
    }

    span {
      &.completed {
        text-decoration: line-through;
      }
    }
  }

  button {
    $red = rgb(244, 67, 54);
    cursor: pointer;
    background: transparent;
    border: 1px solid $red;
    color: $red;
    border-radius: 16rem;
    padding: 0.25rem;
    transition: 200ms;

    &:hover {
      background: $red;
      color: white;
    }
  }
}
</style>
