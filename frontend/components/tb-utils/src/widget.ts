import {Widget} from "./models";

export interface ToolboardWidget {

    getDefaultConfig: (widget: Widget) => TbWidgetConfig;

    getWidgetHTML: (widget: Widget) => HTMLElement;
    getSettingsHTML: (widget: Widget) => HTMLElement;
}
export interface TbWidgetConfig {

}