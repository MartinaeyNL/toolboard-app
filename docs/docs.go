// Package docs GENERATED BY SWAG; DO NOT EDIT
// This file was generated by swaggo/swag
package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {},
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/dashboard": {
            "post": {
                "description": "Stores the body dashboard object as a new entry in the database",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "dashboard"
                ],
                "summary": "Create a new Dashboard",
                "operationId": "post-dashboard",
                "parameters": [
                    {
                        "description": "The dashboard to create",
                        "name": "dashboard",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/models.Dashboard"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/models.Dashboard"
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            }
        },
        "/dashboard/all": {
            "get": {
                "description": "Returns one json object with all dashboards in the database",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "dashboard"
                ],
                "summary": "Get all dashboards",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/models.Dashboard"
                            }
                        }
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            }
        },
        "/dashboard/{id}": {
            "delete": {
                "description": "Checks the ID in the database, and deletes that entry if present",
                "tags": [
                    "dashboard"
                ],
                "summary": "Delete a dashboard",
                "operationId": "delete-dashboard",
                "parameters": [
                    {
                        "type": "integer",
                        "description": "Dashboard ID",
                        "name": "id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "204": {
                        "description": "No Content"
                    },
                    "500": {
                        "description": "Internal Server Error"
                    }
                }
            }
        }
    },
    "definitions": {
        "models.Dashboard": {
            "type": "object",
            "properties": {
                "createdAt": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "displayName": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "updatedAt": {
                    "type": "string"
                },
                "widgets": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/models.DashboardWidget"
                    }
                }
            }
        },
        "models.DashboardWidget": {
            "type": "object",
            "properties": {
                "createdAt": {
                    "type": "string"
                },
                "dashboardId": {
                    "type": "integer"
                },
                "description": {
                    "type": "string"
                },
                "displayName": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "location": {
                    "$ref": "#/definitions/models.DashboardWidgetLocation"
                },
                "locationId": {
                    "type": "integer"
                },
                "updatedAt": {
                    "type": "string"
                },
                "widget": {
                    "$ref": "#/definitions/models.Widget"
                },
                "widgetId": {
                    "type": "integer"
                }
            }
        },
        "models.DashboardWidgetLocation": {
            "type": "object",
            "properties": {
                "MaxWidth": {
                    "type": "integer"
                },
                "createdAt": {
                    "type": "string"
                },
                "height": {
                    "type": "integer"
                },
                "id": {
                    "type": "integer"
                },
                "maxHeight": {
                    "type": "integer"
                },
                "minHeight": {
                    "type": "integer"
                },
                "minWidth": {
                    "type": "integer"
                },
                "updatedAt": {
                    "type": "string"
                },
                "width": {
                    "type": "integer"
                },
                "x": {
                    "type": "integer"
                },
                "y": {
                    "type": "integer"
                }
            }
        },
        "models.Widget": {
            "type": "object",
            "properties": {
                "author": {
                    "type": "string"
                },
                "createdAt": {
                    "type": "string"
                },
                "displayName": {
                    "type": "string"
                },
                "htmlContent": {
                    "type": "string"
                },
                "id": {
                    "type": "integer"
                },
                "updatedAt": {
                    "type": "string"
                }
            }
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "",
	Host:             "",
	BasePath:         "",
	Schemes:          []string{},
	Title:            "",
	Description:      "",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}
