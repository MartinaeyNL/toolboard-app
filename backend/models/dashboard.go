package models

type Dashboard struct {
	Id          string             `json:"id"`
	Version     int64              `json:"version"`
	DisplayName string             `json:"displayName"`
	Description *string            `json:"description"`
	Widgets     *[]DashboardWidget `json:"widgets"`
}

type DashboardWidget struct {
	Id          string                  `json:"id"`
	Version     int64                   `json:"version"`
	DisplayName string                  `json:"displayName"`
	Description *string                 `json:"description"`
	Widget      Widget                  `json:"widget"`
	Location    DashboardWidgetLocation `json:"location"`
}

type DashboardWidgetLocation struct {
	Id        string `json:"id"`
	X         int    `json:"x"`
	Y         int    `json:"y"`
	Width     int    `json:"width"`
	MinWidth  *int   `json:"minWidth"`
	MaxWidth  *int   `json:"MaxWidth"`
	Height    int    `json:"height"`
	MinHeight *int   `json:"minHeight"`
	MaxHeight *int   `json:"maxHeight"`
}
