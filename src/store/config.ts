import AsyncStorage from '@react-native-community/async-storage';
import omitDeep from 'omit-deep-lodash';
import { createTransform } from 'redux-persist';

// keys for save omit.
const blacklist = [
    'loading'
];

// omits saving blacklisted properties.
const skipProperties = createTransform(
    (partition, key) =>
    {
        return omitDeep(partition, ...blacklist);
    }
);

// persistence config.
export default {
    key: 'root',
    storage: AsyncStorage,
    transforms: [ skipProperties ]
};
