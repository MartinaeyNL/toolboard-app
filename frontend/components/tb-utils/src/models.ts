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
    id?: number;
    createdAt: Time;
    updatedAt: Time;
    displayName: string;
    author: string;
    htmlContent: string;
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


