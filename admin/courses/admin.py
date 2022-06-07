from django.contrib import admin
from . import models

# Register all models at once
admin.site.register(models.Course)
admin.site.register(models.Lesson)

# for model in models:
#   try:
#     admin.site.register(models.model)
#   except: admin.sites.AlreadyRegistered
#   pass