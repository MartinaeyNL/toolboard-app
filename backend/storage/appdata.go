package storage

import (
	"context"
	"fmt"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"os"
)

func GetToolboardFolderPath(ctx context.Context) string {
	osDir, err := os.UserConfigDir()
	if err != nil {
		fmt.Println(err.Error())
		return ""
	} else {
		path := osDir + "\\toolboard"
		exists := doesPathExist(ctx, path)
		if exists == false {
			initAppdataFolder(ctx, path)
		}
		return path
	}
}

func initAppdataFolder(ctx context.Context, path string) {

	runtime.LogInfo(ctx, "Initializing Appdata folder..")

	// Create directories
	err := os.MkdirAll(path, os.ModePerm)
	if err == nil {
		var dirErrors []error
		err1 := os.Mkdir(path+"\\databases", os.ModePerm)
		err2 := os.Mkdir(path+"\\settings", os.ModePerm)
		err3 := os.Mkdir(path+"\\logs", os.ModePerm)
		dirErrors = append(dirErrors, err1, err2, err3)
		for _, val := range dirErrors {
			if val != nil {
				runtime.LogFatal(ctx, val.Error())
			}
		}

	} else {
		runtime.LogFatal(ctx, err.Error())
	}

}

func doesPathExist(ctx context.Context, path string) bool {
	_, err := os.Stat(path)
	if err == nil {
		return true
	} else if os.IsNotExist(err) {
		return false
	}
	runtime.LogFatal(ctx, err.Error())
	return false
}
