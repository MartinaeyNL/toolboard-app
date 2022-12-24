import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";

@customElement("page-dashboard")
export class PageDashboard extends LitElement {

    protected render() {
        return html`
            <div style="display: flex; justify-content: center; align-items: center; color: white; height: 100%;">
                <span>Dashboard Page</span>
            </div>
        `
    }
}