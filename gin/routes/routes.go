package routes

import (
	"github.com/gin-gonic/gin"
	controllers "gin/controllers"
)

func PublicRoutes(g *gin.RouterGroup) {
	g.GET("/login", controllers.LoginGetHander())
	g.POST("/login", controllers.LoginPostHandler())
	g.GET("/", controllers.IndexGetHandler())
}

func PrivateRoutes(g *gin.RouterGroup) {
	g.GET("/logout", controllers.LogoutGetHandler())
}