import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import {classMap} from 'lit/directives/class-map.js';
import {map} from 'lit/directives/map.js';
import {when} from 'lit/directives/when.js';
import {globalStyle, Dashboard} from "@toolboard/tb-utils";

//language=css
const styling = css`
    .item-area {
        background: var(--sl-color-background-700);
        border-left: 2px solid transparent;
        transition: border-color 0.2s linear;
    }
    .item-area--selected {
        background: var(--sl-color-background-500);
        border-left: 2px solid yellow;
    }
    .item-area:hover ,item-area--selected:hover {
        background: var(--sl-color-background-600);
        border-color: yellow;
    }
    .split-panel-snapping-dots {
        content: '';
        position: absolute;
        bottom: -12px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--sl-color-neutral-400);
        transform: translateX(-3px);
        left: 65%;
    }

    #delete-btn sl-icon-button::part(base):hover,
    #delete-btn sl-icon-button::part(base):focus {
        color: var(--sl-color-danger-500);
    }

    #delete-btn sl-icon-button::part(base):active {
        color: var(--sl-color-danger-300);
    }
`;

@customElement("tb-dashboard-browser")
export class TbDashboardBrowser extends LitElement {

    static styles = [styling, globalStyle];

    @property()
    public dashboards: Dashboard[];

    @state()
    private selectedDashboard?: Dashboard;

    constructor() {
        super();
        this.dashboards = [
            { Id: "rhuigaheguige", DisplayName: "Dashboard 1", Description: "The first dashboard on the list", Version: 2},
            { Id: "ewjkstpgjtip", DisplayName: "Dashboard 2", Description: "Another dashboard to play with", Version: 3}
        ]
    }

    protected selectDashboard(dashboard: Dashboard) {
        this.selectedDashboard = (this.selectedDashboard == dashboard ? undefined : dashboard);
    }


    protected render(): TemplateResult {
        return html`
            <div id="top_container" style="height: 100%;">
                <div style="display: flex; height: 100%;">
                    <div class="container" style="flex: 1; align-items: start; gap: 24px;">
                        <div id="container-title">
                            <span style="font-size: var(--sl-font-size-x-large)">Browse Dashboards</span>
                        </div>
                        <div style="flex: 1; width: 100%; position: relative;">
                            <sl-split-panel position="65" snap="65%" style="height: 100%; padding: 0;">

                                <!-- List of dashboards -->
                                <div slot="start" id="dashboards-panel" class="container" style="align-items: start; padding: 0 24px 0 0; display: flex; flex-direction: row;">
                                    <div class="container" style="flex: 1; padding: 0;">
                                        ${map(this.dashboards, (dashboard) => {
                                            const itemClassMap = {
                                                "item-area": this.selectedDashboard?.Id != dashboard.Id,
                                                "item-area--selected": this.selectedDashboard?.Id == dashboard.Id
                                            }
                                            return html`
                                                <div class="${classMap(itemClassMap)}" @click="${() => this.selectDashboard(dashboard)}" style="width: 100%;">
                                                    <div id="item-container" class="container" style="flex-direction: row; padding: 18px;">
                                                        <div>
                                                            <sl-icon-button name="columns-gap" label="My dashboards" style="font-size: 2rem;"></sl-icon-button>
                                                        </div>
                                                        <div class="container" style="align-items: start; gap: 6px; padding: 0; flex: 1;">
                                                            <div class="container" style="flex-direction: row; justify-content: space-between; width: 100%; padding: 0;">
                                                                <span style="font-size: var(--sl-font-size-large)">${dashboard.DisplayName}</span>
                                                                <div style="opacity: 0.8;">
                                                                    <sl-badge variant="primary">Primary</sl-badge>
                                                                    <sl-badge variant="success">Util</sl-badge>
                                                                </div>
                                                            </div>
                                                            <div class="container" style="flex-direction: row; justify-content: start; padding: 0; font-size: var(--sl-font-size-small); opacity: 0.5;">
                                                                <span>Includes:</span>
                                                                <div>
                                                                    <span>Twitch Chat,</span>
                                                                    <span>OBS Stats Panel,</span>
                                                                    <span>Spotify Play Bar</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            `;
                                        })}
                                    </div>
                                </div>

                                <!-- Preview and actions -->
                                <div slot="end" id="preview-panel" class="container" style="padding: 0 0 0 24px; display: flex; flex-direction: row; height: 100%;">
                                    ${when(this.selectedDashboard, () => {
                                        return html`
                                            <div class="container" style="flex: 1; height: 100%; gap: 24px; background: var(--sl-color-background-700);">
                                                <span style="width: 100%; aspect-ratio: 16/9; background: gold;"></span>
                                                <div>
                                                    <span style="font-size: var(--sl-font-size-x-large);">${this.selectedDashboard?.DisplayName}</span>
                                                </div>
                                                <div class="container" style="flex: 1; padding: 0; justify-content: space-between; width: 100%;">
                                                    <span>${this.selectedDashboard?.Description}</span>
                                                    <div class="container" style="padding: 0; width: 100%; display: flex;">
                                                        <div style="width: 100%;">
                                                            <div class="container" style="flex-direction: row;">
                                                                <sl-button variant="default" size="medium" style="width: 100%;">Edit</sl-button>
                                                                <sl-button variant="default" size="medium" style="width: 100%;">Open</sl-button>
                                                            </div>
                                                        </div>
                                                        <div class="container" style="padding: 0; width: 100%; flex-direction: row; justify-content: space-between;">
                                                            <div id="delete-btn">
                                                                <sl-icon-button name="trash" label="Delete" style="font-size: 1.5rem;"></sl-icon-button>
                                                            </div>
                                                            <div>
                                                                <sl-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></sl-icon-button>
                                                                <sl-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></sl-icon-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        `
                                    }, () => {
                                        return html`
                                            <div class="container" style="flex: 1; height: 100%; padding: 0; background: var(--sl-color-background-700);">
                                                <span>No dashboard selected yet.</span>
                                            </div>
                                        `
                                    })}
                                </div>
                            </sl-split-panel>
                            <div class="split-panel-snapping-dots"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}