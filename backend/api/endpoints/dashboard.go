package endpoints

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"toolboard/backend/database"
	"toolboard/backend/models"
)

func GetDashboard(ctx *gin.Context) {
	ctx.JSON(200, gin.H{
		"dashboard": "test",
	})
}

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
