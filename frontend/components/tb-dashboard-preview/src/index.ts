import {html, LitElement, PropertyValues, TemplateResult, unsafeCSS} from "lit";
import { customElement } from "lit/decorators.js";
import "@toolboard/tb-grid";
import {DashboardWidget} from "@toolboard/tb-utils";

@customElement("tb-dashboard-preview")
export class TbDashboardPreview extends LitElement {

    render(): TemplateResult {
        const widgetProvider = async (): Promise<DashboardWidget[]> => {
            return [{
                Id: "egwagoewjhgg",
                DisplayName: "Widget 1",
                Location: {
                    Id: "eygawhreshbwreabhsjdehbw",
                    X: 2,
                    Y: 2,
                    Width: 5,
                    Height: 3
                },
                Widget: {
                    Id: "ejogywpgwgag",
                    DisplayName: "Special Widget created by MartinaeyNL",
                    Author: "MartinaeyNL"
                }
            }]
        };
        return html`
            <div style="height: 100%; display: flex;">
                <tb-grid .widgetProvider="${widgetProvider()}" float="true" style="flex: 1;"></tb-grid>
            </div>
        `
    }
}