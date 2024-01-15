from django.db import models


class Counter(models.Model):
    value = models.IntegerField(default=0)
    reset = models.BooleanField(default=False)
