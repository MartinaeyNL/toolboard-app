import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property} from 'lit/decorators.js';
import {guard} from 'lit/directives/guard.js';

export enum MenuOption {
    PAGE_DASHBOARD = "dashboard",
    PAGE_WIDGETS = "widgets",
    PAGE_SETTINGS = "settings"
}
@customElement("tb-menu")
export class TbMenu extends LitElement {

    @property()
    protected selected?: MenuOption;

    protected updated(_changedProperties: PropertyValues) {
        if(_changedProperties.has("selected")) {
            this.dispatchEvent(new CustomEvent("change", { detail: { value: this.selected }}));
        }
        return false;
    }

    protected render(): TemplateResult {
        return html`
            ${guard([], () => html`
                <div style="height: 100%;">
                    <div style="display: flex; flex-direction: column; align-items: center; padding: 18px; gap: 18px; height: calc(100% - 36px);">
                        <div>
                            <sl-tooltip content="My dashboards" placement="right">
                                <sl-icon-button name="columns-gap" label="My dashboards" style="font-size: 2rem;" @click="${() => this.selected = MenuOption.PAGE_DASHBOARD}"></sl-icon-button>
                            </sl-tooltip>
                        </div>
                        <div>
                            <sl-tooltip content="My widgets" placement="right">
                                <sl-icon-button name="clipboard-data" label="My widgets" style="font-size: 2rem;" @click="${() => this.selected = MenuOption.PAGE_WIDGETS}"></sl-icon-button>
                            </sl-tooltip>
                        </div>
                        <div>
                            <sl-tooltip content="Edit" placement="right">
                                <sl-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></sl-icon-button>
                            </sl-tooltip>
                        </div>
                        <div style="margin-top: auto;">
                            <sl-tooltip content="Settings" placement="right">
                                <sl-icon-button name="gear" label="Settings" style="font-size: 2rem;" @click="${() => this.selected = MenuOption.PAGE_SETTINGS}"></sl-icon-button>
                            </sl-tooltip>
                        </div>
                    </div>
                </div>
            `
            )}
        `
    }
}