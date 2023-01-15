package database

func CreateEntity(value interface{}) (interface{}, error) {
	result := db.Create(value)
	return value, result.Error
}

func GetAllEntities(values interface{}) (interface{}, error) {
	result := db.Find(&values)
	return values, result.Error
}
