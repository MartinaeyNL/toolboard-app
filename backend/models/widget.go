package models

import (
	"time"
)

// Widget backend
type Widget struct {
	ID          uint      `json:"id,omitempty" gorm:"primarykey"`
	CreatedAt   time.Time `json:"createdAt,omitempty"`
	UpdatedAt   time.Time `json:"updatedAt,omitempty"`
	DisplayName string    `json:"displayName"`
	Author      string    `json:"author"`
	HTMLContent string    `json:"htmlContent"`
}
