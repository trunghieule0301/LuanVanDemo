# Generated by Django 3.2.5 on 2021-08-09 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_delete_article'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='bookImage',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]