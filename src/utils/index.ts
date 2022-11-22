import { BigNumber, BigNumberish } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import numbro from 'numbro';

export const shortAddress = (address: string) =>
  address
    ? address.substring(0, 6) + '...' + address.substring(address.length - 4, address.length)
    : 'Not Connected';

export const mediumAddress = (address: string) =>
  address.substring(0, 8) + '...' + address.substring(address.length - 8, address.length);

export const toUnixTime = (timestampish: number | BigNumber | Date): number => {
  if (Number.isFinite(timestampish)) {
    return Math.floor((timestampish as number) / 1e3);
  }
  if (BigNumber.isBigNumber(timestampish)) {
    return toUnixTime(bnToNumber(timestampish as BigNumber));
  }
  return toUnixTime((timestampish as Date).getTime());
};

export const fromUnixTime = (timestampish: number | BigNumber): Date => {
  if (Number.isFinite(timestampish)) {
    return new Date((timestampish as number) * 1e3);
  }
  return fromUnixTime(bnToNumber(timestampish as BigNumber));
};

export const getNowUnix = () => toUnixTime(Date.now());

/**
 * Convert a BN to a simple Number primitive, scaling down and losing precision
 * @param bn
 * @param scale (decimals)
 */
export const exactToSimple = (bn: BigNumberish = BigNumber.from(0), scale?: number) =>
  parseFloat(formatUnits(bn, scale));

/**
 * Convert a simple Number primitive to a BN, scaling up
 * @param simple
 * @param scale (decimals)
 */
export const simpleToExact = (simple: number | string = 0, _scale?: number) => {
  const scale = BigNumber.from(10).pow(BigNumber.from(_scale || 18));

  const amountString = simple.toString();
  const scaleString = scale.toString();
  const [_whole, _fraction] = amountString.split('.');

  const whole = _whole || '0';
  const fraction: string = Array.from(scaleString).reduce(
    prev => (prev.length < scaleString.length - 1 ? prev + '0' : prev),
    _fraction || '0',
  );

  const wholeBN = BigNumber.from(whole);
  const fractionBN = BigNumber.from(fraction);
  return wholeBN.mul(scale).add(fractionBN);
};

/**
 * Simply convert a BN to a Number, without any scaling
 * @param bn
 */
export const bnToNumber = (bn = BigNumber.from(0)): number => parseInt(bn.toString());

export const padHex = (hexstring: string, intSize = 256) => {
  hexstring = hexstring.replace('0x', '');

  const length = intSize / 4 - hexstring.length;
  for (let i = 0; i < length; i++) {
    hexstring = '0' + hexstring;
  }
  return hexstring;
};

const getSafeValue = (value: number): number => (isNaN(value) || !value ? 0 : value);

/**
 * Format a given number as a string, with abbreviation if needed (e.g. 55.12m)
 * @param value
 * @param format
 */
export const formatValue = (value: number, format?: numbro.Format): string => {
  const currentMantissa = format?.mantissa ?? 2;
  const isSmallerThanMantissa = 1 / 10 ** currentMantissa > value;

  return isSmallerThanMantissa && currentMantissa > 0 && value > 0
    ? '< 0.' + '0'.repeat(currentMantissa - 1) + '1'
    : numbro(getSafeValue(value)).format({ mantissa: 2, average: true, ...format });
};

/**
 * Format a given number as a currency, with abbreviation if needed (e.g. 55.12m)
 * Protip: supply `currencySymbol` to `format` if needed (assumes the almighty dollar)
 * @param value
 * @param format
 */
export const formatCurrency = (value: number, format?: numbro.Format): string => {
  return numbro(getSafeValue(value)).formatCurrency({ mantissa: 2, average: true, ...format });
};

/**
 * Format a given number as a percentage, without abbreviation
 * @param value
 * @param format
 */
export const formatPercent = (value: number, format?: numbro.Format): string => {
  return numbro(getSafeValue(value)).format({
    mantissa: 2,
    average: false,
    thousandSeparated: true,
    output: 'percent',
    ...format,
  });
};
