from pyclbr import Class
from pyexpat import model
from django.contrib import admin
from . import models

# Register your models here.
class BlogAdminArea(admin.AdminSite):
  site_header = 'Market Place Admin Area'


blog_admin_site = BlogAdminArea(name="Blog Admin")

# blog_admin_site.register(models.Blog)

admin.site.register(models.Blog)