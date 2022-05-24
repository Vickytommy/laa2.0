from pyclbr import Class
from django.contrib import admin
from . import models

# Register your models here.
class MarketplaceAdminArea(admin.AdminSite):
  site_header = 'Market Place Admin Area'


marketplace_admin_site = MarketplaceAdminArea(name='Marketplace Admin')

# marketplace_admin_site.register(models.Product)

admin.site.register(models.Product)