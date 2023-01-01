import {css, html, LitElement} from "lit";
import {customElement, state} from "lit/decorators.js";
import {choose} from "lit/directives/choose.js";
import {cache} from 'lit/directives/cache.js';
import {Dashboard} from "@toolboard/tb-utils";
import '@toolboard/tb-dashboard-browser';
import '@toolboard/tb-dashboard-preview';

//language=css
const styling = css`
`

@customElement("page-dashboard")
export class PageDashboard extends LitElement {

    static styles = [styling]

    @state()
    protected selected?: Dashboard;

    @state()
    protected page: "browse" | "view";

    constructor() {
        super();
        this.page = "browse";
    }

    protected render() {
        return html`
            <div style="display: flex; height: 100%;">
                <div style="flex: 1; display: flex; color: white; padding: 24px;">
                    ${choose(this.page, [
                        ["browse", () => html`
                            <tb-dashboard-browser @select="${(ev: CustomEvent) => this.selected = ev.detail.value}"
                                                  @onedit="${() => this.page = 'view'}"
                                                  @onview="${() => this.page = 'view'}"
                                                  style="flex: 1; "
                            ></tb-dashboard-browser>`],
                        ["view", () => html`
                            <tb-dashboard-preview .dashboard="${this.selected}" @close="${() => this.page = 'browse'}" style="flex: 1;"></tb-dashboard-preview>`]
                    ])}
                </div>
            </div>
        `
    }
}