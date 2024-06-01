#from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('index', views.index, name='index'),
    path('principal', views.principal, name='principal'),
    path('perfil_usuario', views.perfil_usuario, name='perfil_usuario'),
    path('perfil_admin', views.index, name='perfil_admin'),
    path('detalle_obra', views.index, name='detalle_obra'),
    path('detalle_autor', views.index, name='detalle_autor'),
    path('detalle_autor2', views.index, name='detalle_autor2'),
    path('detalle_autor3', views.index, name='detalle_autor3'),
    path('blog', views.index, name='blog'),

]