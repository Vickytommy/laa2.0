# Generated by Django 4.0.4 on 2022-06-07 07:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('description', models.TextField(blank=True, null=True)),
                ('status', models.CharField(choices=[('cancelled', 'Cancelled'), ('active', 'Active')], default='draft', max_length=10)),
                ('price', models.IntegerField()),
            ],
            options={
                'verbose_name': 'Course',
                'verbose_name_plural': 'Courses',
            },
        ),
        migrations.DeleteModel(
            name='Post',
        ),
    ]
