from pyclbr import Class
from pyexpat import model
from django.contrib import admin
from . import models

# Register your models here.
# blog_admin_site.register(models.Blog)

admin.site.register(models.Post)

# @admin.register(models.Post)
# class PostAdmin(admin.ModelAdmin):
#   fields = ['title', 'author']

# admin.site.register(Post, PostAdmin)