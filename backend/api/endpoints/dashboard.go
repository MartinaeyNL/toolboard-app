package endpoints

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"toolboard/backend/database"
	"toolboard/backend/models"
)

// GetAllDashboards backend
//
//	@Summary		Get all dashboards
//	@Description	Returns one json object with all dashboards in the database
//	@Tags			dashboard
//	@Accept			json
//	@Produce		json
//	@Success		200	{object}	[]models.Dashboard
//	@Failure		500	{string}	string	"ok"
//	@Router			/dashboard/all [get]
func GetAllDashboards(ctx *gin.Context) {
	entities, dbErr := database.GetAllEntities([]models.Dashboard{})
	if dbErr != nil {
		fmt.Println(dbErr.Error())
		ctx.AbortWithStatus(500)
		return
	}
	ctx.JSON(200, entities)
}

// PostDashboard backend
//
//	@Summary		Create a new Dashboard
//	@Description	Stores the body dashboard object as a new entry in the database
//	@ID				post-dashboard
//	@Tags			dashboard
//	@Accept			json
//	@Produce		json
//	@Param			dashboard body		models.Dashboard	true		"The dashboard to create"
//	@Success		201	{object}		models.Dashboard
//	@Failure		400	{string}		string				"ok"
//	@Failure		500	{string}		string				"ok"
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
