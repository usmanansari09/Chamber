from django.core.management.base import BaseCommand
from django.utils import timezone
from dateutil.relativedelta import relativedelta
import datetime
import pytz
from users.models import Message



class Command(BaseCommand):
    help = 'Delete Expired Messages'

    def handle(self, *args, **kwargs):
        time_threshold = datetime.datetime.now(timezone.utc) - datetime.timedelta(hours=2)
        try:
            messages = Message.objects.filter(sent_at__lte=time_threshold).delete()
            self.stdout.write(self.style.SUCCESS('Messages older than 2 hours have been deleted successfully'))
        except:
            self.stdout.write(self.style.WARNING('Message Query Error'))
