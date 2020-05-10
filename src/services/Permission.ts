import * as Permissions from 'expo-permissions';

export default async function ValidateNotificationPermission()
{
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

    if (status !== 'granted')
        alert('Hey! You might want to enable notifications for my app, they are good.');
}
