package api

import (
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"toolboard/backend/api/endpoints"
	_ "toolboard/docs"
)

//	@title			Toolboard API
//	@version		1.0

//	@contact.name	Toolboard GitHub
//	@contact.url	https://github.com/MartinaeyNL/toolboard-app

//	@license.name	Apache 2.0
//	@license.url	http://www.apache.org/licenses/LICENSE-2.0.html

//	@host		localhost:8080
//	@BasePath	/api/v1

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

	apiRoutes := router.Group("/api/v1")
	{
		dashboardRoutes := apiRoutes.Group("/dashboard")
		{
			dashboardRoutes.GET("", endpoints.GetDashboard)
			dashboardRoutes.POST("", endpoints.PostDashboard)
		}
		userRoutes := apiRoutes.Group("/user")
		{
			userRoutes.GET("", nil)
		}
	}

	swaggerRoutes := router.Group("/swagger")
	{
		swaggerRoutes.GET("/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	}

	var routerGroup []*gin.RouterGroup
	return append(routerGroup, apiRoutes, swaggerRoutes)
}
