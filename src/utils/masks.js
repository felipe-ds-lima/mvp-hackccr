export function setPhoneMask(value) {
  const numValue = value.replace(/\+55|\D/g, '');

  if (numValue.length >= 2 && numValue.length < 7) {
    return numValue.replace(/^([0-9]{2,2})([0-9]{1,4})$/g, '($1)$2');
  }

  if (numValue.length >= 2 && numValue.length < 11) {
    return numValue.replace(
      /^([0-9]{2,2})([0-9]{1,4})([0-9]{1,10})$/g,
      '($1)$2-$3'
    );
  }

  return numValue.replace(
    /^([0-9]{2,2})([0-9]{1,5})([0-9]{1,13})$/g,
    '($1)$2-$3'
  );
}
