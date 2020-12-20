function solution(n, m) {
  var answer = [];

  if (n < m) {
    const temp = n;
    n = m;
    m = temp;
  }

  const gcd_result = gcd(n, m);
  const lcd_result = (n * m) / gcd_result;

  answer = [gcd_result, lcd_result];

  return answer;
}

function gcd(n, m) {
  if (n % m === 0) return m;
  return gcd(m, n % m);
}
