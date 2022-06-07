
from os import truncate
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
  title = models.CharField(max_length=100)

  options = (
    ('draft', 'Draft'),
    ('publish', 'Publish'),
  )

  publish = models.DateTimeField(default=timezone.now)
  author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts', null=True, blank=True)
  content = models.TextField(null=True, blank=True)
  status = models.CharField(max_length=10, choices=options, default='draft')
  
  class Meta:
    verbose_name = ("Post")
    verbose_name_plural = ("Posts")
    ordering = ('-publish',)

  def __str__(self):
      return self.title