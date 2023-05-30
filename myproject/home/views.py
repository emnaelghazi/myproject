from django.shortcuts import render

def welcome_view(request):
    return render(request, 'welcome.html')

def game_view(request):
    return render(request, 'game.html')

