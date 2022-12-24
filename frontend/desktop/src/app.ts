import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('my-element')
export class App extends LitElement {

    render() {
        return html`
            <main>
                <div>
                    <span>This is the title of my App.</span>
                </div>
            </main>
        `
    }
}