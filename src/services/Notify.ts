import { Notifications } from 'expo';

const localNotification = {
    title: 'UdaciCards Reminder!',
    body: 'Remember to answer a Quiz in UdaciCards',
    ios: {
        sound: true
    },
    android:
    {
        sound: true,
        sticky: false,
        vibrate: true
    }
};

export default async function ScheduleNextNotification()
{
    await Notifications.cancelAllScheduledNotificationsAsync();

    const now = new Date();
    const schedulingOptions = {
        year: now.getFullYear(),
        month: now.getMonth(),
        day: now.getDay() + 1,
        hour: now.getHours()
    };

    await Notifications.scheduleNotificationWithCalendarAsync(
        localNotification, schedulingOptions
    );
}
