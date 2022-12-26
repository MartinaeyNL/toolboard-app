import {css, html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {choose} from 'lit/directives/choose.js';
import "./pages/page-dashboard";
import '@toolboard/tb-menu';

// Import of all shoelace components
import '@shoelace-style/shoelace';
// @ts-ignore
import shoelaceLightStyle from "@shoelace-style/shoelace/dist/themes/light.styles.js"
// @ts-ignore
import shoelaceDarkStyle from "@shoelace-style/shoelace/dist/themes/dark.styles.js";

//language=css
const styles = css`
    :host {
        width: 100%;
    }
`

@customElement('toolboard-app')
export class App extends LitElement {

    static styles = [shoelaceLightStyle, shoelaceDarkStyle, styles];

    render() {
        console.log(shoelaceLightStyle);
        const page = "dashboard"
        return html`
            <app class="sl-theme-dark">
                <div style="display: flex; height: 100%;">
                    <div style="width: 20vw; min-width: 300px; max-width: 420px; background: #707070;">
                        <tb-menu></tb-menu>
                    </div>
                    <div style="flex: 1;">
                        ${choose(page, [
                            ['dashboard', () => html`<page-dashboard></page-dashboard>`]
                        ])}
                    </div>
                </div>
            </app>
        `
    }
}