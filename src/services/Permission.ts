import * as Permissions from 'expo-permissions';

export default async function ValidateNotificationPermission()
{
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

    if (status !== 'granted')
        alert('oops! Notifications are disabled, you might want to enable notifications.');
}
