package main

import (
	"fmt"
	"toolboard/backend/api"
	"toolboard/backend/database"
)

func main() {

	fmt.Println("Initializing the database..")
	database.Init()

	fmt.Println("Starting the Backend API..")
	api.Run()
}
