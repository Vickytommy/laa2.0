# Generated by Django 4.0.4 on 2022-06-07 07:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_alter_post_options_post_author_post_content_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='status',
            field=models.CharField(choices=[('draft', 'Draft'), ('publish', 'Publish')], default='draft', max_length=10),
        ),
    ]