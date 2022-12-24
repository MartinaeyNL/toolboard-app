package endpoints

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func GetDashboard(ctx *gin.Context) {
	ctx.JSON(200, gin.H{
		"dashboard": "test",
	})
}

func PostDashboard(ctx *gin.Context) {
	fmt.Println(ctx.Request.Body)
	ctx.JSON(200, gin.H{
		"anotherdashboard": "testtwo",
	})
}
