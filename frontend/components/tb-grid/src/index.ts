import {html, LitElement, PropertyValues, TemplateResult, unsafeCSS} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import {map} from 'lit/directives/map.js';
import {GridStack, GridStackOptions} from 'gridstack';

// @ts-ignore
import style from 'gridstack/dist/gridstack.min.css';

@customElement("tb-grid")
export class TbGrid extends LitElement {

    static styles = [unsafeCSS(style)];

    @property()
    public float?: boolean;

    @state()
    protected grid?: GridStack;

    /* -------------------- */

    protected firstUpdated(_changedProperties: PropertyValues) {
        super.firstUpdated(_changedProperties);

        const element = this.shadowRoot!.getElementById('grid');
        if (element != null) {
            const options: GridStackOptions = {
                float: this.float
            }
            console.log("Loading grid with the following options:");
            console.log(options);
            this.grid = GridStack.init(options, element);
        }
    }

    render(): TemplateResult {
        const texts: string[] = ["This is Text 1", "This is another text"]
        return html`
            <div style="height: 100%; display: flex; overflow-y: scroll;">
                <div id="grid" style="flex: 1;">
                    ${map(texts, (text) => {
                        return html`
                            <div class="grid-stack-item" gs-w="2" gs-h="2">
                                <div class="grid-stack-item-content" style="background: var(--sl-color-background-500)">
                                    <span>${text}</span>
                                </div>
                            </div>
                        `
                    })}
                </div>
            </div>
        `
    }
}