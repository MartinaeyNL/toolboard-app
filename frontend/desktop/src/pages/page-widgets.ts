import {html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {LitElement} from "lit";
import {globalStyle} from "@toolboard/tb-utils";

@customElement("page-widgets")
export class PageWidgets extends LitElement {

    static styles = [globalStyle];

    protected render(): TemplateResult {
        return html`
            <div style="display: flex; height: 100%;">
                <div style="flex: 1; display: flex; color: white; padding: 24px;">
                    <div class="container" style="flex: 1; justify-content: start; align-items: start; gap: 24px;">
                        <div id="container-title">
                            <span style="font-size: var(--sl-font-size-x-large)">Widgets Overview</span>
                        </div>
                        <span>No content yet.</span>
                    </div>
                </div>
            </div>
        `
    }
}