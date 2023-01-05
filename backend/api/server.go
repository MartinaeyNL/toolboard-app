package api

import (
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"toolboard/backend/api/endpoints"
)

func Run() {

	fmt.Println("Starting up the REST API!")

	// Create a new Gin router
	router := gin.New()
	getRoutes(router)

	router.Use(cors.New(cors.Config{
		AllowAllOrigins:  true,
		AllowHeaders:     []string{"Content-Type", "Content-Length", "accept", "origin"},
		AllowCredentials: false,
	}))

	// Run the router
	runErr := router.Run()
	if runErr != nil {
		return
	}
}

func getRoutes(router *gin.Engine) []*gin.RouterGroup {
	dashboardRoutes := router.Group("/dashboard")
	{
		dashboardRoutes.GET("", endpoints.GetDashboard)
		dashboardRoutes.POST("", endpoints.PostDashboard)
	}
	userRoutes := router.Group("/user")

	var routerGroup []*gin.RouterGroup
	return append(routerGroup, dashboardRoutes, userRoutes)
}
