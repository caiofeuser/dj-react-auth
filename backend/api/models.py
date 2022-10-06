from django.db import models
from django.contrib.auth.models import User
# from users.models import User

class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.title} - {self.user}'

