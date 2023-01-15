package main

import (
	"fmt"
	"github.com/tkrajina/typescriptify-golang-structs/typescriptify"
	"os/exec"
	"toolboard/backend/models"
)

func main() {
	fmt.Println("Running Setup..")

	relPathToProj := "./../../"

	/* -------------------- */

	fmt.Println("Generating Swagger documentation..")
	swagCmd := exec.Command("swag", "init", "-d", relPathToProj, "-o", relPathToProj+"docs")
	swagOut, swagErr := swagCmd.Output()
	if swagErr != nil {
		fmt.Println(swagErr.Error())
		return
	}
	fmt.Println(string(swagOut))

	/* ------------- */

	fmt.Println("Creating TypeScript client for API access..")
	/*remErr := os.RemoveAll(relPathToProj + "frontend/components/tb-api/src")*/ // clean previous generation
	/*if remErr != nil {
		fmt.Println(remErr.Error())
		return
	}*/
	openapiCmd := exec.Command("openapi", "--name", "ToolboardClient", "-i", relPathToProj+"docs/swagger.json", "-o", relPathToProj+"frontend/components/tb-api/src")
	openapiOut, openapiErr := openapiCmd.Output()
	if openapiErr != nil {
		fmt.Println(openapiErr.Error())
		return
	}
	fmt.Println(string(openapiOut))

	/* ---------------------------------------- */

	fmt.Println("Generate TypeScript models based on structs in Go backend..")
	compileTS(relPathToProj + "frontend/components/tb-utils/src")

	fmt.Println("Done with setup processes.")
}

/* ------------------------------------- */

//			Utility Functions

/* --------------------------------------------- */

func compileTS(path string) {

	fmt.Println("Compiling Go Structs to TypeScript..")
	tsConverter := typescriptify.New()
	tsConverter.BackupDir = "" // to prevent backup creation
	tsConverter.
		Add(models.Dashboard{}).WithInterface(true).
		Add(models.DashboardWidget{}).WithInterface(true).
		Add(models.DashboardWidgetLocation{}).WithInterface(true).
		Add(models.Widget{}).WithInterface(true)

	tsErr := tsConverter.ConvertToFile(path + "/models.ts")
	if tsErr != nil {
		panic(tsErr.Error())
	}
}
