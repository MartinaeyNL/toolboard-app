package models

import (
	"gorm.io/gorm"
	"time"
)

type Dashboard struct {
	ID          uint               `json:"id" gorm:"primarykey"`
	CreatedAt   time.Time          `json:"createdAt,omitempty"`
	UpdatedAt   time.Time          `json:"updatedAt,omitempty"`
	DeletedAt   gorm.DeletedAt     `json:"deletedAt,omitempty" gorm:"index"`
	DisplayName string             `json:"displayName"`
	Description *string            `json:"description"`
	Widgets     *[]DashboardWidget `json:"widgets"`
}

type DashboardWidget struct {
	ID          uint                    `json:"id" gorm:"primarykey"`
	CreatedAt   time.Time               `json:"createdAt,omitempty"`
	UpdatedAt   time.Time               `json:"updatedAt,omitempty"`
	DeletedAt   gorm.DeletedAt          `json:"deletedAt,omitempty" gorm:"index"`
	DashboardId uint                    `json:"dashboardId"`
	DisplayName string                  `json:"displayName"`
	Description *string                 `json:"description"`
	Widget      Widget                  `json:"widget"`
	Location    DashboardWidgetLocation `json:"location"`
	WidgetId    uint
	LocationId  uint
}

type DashboardWidgetLocation struct {
	ID        uint           `json:"id" gorm:"primarykey"`
	CreatedAt time.Time      `json:"createdAt,omitempty"`
	UpdatedAt time.Time      `json:"updatedAt,omitempty"`
	DeletedAt gorm.DeletedAt `json:"deletedAt,omitempty" gorm:"index"`
	X         int            `json:"x"`
	Y         int            `json:"y"`
	Width     int            `json:"width"`
	MinWidth  *int           `json:"minWidth"`
	MaxWidth  *int           `json:"MaxWidth"`
	Height    int            `json:"height"`
	MinHeight *int           `json:"minHeight"`
	MaxHeight *int           `json:"maxHeight"`
}
