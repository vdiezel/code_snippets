function gcd(n, m){
    while(m){
        console.log(m);
        [n, m] = [m, n % m]
        // let temp = n;
        // n = m;
        // m = temp % m;
    }
    return n;
}