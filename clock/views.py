from django.views.generic import TemplateView


class Clock(TemplateView):
    template_name = "index.html"

