/* Do not change, this code is generated from Golang structs */


export interface DashboardWidgetLocation {
    id: number;
    createdAt?: Time;
    updatedAt?: Time;
    x: number;
    y: number;
    width: number;
    minWidth?: number;
    MaxWidth?: number;
    height: number;
    minHeight?: number;
    maxHeight?: number;
}
export interface Widget {
    id?: string;
    installPath: string;
    widgetJSON: string;
}
export interface DashboardWidget {
    id: number;
    createdAt?: Time;
    updatedAt?: Time;
    dashboardId: number;
    displayName: string;
    description?: string;
    widget: Widget;
    location: DashboardWidgetLocation;
    WidgetId: number;
    LocationId: number;
}
export interface Time {

}
export interface Dashboard {
    id: number;
    createdAt?: Time;
    updatedAt?: Time;
    displayName: string;
    description?: string;
    widgets?: DashboardWidget[];
}



export interface WidgetContent {
    location: string;
    jsFileName: string;
    html: string;
}
export interface WidgetManifest {
    displayName: string;
}
export interface WidgetJSON {
    id: string;
    manifest: WidgetManifest;
    content: WidgetContent;
}

