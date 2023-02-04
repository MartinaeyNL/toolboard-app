import {LitElement, html} from "lit";
import {customElement} from "lit/decorators.js";

@customElement("mnl-test-widget")
export class MnlTestWidget extends LitElement {

    render() {
        return html`
            <span>Test222</span>
            <span>Does it work? It might.. That would be awesome.</span>
        `
    }
}