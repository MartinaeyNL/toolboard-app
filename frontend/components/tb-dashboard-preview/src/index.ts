import {html, LitElement, PropertyValues, TemplateResult, unsafeCSS} from "lit";
import { customElement } from "lit/decorators.js";
import "@toolboard/tb-grid";

@customElement("tb-dashboard-preview")
export class TbDashboardPreview extends LitElement {

    render(): TemplateResult {
        return html`
            <div style="height: 100%; display: flex;">
                <tb-grid float="true" style="flex: 1;"></tb-grid>
            </div>
        `
    }
}