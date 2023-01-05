import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, query, state} from "lit/decorators.js";
import {createNewDashboard, Dashboard, globalStyle} from "@toolboard/tb-utils";

@customElement("tb-dashboard-createform")
export class TbDashboardCreateForm extends LitElement {

    static styles = [globalStyle];

    @query('#dialog')
    protected dialog?: HTMLElement

    @state()
    protected dashboard: Dashboard

    constructor() {
        super();
        this.dashboard = {
            id: 0,
            displayName: ""
        }
    }

    /* ----------------------------- */

    protected openDialog() {
        if (this.dialog) {
            (this.dialog as any).show();
        }
    }

    protected closeDialog() {
        if (this.dialog) {
            (this.dialog as any).hide();
        }
    }

    protected cancel() {
        this.dispatchEvent(new CustomEvent('close'))
        this.closeDialog();
    }

    protected createDashboard() {

        if (this.dashboard.displayName.length > 0) {
            console.log("Hi!")
            createNewDashboard(this.dashboard).then((dashboard) => {
                console.log(dashboard);
                this.dispatchEvent(new CustomEvent('create'))
            }).catch((e) => {
                console.error(e);
            }).finally(() => {
                this.closeDialog();
            })
        } else {
            this.shadowRoot?.querySelectorAll('sl-input').forEach((elem) => {
                (elem as HTMLFormElement).reportValidity();
            })
        }
    }

    protected render(): TemplateResult {
        return html`

            <!-- Dialog that includes a form -->
            <sl-dialog label="New Dashboard" id="dialog">
                <div class="container" style="padding: 0; width: 100%; gap: 24px;">
                    <div style="width: 100%;">
                        <sl-input id="displayName" label="Displayname" help-text="What's the name of your dashboard?"
                                  minlength="1" required .value="${this.dashboard.displayName}"
                                  @sl-change="${(event: Event) => {
                                      this.dashboard.displayName = (event.currentTarget as any).value;
                                      this.requestUpdate();
                                  }}" autofocus>
                        </sl-input>
                    </div>
                </div>
                <div slot="footer">
                    <sl-button @click="${() => this.cancel()}">Close</sl-button>
                    <sl-button variant="primary" @click="${() => this.createDashboard()}">Create Dashboard</sl-button>
                </div>
            </sl-dialog>

            <!-- Button to open the dialog -->
            <sl-button variant="default" @click="${() => this.openDialog()}">
                <sl-icon slot="prefix" name="plus"></sl-icon>
                Create new board
            </sl-button>
        `
    }
}