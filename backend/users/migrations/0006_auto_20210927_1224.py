# Generated by Django 2.2.24 on 2021-09-27 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_chatgroup_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatgroup',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='media/group/images/'),
        ),
    ]
