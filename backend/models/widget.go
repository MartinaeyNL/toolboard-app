package models

import (
	"gorm.io/gorm"
	"time"
)

type Widget struct {
	ID          uint           `json:"id,omitempty" gorm:"primarykey"`
	CreatedAt   time.Time      `json:"createdAt"`
	UpdatedAt   time.Time      `json:"updatedAt"`
	DeletedAt   gorm.DeletedAt `json:"deletedAt" gorm:"index"`
	DisplayName string         `json:"displayName"`
	Author      string         `json:"author"`
	HTMLContent string         `json:"htmlContent"`
}
