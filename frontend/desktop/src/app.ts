import {css, html, LitElement, PropertyValues} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {choose} from 'lit/directives/choose.js';
import {setBasePath} from '@shoelace-style/shoelace';
import {MenuOption} from "@toolboard/tb-menu";
import './pages/page-dashboard';
import './pages/page-widgets';
import './pages/page-settings';
import '@toolboard/tb-dashboard-browser';

// Import of all shoelace components
import '@shoelace-style/shoelace';
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

    @state()
    protected currentPage: MenuOption;

    static styles = [shoelaceLightStyle, shoelaceDarkStyle, styling];

    constructor() {
        super();
        this.currentPage = MenuOption.PAGE_DASHBOARD;
    }

    /* --------------------------------- */

    // Method that is called after first render.
    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);

        // All assets (especially icons) can be found in the /src/assets folder, so we need to change the base path.
        setBasePath("src");
    }

    render() {
        return html`
            <app class="sl-theme-dark" style="display: flex; flex-direction: column; height: 100%;">
                <div id="main" style="flex: 1;">
                    <div style="display: flex; height: 100%;">
                        <div style="width: 80px; background: var(--sl-color-background-900)">
                            <tb-menu .selected="${this.currentPage}" @change="${(ev: CustomEvent) => this.currentPage = ev.detail.value}"></tb-menu>
                        </div>
                        <div style="flex: 1; display: flex; background: var(--sl-color-background-800)">
                            ${choose(this.currentPage, [
                                [MenuOption.PAGE_DASHBOARD, () => html`<page-dashboard style="flex: 1;"></page-dashboard>`],
                                [MenuOption.PAGE_WIDGETS, () => html`<page-widgets style="flex: 1;"></page-widgets>`],
                                [MenuOption.PAGE_SETTINGS, () => html`<page-settings style="flex: 1;"></page-settings>`]
                            ])}
                        </div>
                    </div>
                </div>
            </app>
        `
    }
}