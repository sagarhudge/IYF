import AsyncStorage from '@react-native-async-storage/async-storage';

const windows = {
    localStorage: {
        getItem: (key: string): Promise<String | null> => AsyncStorage.getItem(key),
        setItem: (key: string, value: string): Promise<void> => AsyncStorage.setItem(key, value),
        removeItem: (key: string): Promise<void> => AsyncStorage.removeItem(key),
    }
}

function setDeviceId(id: string) {
    void windows.localStorage.setItem('device_id', id)
}

async function getDeviceId() {
    return await windows.localStorage.getItem('device_id') || ''
}


export const LocaleStorage = {
    getDeviceId,
    setDeviceId
}