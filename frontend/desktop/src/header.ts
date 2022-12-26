import {customElement} from "lit/decorators.js";
import {css, html, LitElement} from "lit";
import {Quit, WindowMinimise, WindowToggleMaximise} from "../wailsjs/runtime";

// Import of all shoelace components
import '@shoelace-style/shoelace';
// @ts-ignore
import shoelaceLightStyle from "@shoelace-style/shoelace/dist/themes/light.styles.js"
// @ts-ignore
import shoelaceDarkStyle from "@shoelace-style/shoelace/dist/themes/dark.styles.js";

//language=css
const styling = css`
    :host {
        font-family: var(--sl-font-sans);
    }
    #container {
        background: var(--sl-color-background-950);
    }
`;

@customElement('toolboard-appheader')
export class TbHeader extends LitElement {

    static styles = [shoelaceLightStyle, shoelaceDarkStyle, styling];

    protected render(): unknown {
        return html`
            <div id="container" style="display: flex; align-items: center; justify-content: space-between; height: 100%;">
                <div style="margin-left: 8px;">
                    <span style="color: white; font-size: var(--sl-font-size-small)">Toolboard</span>
                </div>
                <div style="display: flex; align-items: center;">
                    <sl-icon-button name="dash-lg" label="Minimize" style="font-size: 1.2rem; margin-top: 12px;" @click="${() => { WindowMinimise(); }}"></sl-icon-button>
                    <sl-icon-button name="square" label="Maximize" style="font-size: 1rem;" @click="${() => { WindowToggleMaximise(); }}"></sl-icon-button>
                    <sl-icon-button name="x-lg" label="Exit" style="font-size: 1.2rem;" @click="${() => { Quit(); }}"></sl-icon-button>
                </div>
            </div>
        `;
    }
}