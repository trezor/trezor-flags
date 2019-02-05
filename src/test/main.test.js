import {TREZOR_FLAG_KEYS, Flags} from '../main';

describe('flags.js', () => {
    describe('Flags class', () => {
        describe('static Flags._flagToMask()', () => {
            it('should create mask for second element in array', () => {
                const result = Flags._flagToMask(TREZOR_FLAG_KEYS[1]);
                expect(result).toEqual(2);
            });

            it('should throw error for undefined flag', () => {
                expect(() => {
                    Flags._flagToMask('satoshivision');
                }).toThrow('[Flags] flag satoshivision is not allowed');
            });
        });

        describe('static Flags.isFlagPresent()', () => {
            it('savedFlag 1 should be equivalent for first element in array', () => {
                const flag = TREZOR_FLAG_KEYS[0];
                const savedFlag = 1;
                const result = Flags.isFlagPresent(flag, savedFlag);
                expect(result).toEqual(true);
            });

            it('savedFlag 2 should be equivalent for second element in array', () => {
                const flag = TREZOR_FLAG_KEYS[1];
                const savedFlag = 2;
                const result = Flags.isFlagPresent(flag, savedFlag);
                expect(result).toEqual(true);
            });
        });

        describe('static Flags.flagToInt()', () => {
            it('index 0 should resolve to 1', () => {
                const result = Flags.flagToInt(TREZOR_FLAG_KEYS[0]);
                expect(result).toEqual(1);
            });

            it('index 1 should resolve to 2', () => {
                const result = Flags.flagToInt(TREZOR_FLAG_KEYS[1]);
                expect(result).toEqual(2);
            });

            it('index n should resolve to 1<<n', () => {
                TREZOR_FLAG_KEYS.forEach((key, index) => {
                    const result = Flags.flagToInt(key);
                    expect(result).toEqual(1 << index);
                });
            });
        });
    });

    describe('Test various cases', () => {
        it('No flag should be reported present if not set before', () => {
            const result = 0b0;
            expect(Flags.isFlagPresent(TREZOR_FLAG_KEYS[0], result)).toEqual(false);
            expect(Flags.isFlagPresent(TREZOR_FLAG_KEYS[1], result)).toEqual(false);
        });
        it('Only first flag should be reported present', () => {
            let result = 0b0;
            result = Flags.setFlag(TREZOR_FLAG_KEYS[0], result);
            expect(Flags.isFlagPresent(TREZOR_FLAG_KEYS[0], result)).toEqual(true);
            expect(Flags.isFlagPresent(TREZOR_FLAG_KEYS[1], result)).toEqual(false);
        });
        it('Only second flag should be reported present', () => {
            let result = 0b0;
            result = Flags.setFlag(TREZOR_FLAG_KEYS[1], result);
            expect(Flags.isFlagPresent(TREZOR_FLAG_KEYS[0], result)).toEqual(false);
            expect(Flags.isFlagPresent(TREZOR_FLAG_KEYS[1], result)).toEqual(true);
        });
        it('Both flags should be reported present', () => {
            let result = 0b0;
            result = Flags.setFlag(TREZOR_FLAG_KEYS[0], result);
            result = Flags.setFlag(TREZOR_FLAG_KEYS[1], result);
            expect(Flags.isFlagPresent(TREZOR_FLAG_KEYS[0], result)).toEqual(true);
            expect(Flags.isFlagPresent(TREZOR_FLAG_KEYS[1], result)).toEqual(true);
        });
    });
});