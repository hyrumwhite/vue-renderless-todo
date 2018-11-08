<template>
  <div class="material-input">
    <label :class="{focused: shouldMove}" @click="$refs.input.focus()">{{label}}</label>
    <input v-bind="$attrs" v-on="inputListeners"
      @focus="focus = true"
      @blur="focus = false"
      :value="value"
      ref="input">
    <div class="focus-indicator" :class="{focused: focus}"></div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props:["label", "value"],
  data() {
    return {
      focus: false,
      content: ''
    }
  },
  computed: {
    inputListeners() {
      let vm = this
      return Object.assign({}, this.$listeners, {
        // This ensures that the component works with v-model
        input(event) {
          vm.$emit('input', event.target.value)
        }
      });
    },
    shouldMove() {
      return this.focus || this.value;
    }
  },
  methods: {
    
  }
}
</script>

<style lang="stylus" scoped>
.material-input {
  position:relative;
  margin-top:8px;
  input {
   border:none;
   width:100%;
   outline: none;
   padding-bottom: 4px;
   background:transparent;
  }
  label {
    position:absolute
    font-size:16px;
    color: rgba(black, .62);
    transition: all .3s cubic-bezier(.25,.8,.25,1);
    top:0px;
    cursor:text;
    &.focused {
      top: -16px;
      font-size:14px;
    }
  }
  .focus-indicator {
    position:absolute;
    bottom:0px;
    width:100%;
    height:1px;
    background:rgba(0,0,0,0.12);
    transition:200ms;
    &.focused {
      height: 2px;
      background:rgb(33, 150, 243);
    }
  }
}
</style>
