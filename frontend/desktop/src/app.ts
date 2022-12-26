import {css, html, LitElement, PropertyValues} from 'lit'
import {customElement} from 'lit/decorators.js'
import {choose} from 'lit/directives/choose.js';
import "./pages/page-dashboard";
import '@toolboard/tb-menu';

// Import of all shoelace components
import '@shoelace-style/shoelace';
import { setBasePath } from '@shoelace-style/shoelace';
// @ts-ignore
import shoelaceLightStyle from "@shoelace-style/shoelace/dist/themes/light.styles.js"
// @ts-ignore
import shoelaceDarkStyle from "@shoelace-style/shoelace/dist/themes/dark.styles.js";

//language=css
const styling = css`
    :host {
        width: 100%;
        font-family: var(--sl-font-sans);
    }
`

@customElement('toolboard-app')
export class App extends LitElement {

    static styles = [shoelaceLightStyle, shoelaceDarkStyle, styling];

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);

        // All assets (especially icons) can be found in the /src/assets folder, so we need to change the base path.
        setBasePath("src");
    }

    render() {
        const page = "dashboard"
        return html`
            <app class="sl-theme-dark" style="display: flex; flex-direction: column; height: 100%;">
                <div id="main" style="flex: 1;">
                    <div style="display: flex; height: 100%;">
                        <div style="width: 80px; background: var(--sl-color-background-900)">
                            <tb-menu></tb-menu>
                        </div>
                        <div style="flex: 1; background: var(--sl-color-background-800)">
                            ${choose(page, [
                                ['dashboard', () => html`<page-dashboard></page-dashboard>`]
                            ])}
                        </div>
                    </div>
                </div>
            </app>
        `
    }
}