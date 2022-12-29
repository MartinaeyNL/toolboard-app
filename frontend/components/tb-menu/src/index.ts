import {html, LitElement, TemplateResult} from "lit";
import {customElement} from 'lit/decorators.js'

@customElement("tb-menu")
export class TbMenu extends LitElement {

    protected render(): TemplateResult {
        return html`
            <div style="height: 100%;">
                <div style="display: flex; flex-direction: column; align-items: center; padding: 18px; gap: 18px; height: calc(100% - 36px);">
                    <div>
                        <sl-tooltip content="My dashboards" placement="right">
                            <sl-icon-button name="columns-gap" label="My dashboards" style="font-size: 2rem;"></sl-icon-button>
                        </sl-tooltip>
                    </div>
                    <div>
                        <sl-tooltip content="My widgets" placement="right">
                            <sl-icon-button name="clipboard-data" label="My widgets" style="font-size: 2rem;"></sl-icon-button>
                        </sl-tooltip>
                    </div>
                    <div>
                        <sl-tooltip content="Edit" placement="right">
                            <sl-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></sl-icon-button>
                        </sl-tooltip>
                    </div>
                    <div style="margin-top: auto;">
                        <sl-tooltip content="Settings" placement="right">
                            <sl-icon-button name="gear" label="Settings" style="font-size: 2rem;"></sl-icon-button>
                        </sl-tooltip>
                    </div>
                </div>
            </div>
        `
    }
}