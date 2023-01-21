import {css, html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property} from 'lit/decorators.js';
import {globalStyle, Widget} from "@toolboard/tb-utils";

//language=css
const styling = css`

    .split-panel-snapping-dots {
        content: '';
        position: absolute;
        bottom: -12px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--sl-color-neutral-400);
        transform: translateX(-3px);
        left: 35%;
    }
`

@customElement("tb-widget-editor")
export class TbWidgetEditor extends LitElement {

    static styles = [styling, globalStyle];

    @property()
    protected widget?: Widget;

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {

        if(!this.widget) {
            this.widget = { displayName: "Spotify Widget", author: "MartinaeyNL", htmlContent: "<span>Listening to music is nice</span>"};
        }

        return super.shouldUpdate(_changedProperties);
    }

    protected render(): TemplateResult {
        return html`
            <div id="top_container" style="height: 100%; display: flex;">
                <div class="container" style="flex: 1; justify-content: start; align-items: start; gap: 24px;">
                    <div style="display: flex; justify-content: space-between; width: 100%;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div>
                                <sl-tooltip content="Back" placement="bottom">
                                    <sl-icon-button name="chevron-left" label="Back" @click="${() => {
                                        this.dispatchEvent(new CustomEvent("close"))
                                    }}" style="font-size: 1.5rem;"></sl-icon-button>
                                </sl-tooltip>
                            </div>
                            <div id="container-title">
                                <span style="font-size: var(--sl-font-size-x-large)">Editing ${this.widget?.displayName}</span>
                            </div>
                        </div>
                        <div class="container" style="padding: 0; flex-direction: row;">
                            <div>
                                <sl-button>Test</sl-button>
                            </div>
                        </div>
                    </div>
                    <div style="flex: 1; width: 100%; position: relative;">
                        <sl-split-panel position="35" snap="35%" style="height: 100%; padding: 0;">
                            <div slot="start" style="padding: 0 24px 0 0; display: flex;">
                                <div class="container" style="flex: 1; justify-content: space-between; display: flex;">
                                    <div class="container" style="flex: 1; padding: 0; width: 100%; background: var(--sl-color-background-700)">
                                        <span>${this.widget?.htmlContent}</span>
                                    </div>
                                    <div class="container" style="padding: 0; width: 100%; display: flex; flex-direction: row;">
                                        <div class="container" style="flex: 1;">
                                            <sl-select placeholder="Preview Size" placement="top" style="width: 100%;">
                                                <sl-option value="option-1">Option 1</sl-option>
                                                <sl-option value="option-2">Option 2</sl-option>
                                                <sl-option value="option-3">Option 3</sl-option>
                                                <sl-option value="option-4">Option 4</sl-option>
                                                <sl-option value="option-5">Option 5</sl-option>
                                                <sl-option value="option-6">Option 6</sl-option>
                                            </sl-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div slot="end" style="padding: 0 0 0 24px; display: flex;">
                                <div class="container" style="flex: 1; justify-content: start; gap: 24px;">
                                    
                                    <!-- General Settings -->
                                    <div class="container" style="flex-direction: row; align-items: start; padding: 0; width: 100%; background: var(--sl-color-background-700);">
                                        <div class="container" style="flex: 1; align-items: start; padding: 24px;">
                                            <div id="container-title">
                                                <span style="font-size: var(--sl-font-size-x-large)">General Settings</span>
                                            </div>
                                            <div class="container" style="flex-direction: row; padding: 0; width: 100%;">
                                                <div class="container" style="flex: 1; gap: 16px;">
                                                    <div style="width: 100%;">
                                                        <sl-input label="Displayname" disabled .value="${this.widget?.displayName}">
                                                            <sl-icon name="tag-fill" slot="prefix"></sl-icon>
                                                        </sl-input>
                                                    </div>
                                                    <div style="width: 100%;">
                                                        <sl-input label="Author" disabled .value="${this.widget?.author}">
                                                            <sl-icon name="person-fill" slot="prefix"></sl-icon>
                                                        </sl-input>
                                                    </div>
                                                </div>
                                                <div class="container" style="flex: 1; gap: 16px;">
                                                    <div style="width: 100%;">
                                                        <sl-input label="Displayname" .value="${this.widget?.displayName}"></sl-input>
                                                    </div>
                                                    <div style="width: 100%;">
                                                        <sl-input label="Displayname" .value="${this.widget?.displayName}"></sl-input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Advanced Settings -->
                                    <div class="container" style="flex-direction: row; align-items: start; padding: 0; width: 100%; background: var(--sl-color-background-700);">
                                        <div class="container" style="flex: 1; align-items: start; padding: 24px;">
                                            <div id="container-title">
                                                <span style="font-size: var(--sl-font-size-x-large)">Advanced Settings</span>
                                            </div>
                                            <div class="container" style="flex-direction: row; padding: 0; width: 100%;">
                                                <div class="container" style="flex: 1; gap: 16px;">
                                                    <div style="width: 100%;">
                                                        <sl-input label="Displayname" .value="${this.widget?.displayName}">
                                                            <sl-icon name="tag-fill" slot="prefix"></sl-icon>
                                                        </sl-input>
                                                    </div>
                                                    <div style="width: 100%;">
                                                        <sl-input label="Author" .value="${this.widget?.author}">
                                                            <sl-icon name="person-fill" slot="prefix"></sl-icon>
                                                        </sl-input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </sl-split-panel>
                        <div class="split-panel-snapping-dots"></div>
                    </div>
                </div>
            </div>
        `
    }
}