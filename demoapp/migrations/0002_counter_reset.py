# Generated by Django 4.2.9 on 2024-01-15 21:57

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("demoapp", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="counter",
            name="reset",
            field=models.BooleanField(default=False),
        ),
    ]