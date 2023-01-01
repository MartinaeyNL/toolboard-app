import {css, html, LitElement, TemplateResult} from "lit";
import {Dashboard, DashboardWidget, globalStyle} from "@toolboard/tb-utils";
import { customElement, property, query } from "lit/decorators.js";
import {when} from 'lit/directives/when.js';
import "@toolboard/tb-grid";

//language=css
const styling = css`
    
    .controls-row {
        flex-direction: row;
        width: 100%;
        padding: 0;
        justify-content: space-between;
    }
`
@customElement("tb-dashboard-preview")
export class TbDashboardPreview extends LitElement {

    static styles = [globalStyle, styling];

    @property()
    public dashboard?: Dashboard;

    @query('.drawer-placement-bottom')
    protected drawerElem?: HTMLElement;

    private readonly widgetProvider: () => Promise<DashboardWidget[]>;

    constructor() {
        super();
        this.widgetProvider = async (): Promise<DashboardWidget[]> => {
            return [{
                id: "egwagoewjhgg",
                version: 1,
                displayName: "Widget 1",
                location: {
                    id: "eygawhreshbwreabhsjdehbw",
                    x: 2,
                    y: 2,
                    width: 5,
                    height: 3
                },
                widget: {
                    id: "ejogywpgwgag",
                    displayName: "Special Widget created by MartinaeyNL",
                    author: "MartinaeyNL",
                    htmlContent: "<span>Text of the Custom Widget 1 widget. Right?</span>"
                }
            }]
        }
    }

    render(): TemplateResult {
        console.log("Rendering tb-dashboard-preview!")
        return html`
            <div style="display: flex; height: 100%;">
                ${when(this.dashboard, () => html`
                    <div class="container" style="flex: 1; padding: 0;">
                        
                        <!-- Header Controls -->
                        <div class="container controls-row">
                            <div class="container" style="flex-direction: row;">
                                <div>
                                    <sl-tooltip content="Back" placement="bottom">
                                        <sl-icon-button name="chevron-left" label="Back" @click="${() => {
                                            this.dispatchEvent(new CustomEvent("close"))
                                        }}" style="font-size: 1.5rem;"></sl-icon-button>
                                    </sl-tooltip>
                                </div>
                            </div>
                            <div class="container" style="gap: 6px;">
                                <div>
                                    <span style="font-size: var(--sl-font-size-x-large)">${this.dashboard?.displayName}</span>
                                </div>
                                <div>
                                    <span style="font-size: var(--sl-font-size-small); opacity: 0.5;">Last updated at 9:13</span>
                                </div>
                            </div>
                            <div class="container" style="flex-direction: row;">
                                <sl-tooltip content="Settings" placement="bottom">
                                    <sl-icon-button name="gear" label="Settings" style="font-size: 1.5rem;"></sl-icon-button>
                                </sl-tooltip>
                            </div>
                        </div>
                        
                        <!-- The grid -->
                        <div style="flex: 1; display: flex; width: 100%; border: 4px solid var(--sl-color-background-700)">
                            <tb-grid .widgetProvider="${this.widgetProvider()}" float="true" style="flex: 1;"></tb-grid>
                        </div>
                        
                        <!-- Footer Controls -->
                        <div class="container controls-row" style="background: var(--sl-color-background-700)">
                            <div class="container" style="flex-direction: row;">
                                <sl-tooltip content="Settings" placement="top">
                                    <sl-icon-button name="gear" label="Settings" style="font-size: 1.5rem;"></sl-icon-button>
                                </sl-tooltip>
                            </div>
                            <div class="container" style="flex-direction: row">
                                <div>
                                    <sl-button variant="default" size="medium" @click="${() => {
                                        console.log(this.drawerElem);
                                        (this.drawerElem as any).show();
                                    }}">
                                        <sl-icon slot="suffix" name="plus"></sl-icon>
                                        Add Widget
                                    </sl-button>
                                </div>
                            </div>
                            <div class="container" style="flex-direction: row;">
                                <sl-tooltip content="Settings" placement="top">
                                    <sl-icon-button name="gear" label="Settings" style="font-size: 1.5rem;"></sl-icon-button>
                                </sl-tooltip>
                            </div>
                        </div>
                    </div>
                `, () => html`
                    <div>
                        <span>No dashboard found to preview.</span>
                    </div>
                `)}
            </div>
            
            <!-- Widget Area -->
            <sl-drawer label="Drawer" placement="bottom" class="drawer-placement-bottom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <sl-button slot="footer" variant="primary">Close</sl-button>
            </sl-drawer>
        `
    }
}