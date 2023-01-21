import {html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {LitElement} from "lit";
import {globalStyle, Widget} from "@toolboard/tb-utils";
import {state} from "lit/decorators.js";
import { choose } from "lit/directives/choose.js";
import "@toolboard/tb-widget-browser";
import "@toolboard/tb-widget-editor";

@customElement("page-widgets")
export class PageWidgets extends LitElement {

    static styles = [globalStyle];

    @state()
    protected selected?: Widget;

    @state()
    protected page: "browse" | "editor";

    constructor() {
        super();
        this.page = "browse";
    }

    protected render(): TemplateResult {
        return html`
            <div style="display: flex; height: 100%;">
                <div style="flex: 1; display: flex; color: white; padding: 24px;">
                    ${choose(this.page, [
                        ["browse", () => html`<tb-widget-browser @onedit="${(ev: CustomEvent) => { this.selected = ev.detail.value; this.page = 'editor' }}"></tb-widget-browser>`],
                        ["editor", () => html`<tb-widget-editor style="flex: 1;" .widget="${this.selected}" @close="${() => this.page = 'browse' }"></tb-widget-editor>`]
                    ])}
                </div>
            </div>
        `
    }
}