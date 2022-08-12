package controllers

import (
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"net/http"
	"log"
	helpers "gin/helpers"
)

func LoginGetHander() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get("user")
		log.Println("LoginGetHandler: ", user)
		if user != nil {
			c.JSON(http.StatusOK, gin.H {
				"user": user,
			})
			return 
		}
		c.JSON(http.StatusOK, gin.H{
			"user": nil,
		})	
	}
}

func LoginPostHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get("user")
		if user != nil {
			return
		}
		userid := c.PostForm("userid")
		password := c.PostForm("password")
		if helpers.EmptyUsePass(userid, password) {
			c.JSON(http.StatusBadRequest, gin.H {
				"content": "Parameters can't be empty",
			})
			log.Println("Parameters can't be empty")
			return
		}

		if !helpers.CheckUserPass(userid, password) {
			c.JSON(http.StatusInternalServerError, gin.H {
				"content": "Incorrect userid or password",
			})
			log.Println("Incorrect userid or password")
			return
		}

		session.Set("user", userid)
		if err := session.Save(); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"content": "Failed to save session",
			})
			log.Println("Failed to save session")
			return
		}
		c.JSON(http.StatusOK, gin.H {
			"user": session.Get("user"),
		})
	}
}

func IndexGetHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get("user")
		c.JSON(http.StatusOK, gin.H{
			"user": user,
		})
	}
}

func LogoutGetHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get("user")
		if user == nil {
			log.Println("Invalid session token")
			return
 		}
		session.Delete("user")
		if err := session.Save(); err != nil {
			log.Println("Faild to save session:", err)
			return
		}
		c.Redirect(http.StatusMovedPermanently, "http://localhost:3000/")
	}
}

func DashboardHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		user := session.Get("user")
		c.JSON(http.StatusOK, gin.H {
			"user": user,
		})
	}
}