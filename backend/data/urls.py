from django.urls import path
from .views import personal_bests_for_user, user_list

urlpatterns = [
    path(
        "api/personal-bests/<str:username>/",
        personal_bests_for_user,
        name="personal_bests_for_user",
    ),
    path("api/users/", user_list, name="user_list"),
]
