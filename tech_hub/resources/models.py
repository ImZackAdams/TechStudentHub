from django.db import models

from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    url = models.URLField()
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title
