import {css, html, LitElement, PropertyValues} from "lit";
import {customElement, property, state} from 'lit/decorators.js';
import {globalStyle, WidgetJSON} from "@toolboard/tb-utils";
import {when} from 'lit/directives/when.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

//language=css
const styling = css`
    
`

@customElement("tb-widget-container")
export class TbWidgetContainer extends LitElement {

    static styles = [styling, globalStyle];

    @property()
    protected widgetJSON?: WidgetJSON;

    @state()
    private importedJsCompleted = false;

    private async importJs(): Promise<void> {
        this.importedJsCompleted = false;
        await import(/* @vite-ignore */"http://localhost:8080/api/v1/widget/embed/" + this.widgetJSON?.id + "/" + this.widgetJSON?.content.jsFileName);
        this.importedJsCompleted = true;
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateComplete.then(() => this.importJs())
    }

    render() {
        return html`
            <div style="border: 1px solid white;">
                ${when(this.importedJsCompleted,
                        () => html`${unsafeHTML(this.widgetJSON?.content.html)}`,
                        () => html`Loading Widget..`
                )}
            </div>
        `
    }
}