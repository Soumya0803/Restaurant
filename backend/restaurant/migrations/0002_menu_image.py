# Generated by Django 3.1.5 on 2022-03-23 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='menu',
            name='image',
            field=models.ImageField(null=True, upload_to='post_images'),
        ),
    ]