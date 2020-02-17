
import { NativeModules } from 'react-native';

const { RNThumbnail } = NativeModules;

(() => {
    const oldMethod = RNThumbnail.get;
    RNThumbnail.get = media => oldMethod(media)
        .then(result =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(result);
                }, 100)
            })
        )
})();

export default RNThumbnail;

