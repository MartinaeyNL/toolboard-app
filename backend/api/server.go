package api

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"toolboard/backend/api/endpoints"
)

func Run() {

	fmt.Println("Starting up the REST API!")

	// Create a new Gin router
	router := gin.New()

	getRoutes(router)

	// Add a route to the router
	/*router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})*/

	// Run the router
	err := router.Run()
	if err != nil {
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
