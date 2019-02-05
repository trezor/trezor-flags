/* @flow */

// add new flags to the end, order matters for conversion to binary
export const TREZOR_FLAG_KEYS = ['hasEmail', 'hasBookmark'];
export class Flags {
    static isFlagPresent(flag, trezorSavedNumber) {
        const flagMask = Flags._flagToMask(flag);
        return (trezorSavedNumber & flagMask) === flagMask;
    }

    static flagToInt(flag) {
        const index = Flags._getIndex(flag);
        return (1 << index);
    }

    static setFlag(flag, trezorSavedNumber) {
        return Flags.flagToInt(flag) | trezorSavedNumber;
    }

    static _flagToMask(flag) {
        const index = Flags._getIndex(flag);
        return 1 << index;
    }

    static _getIndex(flag) {
        const index = TREZOR_FLAG_KEYS.indexOf(flag);
        if (index < 0) {
            throw new Error(`[Flags] flag ${flag} is not allowed`);
        }
        return index;
    }
}
