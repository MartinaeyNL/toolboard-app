/* Do not change, this code is generated from Golang structs */


export interface DashboardWidgetLocation {
    Id: string;
    X: number;
    Y: number;
    Width: number;
    MinWidth: number;
    MaxWidth: number;
    Height: number;
    MinHeight: number;
    MaxHeight: number;
}
export interface Widget {
    Id: string;
    DisplayName: string;
    Author: string;
    HTMLContent: string;
}
export interface DashboardWidget {
    Id: string;
    Version: number;
    DisplayName: string;
    Description: string;
    Widget: Widget;
    Location: DashboardWidgetLocation;
}
export interface Dashboard {
    Id: string;
    Version: number;
    DisplayName: string;
    Description: string;
    Widgets: DashboardWidget[];
}