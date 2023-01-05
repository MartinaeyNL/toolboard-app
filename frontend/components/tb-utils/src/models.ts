/* Do not change, this code is generated from Golang structs */


export interface DashboardWidgetLocation {
    id: number;
    createdAt?: Time;
    updatedAt?: Time;
    deletedAt?: DeletedAt;
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
    deletedAt: DeletedAt;
    displayName: string;
    author: string;
    htmlContent: string;
}
export interface DashboardWidget {
    id: number;
    createdAt?: Time;
    updatedAt?: Time;
    deletedAt?: DeletedAt;
    dashboardId: number;
    displayName: string;
    description?: string;
    widget: Widget;
    location: DashboardWidgetLocation;
    WidgetId: number;
    LocationId: number;
}
export interface DeletedAt {
    Time: Time;
    Valid: boolean;
}
export interface Time {

}
export interface Dashboard {
    id: number;
    createdAt?: Time;
    updatedAt?: Time;
    deletedAt?: DeletedAt;
    displayName: string;
    description?: string;
    widgets?: DashboardWidget[];
}


