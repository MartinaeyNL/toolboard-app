package endpoints

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"toolboard/backend/database"
	"toolboard/backend/models"
)

// GetDashboard godoc
//
//	@Summary		Get a single dashboard
//	@Description	Returns a simple json object for testing
//	@Tags			dashboard
//	@Accept			json
//	@Produce		json
//	@Success		200	{string}	string	"pong"
//	@Failure		500	{string}	string	"ok"
//	@Router			/dashboard [get]
func GetDashboard(ctx *gin.Context) {
	ctx.JSON(200, gin.H{
		"dashboard": "test",
	})
}

// PostDashboard godoc
//
//	@Summary		Create a new Dashboard
//	@Description	Stores the body dashboard object as a new entry in the database
//	@Tags			dashboard
//	@Accept			json
//	@Produce		json
//	@Success		201	{string}	string	"pong"
//	@Failure		400	{string}	string	"ok"
//	@Failure		500	{string}	string	"ok"
//	@Router			/dashboard [post]
func PostDashboard(ctx *gin.Context) {

	var dashboard models.Dashboard
	bindErr := ctx.BindJSON(&dashboard)
	if bindErr != nil {
		ctx.AbortWithStatus(400)
		return
	}

	entity, dbErr := database.CreateEntity(&dashboard)
	if dbErr != nil {
		fmt.Println(dbErr.Error())
		ctx.AbortWithStatus(500)
		return
	}

	ctx.JSON(201, entity)
}
