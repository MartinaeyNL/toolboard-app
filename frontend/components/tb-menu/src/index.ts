import {html, LitElement, TemplateResult} from "lit";
import {customElement} from 'lit/decorators.js'

@customElement("tb-menu")
export class TbMenu extends LitElement {

    protected render(): TemplateResult {
        return html`
            <span>This is toolboard menu.</span>
        `
    }
}