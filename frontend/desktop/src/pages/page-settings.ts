import {html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {globalStyle} from "@toolboard/tb-utils";

@customElement("page-settings")
export class PageSettings extends LitElement {

    static styles = [globalStyle];

    protected render(): TemplateResult {
        return html`
            <div style="display: flex; height: 100%;">
                <div style="flex: 1; display: flex; color: white; padding: 24px;">
                    <div class="container" style="flex: 1; justify-content: start; align-items: start; gap: 24px;">
                        <div id="container-title">
                            <span style="font-size: var(--sl-font-size-x-large)">My Settings</span>
                        </div>
                        <div style="flex: 1; display: flex; width: 100%;">
                            <div class="container" style="flex: 1; padding: 12px 24px; justify-content: start; align-items: start; background: var(--sl-color-background-700)">
                                <sl-tab-group>
                                    <sl-tab slot="nav" panel="general">General</sl-tab>
                                    <sl-tab slot="nav" panel="custom">Custom</sl-tab>
                                    <sl-tab slot="nav" panel="advanced">Advanced</sl-tab>
                                    <sl-tab slot="nav" panel="disabled" disabled>Disabled</sl-tab>

                                    <sl-tab-panel name="general">This is the general tab panel.</sl-tab-panel>
                                    <sl-tab-panel name="custom">This is the custom tab panel.</sl-tab-panel>
                                    <sl-tab-panel name="advanced">This is the advanced tab panel.</sl-tab-panel>
                                    <sl-tab-panel name="disabled">This is a disabled tab panel.</sl-tab-panel>
                                </sl-tab-group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}