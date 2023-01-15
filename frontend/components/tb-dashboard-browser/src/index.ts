import {css, html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import {classMap} from 'lit/directives/class-map.js';
import {map} from 'lit/directives/map.js';
import {when} from 'lit/directives/when.js';
import {until} from 'lit/directives/until.js';
import {globalStyle, Dashboard} from "@toolboard/tb-utils";
import "@toolboard/tb-dashboard-createform";
import {ToolboardClient} from "@toolboard/tb-api";

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

    private dashboardsTemplate: () => Promise<TemplateResult>

    constructor() {
        super();
        const tbClient = new ToolboardClient({ BASE: 'http://localhost:8080/api/v1' });
        this.dashboardsTemplate = async () => {
            const dashboards: Dashboard[] = (await tbClient.dashboard.getDashboardAll() as any);
            console.log(dashboards);
            return html`
                ${map(dashboards, (dashboard) => {
                    const itemClassMap = {
                        "item-area": this.selectedDashboard?.id != dashboard.id,
                        "item-area--selected": this.selectedDashboard?.id == dashboard.id
                    }
                    return html`
                        <div class="${classMap(itemClassMap)}" @click="${() => this.selectDashboard(dashboard)}"
                             style="width: 100%;">
                            <div id="item-container" class="container" style="flex-direction: row; padding: 18px;">
                                <div>
                                    <sl-icon-button name="columns-gap" label="My dashboards"
                                                    style="font-size: 2rem;"></sl-icon-button>
                                </div>
                                <div class="container" style="align-items: start; gap: 6px; padding: 0; flex: 1;">
                                    <div class="container"
                                         style="flex-direction: row; justify-content: space-between; width: 100%; padding: 0;">
                                        <span style="font-size: var(--sl-font-size-large)">${dashboard.displayName}</span>
                                        <div style="opacity: 0.8;">
                                            <sl-badge variant="primary">Primary</sl-badge>
                                            <sl-badge variant="success">Util</sl-badge>
                                        </div>
                                    </div>
                                    <div class="container"
                                         style="flex-direction: row; justify-content: start; padding: 0; font-size: var(--sl-font-size-small); opacity: 0.5;">
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
            `
        }
        this.dashboards = [
            { id: 1, createdAt: Date.now(), updatedAt: Date.now(), displayName: "Dashboard 1", description: "The first dashboard on the list" },
            { id: 2, createdAt: Date.now(), updatedAt: Date.now(), displayName: "Dashboard 2", description: "Another dashboard to play with" }
        ]
    }

    protected selectDashboard(dashboard: Dashboard) {
        this.selectedDashboard = (this.selectedDashboard == dashboard ? undefined : dashboard);
    }

    protected updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);
        if(_changedProperties.has("selectedDashboard")) {
            this.dispatchEvent(new CustomEvent("select", { detail: { value: this.selectedDashboard }}))
        }
    }


    protected render(): TemplateResult {
        return html`
            <div id="top_container" style="height: 100%;">
                <div style="display: flex; height: 100%;">
                    <div class="container" style="flex: 1; align-items: start; gap: 24px;">
                        <div style="display: flex; justify-content: space-between; width: 100%;">
                            <div id="container-title">
                                <span style="font-size: var(--sl-font-size-x-large)">Browse Dashboards</span>
                            </div>
                            <div class="container" style="padding: 0; flex-direction: row;">
                                <div>
                                    <tb-dashboard-createform></tb-dashboard-createform>
                                </div>
                            </div>
                        </div>
                        <div style="flex: 1; width: 100%; position: relative;">
                            <sl-split-panel position="65" snap="65%" style="height: 100%; padding: 0;">

                                <!-- List of dashboards -->
                                <div slot="start" id="dashboards-panel" class="container" style="align-items: start; padding: 0 24px 0 0; display: flex; flex-direction: row;">
                                    <div class="container" style="flex: 1; padding: 0;">
                                        ${until(this.dashboardsTemplate(), html`Loading..`)}
                                    </div>
                                </div>

                                <!-- Preview and actions -->
                                <div slot="end" id="preview-panel" class="container" style="padding: 0 0 0 24px; display: flex; flex-direction: row; height: 100%;">
                                    ${when(this.selectedDashboard, () => {
                                        return html`
                                            <div class="container" style="flex: 1; height: 100%; gap: 24px; background: var(--sl-color-background-700);">
                                                <span style="width: 100%; aspect-ratio: 16/9; background: gold;"></span>
                                                <div>
                                                    <span style="font-size: var(--sl-font-size-x-large);">${this.selectedDashboard?.displayName}</span>
                                                </div>
                                                <div class="container" style="flex: 1; padding: 0; justify-content: space-between; width: 100%;">
                                                    <span>${this.selectedDashboard?.description}</span>
                                                    <div class="container" style="padding: 0; width: 100%; display: flex;">
                                                        <div style="width: 100%;">
                                                            <div class="container" style="flex-direction: row;">
                                                                <sl-button variant="default" size="medium" style="width: 100%;" @click="${() => {
                                                                    this.dispatchEvent(new CustomEvent("onedit"))
                                                                }}">Edit</sl-button>
                                                                <sl-button variant="default" size="medium" style="width: 100%;" @click="${() => {
                                                                    this.dispatchEvent(new CustomEvent("onview"))
                                                                }}">Open</sl-button>
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