package main

import (
	"fmt"
	"github.com/tkrajina/typescriptify-golang-structs/typescriptify"
	"toolboard/backend/models"
)

func main() {
	CompileTS()
}

func CompileTS() {

	fmt.Println("Compiling Go Structs to TypeScript..")
	tsConverter := typescriptify.New()
	tsConverter.BackupDir = "" // to prevent backup creation
	tsConverter.
		Add(models.Dashboard{}).WithInterface(true).
		Add(models.DashboardWidget{}).WithInterface(true).
		Add(models.DashboardWidgetLocation{}).WithInterface(true).
		Add(models.Widget{}).WithInterface(true)

	tsErr := tsConverter.ConvertToFile("./../frontend/components/tb-utils/src/models.ts")
	if tsErr != nil {
		panic(tsErr.Error())
	}
}
