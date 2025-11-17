// Program for demonstrating any 3 functions of DNS utility module


const dns = require("dns");

// 1. dns.lookup()
dns.lookup("google.com", (err, address, family) => {
    if (err) throw err;
    console.log("\n1. Lookup:");
    console.log("Address:", address, "Family:", family);
});

// 2. dns.resolve4()
dns.resolve4("google.com", (err, addresses) => {
    if (err) throw err;
    console.log("\n2. Resolve4:");
    console.log(addresses);
});

// 3. dns.reverse()
dns.reverse("8.8.8.8", (err, hostnames) => {
    if (err) throw err;
    console.log("\n3. Reverse:");
    console.log(hostnames);
});
