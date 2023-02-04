import {html, LitElement, PropertyValues, TemplateResult, unsafeCSS} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {when} from 'lit/directives/when.js';
import {map} from 'lit/directives/map.js';
import {GridStack, GridStackOptions} from 'gridstack';

// @ts-ignore
import style from 'gridstack/dist/gridstack.min.css';
import {DashboardWidget, WidgetJSON} from "@toolboard/tb-utils";

@customElement("tb-grid")
export class TbGrid extends LitElement {

    static styles = [unsafeCSS(style)];

    @property() // list of grid items
    public widgets?: DashboardWidget[];

    @property() // optional replacement for widgets property: return them with a promise (useful for API calls)
    public widgetProvider?: Promise<DashboardWidget[]>;

    @property()
    public loading: boolean = false;

    @property()
    public float?: boolean;

    @state()
    protected grid?: GridStack;

    /* -------------------- */

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);

        if (this.widgetProvider) {
            this.loading = true;
            this.widgetProvider.then((widgets: DashboardWidget[]) => {
                this.widgets = widgets;
                this.loading = false;
            })
        }
    }

    // Only used for logging purposes
    protected shouldUpdate(_changedProperties: PropertyValues): boolean {
        console.log(_changedProperties);
        return super.shouldUpdate(_changedProperties);
    }

    protected updated(_changedProperties: PropertyValues) {
        console.log(_changedProperties);
        super.updated(_changedProperties);

        if(!this.grid) {
            this.loadGrid(undefined, false);
        }
    }

    /* -------------------- */

    protected loadGrid(element?: HTMLElement | null, replace: boolean = false) {
        console.log("Attempting to load Grid!");
        if(!element) {
            element = this.shadowRoot?.getElementById('grid');
        }
        if(element && (!this.grid || replace)) {
            const options: GridStackOptions = {
                float: this.float,
                margin: 6
            }
            console.log("Loading grid with the following options:");
            console.log(options);
            this.grid = GridStack.init(options, element);
        }
    }

    /* -------------- */

    render(): TemplateResult {
        console.log("Rendering tb-grid!");
        return html`
            <div style="height: 100%; display: flex; overflow-y: scroll;">
                ${when(this.widgets, () => {
                    return html`
                        <div id="grid" style="flex: 1;">
                            ${map(this.widgets, (widget) => {
                                const widgetJSON: WidgetJSON = JSON.parse(widget.widget.widgetJSON)
                                return html`
                                    <div class="grid-stack-item" gs-x="${widget.location.x}" gs-y="${widget.location.y}"
                                         gs-w="${widget.location.width}" gs-h="${widget.location.height}">
                                        <div class="grid-stack-item-content"
                                             style="background: var(--sl-color-background-500)">
                                            ${when(widgetJSON.content,
                                                    () => html`<tb-widget-container .widgetJSON="${widgetJSON}"></tb-widget-container>`,
                                                    () => html`<span>No Content.</span>`
                                            )}
                                        </div>
                                    </div>
                                `
                            })}
                        </div>
                    `
                }, () => {
                    if (this.loading) {
                        return html`
                            <div>
                                <sl-spinner></sl-spinner>
                                <span>Loading Dashboard..</span>
                            </div>
                        `
                    } else {
                        return html`
                            <div>
                                <span>No Widgets have been found.</span>
                            </div>
                        `
                    }
                })}
            </div>
        `
    }
}