package models

type Dashboard struct {
	Id          string
	Version     int64
	DisplayName string
	Description string
	Widgets     []DashboardWidget
}

type DashboardWidget struct {
	Id          string
	Version     int64
	DisplayName string
	Description string
	Widget      Widget
	Location    DashboardWidgetLocation
}

type DashboardWidgetLocation struct {
	Id        string
	X         int
	Y         int
	Width     int
	MinWidth  int
	MaxWidth  int
	Height    int
	MinHeight int
	MaxHeight int
}
