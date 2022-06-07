from django.db import models
from django.utils import timezone

# Create your models here.
class Course(models.Model):
  status_options = (
    ('in_review', 'In_review'),
    ('active', 'Active'),
  )

  title = models.CharField(max_length=100)
  created_at = models.DateTimeField(default=timezone.now)
  description = models.TextField()
  status = models.CharField(max_length=10, choices=status_options, default='in_review')
  price = models.IntegerField()


  
  class Meta:
    verbose_name = ("Course")
    verbose_name_plural = ("Courses")

  def __str__(self):
      return self.title


class Lesson(models.Model):
  status_options = (
    ('in_review', 'In_review'),
    ('active', 'Active'),
  )

  title = models.CharField(max_length=100)
  course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='course')
  created_at = models.DateTimeField(default=timezone.now)
  description = models.TextField()
  sequence = models.PositiveSmallIntegerField(
    unique=True, help_text='This is the order in which the lessons should be watched.<br />Note: Two lessons can\'t have the same sequence')
  status = models.CharField(max_length=10, choices=status_options, default='in_review', help_text='Change to active if you want users to view it')


  
  class Meta:
    verbose_name = ("Lesson")
    verbose_name_plural = ("Lessons")

  def __str__(self):
      return self.title