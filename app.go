package main

import (
	"context"
	"fmt"
	"github.com/tkrajina/typescriptify-golang-structs/typescriptify"
	"toolboard/backend/api"
	"toolboard/backend/models"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	// Logic for converting Go structs to TypeScript
	fmt.Println("Compiling Go Structs to TypeScript..")
	tsConverter := typescriptify.New()
	tsConverter.BackupDir = "" // to prevent backup creation
	tsConverter.
		Add(models.Dashboard{}).WithInterface(true)

	tsErr := tsConverter.ConvertToFile("frontend/components/tb-utils/src/models.ts")
	if tsErr != nil {
		panic(tsErr.Error())
	}

	fmt.Println("Starting the Backend Server..")
	api.Run()
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
