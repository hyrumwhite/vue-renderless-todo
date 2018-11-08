let element = {
	template: `
    <style>
      .linear-input {
        position:relative;
      }
      .linear-input input {
        background:transparent;
        z-index:1;
        width: calc(100% - 24px);
        font-size:16px;
        border-radius:16px;
        border: 1px solid #ccc;
        padding:8px;
        padding-left:12px;
        outline:none;
        transition: all .3s cubic-bezier(.25,.8,.25,1);
      }
      .linear-input input:focus {
        border: 1px solid #106cc8;
      }
      .linear-input label {
        pointer-events: none;
        color:rgba(0,0,0, .62);
        user-select:none;
        cursor:text;
        font-size:1em;
        position:absolute;
        top:10px;
        left:12px;
        transition: all .3s cubic-bezier(.25,.8,.25,1), padding .4s cubic-bezier(.25,.8,.25,1);
      }
      .linear-input label.focused, .linear-input input:focus + label {
        padding-left:4px;
        top:-8px;
        font-size:.82em;
        color:#106cc8;
        padding-right:4px;
      }
    </style>
    <div class="linear-input">
      <input>
      <label></label>
    </div>
  `,
};

let template = document.createElement('template');
template.innerHTML = element.template;

export default class WcInput extends HTMLElement {
	static get observedAttributes() {
		return ['value', 'focused', 'label', 'background'];
	}
	attributeChangedCallback(name, oldValue, newValue) {
		name === 'value' && (this.value = newValue);
		name === 'focused' && (this.focused = newValue);
		name === 'label' && (this.label.textContent = newValue);
		name === 'background' && (this.background = newValue);
	}
	set background(value) {
		this.label.background = value;
	}
	get value() {
		return this.input.value;
	}

	set value(value) {
		this.input.value = value;
		this.handleFocus(value !== '');
	}

	get focused() {
		return this.input.className.includes('focused');
	}
	set focused(value) {
		this.handleFocus(value);
	}

	handleFocus(focused) {
		if (focused) {
			this.label.style.background = this.label.background;
			this.label.classList.add('focused');
		} else if (!this.value) {
			this.label.classList.remove('focused');
		}
	}
	constructor() {
		super(); // always call super() first in the constructor.
		this.root = this.attachShadow({ mode: 'open' });
		this.root.appendChild(template.content.cloneNode(true));
		this.input = this.root.querySelector('input');
		this.label = this.root.querySelector('label');
		this.input.addEventListener('focus', () => this.handleFocus(true));
		this.input.addEventListener('blur', () => this.handleFocus(false));
	}
}
