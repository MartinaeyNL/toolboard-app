import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

//language=css
const styling = css`
`

@customElement("page-dashboard")
export class PageDashboard extends LitElement {

    static styles = [styling]

    protected render() {
        return html`
            <div style="display: flex; justify-content: center; align-items: center; color: white; height: 100%;">
                <span>Dashboard Page</span>
                <sl-button variant="primary">Primary</sl-button>
                <sl-button>Button</sl-button>
                <sl-color-picker></sl-color-picker>
            </div>
        `
    }
}