import {css, html, LitElement, PropertyValues} from "lit";
import {customElement, property, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import {when} from 'lit/directives/when.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {globalStyle, Widget} from "@toolboard/tb-utils";

//language=css
const styling = css`
    
`

@customElement("tb-widget-browser")
export class TbWidgetBrowser extends LitElement {

    static styles = [styling, globalStyle];

    @property()
    protected widgets?: Widget[]

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {

        if(!this.widgets) {
            this.widgets = [
                { displayName: "Spotify Widget", author: "MartinaeyNL", htmlContent: "<span>Listening to music is nice</span>"},
                { displayName: "Discord Widget", author: "MartinaeyNL", htmlContent: "<span>Friends are awesome</span>"},
                { displayName: "OBS Studio Widget", author: "MartinaeyNL", htmlContent: "<span>Streaming is a big passion</span>"},
                { displayName: "Steam Widget", author: "MartinaeyNL", htmlContent: "<span>Who does not want to play games</span>"}
            ]
        }

        return super.shouldUpdate(_changedProperties);
    }

    render() {
        return html`
            <div class="container" style="flex: 1; height: 100%; justify-content: start; align-items: start; gap: 24px;">
                <div id="container-title">
                    <span style="font-size: var(--sl-font-size-x-large)">Widgets Overview</span>
                </div>
                <div>
                    <div class="container" style="flex-direction: row; justify-content: start; flex-wrap: wrap; gap: 12px;">
                        ${when(this.widgets, () => {
                            return html`
                                ${map(this.widgets, (widget) => {
                                    return html`
                                        <sl-card>
                                            <img
                                                    slot="image"
                                                    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=360&q=80"
                                                    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                                            />

                                            <strong>${widget.displayName}</strong><br/>
                                            ${unsafeHTML(widget.htmlContent)}<br/>
                                            <small>${widget.author}</small>

                                            <div slot="footer">
                                                <div style="display: flex; justify-content: space-between;">
                                                    <div>

                                                    </div>
                                                    <div>
                                                        <sl-button @click="${() => this.dispatchEvent(new CustomEvent('onedit', { detail: { value: widget }}))}">Edit</sl-button>
                                                    </div>
                                                </div>
                                            </div>
                                        </sl-card>
                                    `
                                })}
                            `
                        })}
                    </div>
                </div>
            </div>
        `
    }
}