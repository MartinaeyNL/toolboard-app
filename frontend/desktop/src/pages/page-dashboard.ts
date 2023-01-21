import {css, html, LitElement} from "lit";
import {customElement, query, state} from "lit/decorators.js";
import {choose} from "lit/directives/choose.js";
import {Dashboard} from "@toolboard/tb-utils";
import '@toolboard/tb-dashboard-browser';
import '@toolboard/tb-dashboard-preview';
import {TbAlert} from "@toolboard/tb-alert";

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

    @query("#delete-alert")
    protected deleteAlert?: TbAlert

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
                                                  @ondelete="${() => this.deleteDashboard(this.selected)}"
                                                  style="flex: 1;"
                            ></tb-dashboard-browser>`],
                        ["view", () => html`
                            <tb-dashboard-preview .dashboard="${this.selected}" @close="${() => this.page = 'browse'}" style="flex: 1;"></tb-dashboard-preview>`]
                    ])}
                </div>
            </div>
            <tb-alert id="delete-alert" variant="success" heading="Succesfully deleted ${this.selected?.displayName}"></tb-alert>
        `
    }

    /* ----------------------------------- */

    protected deleteDashboard(dashboard?: Dashboard) {
        console.log(dashboard);
        console.log(this.deleteAlert);
        const elem = this.shadowRoot?.getElementById("delete-alert");
        console.log(elem);
        (elem as any).show();
    }
}