package database

import (
	"context"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"gorm.io/driver/mysql"
	"gorm.io/driver/postgres"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"toolboard/backend/models"
	"toolboard/backend/storage"
)

var db *gorm.DB

func Init(ctx context.Context) {

	dbDriverName := "sqlite3"

	dbPath := storage.GetToolboardFolderPath(ctx)
	if len(dbPath) == 0 {
		return
	}
	dbPath += "\\databases\\dashboard.db"
	runtime.LogInfo(ctx, "Using ["+dbPath+"] as SQLite database")

	dialector := getDialector(dbDriverName, dbPath)

	db = openDatabase(ctx, dialector)

	migrate(ctx)
}

func openDatabase(ctx context.Context, dialector gorm.Dialector) *gorm.DB {

	db, err := gorm.Open(dialector, &gorm.Config{})
	if err != nil {
		runtime.LogFatal(ctx, err.Error())
	}
	return db
}

func getDialector(driverName string, path string) gorm.Dialector {

	switch driverName {
	case "sqlite3":
		return sqlite.Open(path)
	case "mysql":
		return mysql.Open(path)
	case "postgresql":
		return postgres.Open(path)
	default:
		return nil
	}
}

func migrate(ctx context.Context) {

	err := db.AutoMigrate(&models.Dashboard{})
	if err != nil {
		runtime.LogFatal(ctx, err.Error())
	}
}
