//language=css
import {css} from "lit";

export const globalStyle = css`

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
        gap: 12px;
    }

    sl-input::part(form-control-label) {
        /*margin-bottom: 0.5rem;*/
        height: 28px;
        line-height: 28px;
    }
    sl-select::part(form-control-label) {
        /*margin-bottom: 0.5rem;*/
        height: 28px;
        line-height: 28px;
    }
`