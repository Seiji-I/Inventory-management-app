package main

import (
	"database/sql"
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/postgres"
	"github.com/gin-contrib/cors"
	"time"
	"log"
	routes "gin/routes"
	middleware "gin/middleware"
)

func main() {
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Access-Control-Allow-Headers", "Content-Type", "Content-Length"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge: 1 * time.Hour,
  }))

	db, err := sql.Open("postgres", "postgresql://root:rootd@postgres:5432/inventory?sslmode=disable")
	if err != nil {
		log.Println("Failed to connect to postgresql database.")
    return
  }

	store, err := postgres.NewStore(db, []byte("secret"))
  if err != nil {
		log.Println(err)
    return
  }

	router.Use(sessions.Sessions("mysession", store))

	public := router.Group("/api")
	public.Use(sessions.Sessions("mysession", store))
	routes.PublicRoutes(public)

	
	private := router.Group("/api")
	private.Use(middleware.AuthRequired)
	private.Use(sessions.Sessions("mysession", store))
	routes.PrivateRoutes(private)
	
	router.Run(":3333")
}