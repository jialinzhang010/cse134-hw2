class HelloWorldLog extends HTMLElement {
  connectedCallback() {
    if (this._logged) return;
    console.log('Hello world!');
    this._logged = true;
  }
}

customElements.define('hello-world-log', HelloWorldLog);

