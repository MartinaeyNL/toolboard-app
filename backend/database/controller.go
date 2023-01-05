package database

func CreateEntity(value interface{}) (interface{}, error) {
	err := db.Create(value).Error
	return value, err
}
