from django.db import models


class User(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class PersonalBests(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="personal_bests"
    )
    constant_weight = models.IntegerField(default=0)
    constant_weight_bifins = models.IntegerField(default=0)
    constant_weight_nofins = models.IntegerField(default=0)
    free_immersion = models.IntegerField(default=0)
    static_apnea = models.IntegerField(default=0)
    dynamic = models.IntegerField(default=0)
    dynamics_bifins = models.IntegerField(default=0)
    dynamic_nofins = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.name} - Constant Weight: {self.constant_weight}"


class TrainingPlan(models.Model):
    disciplines = models.CharField(max_length=255)


class TrainingExercises(models.Model):
    focus = models.CharField(max_length=255)
