/* Do not change, this code is generated from Golang structs */


export interface DashboardWidgetLocation {
    id: string;
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
    id: string;
    displayName: string;
    author: string;
    htmlContent: string;
}
export interface DashboardWidget {
    id: string;
    version: number;
    displayName: string;
    description?: string;
    widget: Widget;
    location: DashboardWidgetLocation;
}
export interface Dashboard {
    id: string;
    version: number;
    displayName: string;
    description?: string;
    widgets?: DashboardWidget[];
}


