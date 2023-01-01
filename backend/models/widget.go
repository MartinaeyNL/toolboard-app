package models

type Widget struct {
	Id          string `json:"id"`
	DisplayName string `json:"displayName"`
	Author      string `json:"author"`
	HTMLContent string `json:"htmlContent"`
}
