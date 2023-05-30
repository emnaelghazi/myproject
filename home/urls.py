from django.shortcuts import render
from django.http import HttpResponseRedirect

def homepage(request):
    return render(request, 'home/homepage.html')

def redirect_to_game(request):
    return HttpResponseRedirect('')
