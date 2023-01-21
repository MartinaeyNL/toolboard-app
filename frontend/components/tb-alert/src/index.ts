import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property, query, state} from "lit/decorators.js";
import {when} from "lit/directives/when.js";

@customElement("tb-alert")
export class TbAlert extends LitElement {

    @property()
    protected variant?: "primary" | "success" | "warning" | "danger";

    @property()
    protected icon?: string;

    @property()
    protected heading?: string;

    @property()
    protected text?: string;

    @query("sl-alert")
    protected alertElem?: HTMLElement

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {
        if(!this.icon && this.variant) {
            switch (this.variant) {
                case "primary": this.icon = "info-circle"; break;
                case "success": this.icon = "check2-circle"; break;
                case "warning": this.icon = "exclamation-triangle"; break;
                case "danger": this.icon = "exclamation-octagon"; break;
            }
        }
        return super.shouldUpdate(_changedProperties);
    }

    protected render(): TemplateResult {
        return html`
            <sl-alert variant="primary" duration="3000" closable>
                ${when(this.icon, () => html`
                    <sl-icon slot="icon" name="${this.icon}"></sl-icon>
                `)}
                ${when(this.heading, () => html`
                    <strong>This is super informative</strong><br />
                `)}
                ${when(this.text, () => html`
                    ${this.text}
                `, () => html`
                    Example text
                `)}
            </sl-alert>
        `
    }

    public show() {
        if(this.alertElem) {
            (this.alertElem as any).toast();
        } else {
            console.error("Could not find alert html element.")
        }
    }
}