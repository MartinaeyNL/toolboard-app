import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {choose} from "lit/directives/choose.js";

//language=css
const styling = css`
`

@customElement("page-dashboard")
export class PageDashboard extends LitElement {

    static styles = [styling]

    protected render() {
        const page = "browse";
        return html`
            <div style="display: flex; height: 100%;">
                <div style="flex: 1; display: flex; color: white; padding: 24px;">
                    ${choose(page, [
                        ["browse", () => html`<tb-dashboard-browser style="flex: 1;"></tb-dashboard-browser>`]
                    ])}
                </div>
            </div>
        `
    }
}