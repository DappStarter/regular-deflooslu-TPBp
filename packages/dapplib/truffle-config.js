require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'include clinic tail sugar blame birth muscle proud hockey kiwi system such'; 
let testAccounts = [
"0xbd7da7f7a9a0311ea8bd11de8a0bf0b3bf390c0a9af2c5d394baa15dff89416d",
"0xd792f1006fb84be0577bc6da2ac1c524665561125585248367b389de1548e836",
"0xf00870fa4181a80d2dfeac49419cc2587ccd75ee6ba8af001ee67a43ea777c96",
"0xf9b7c753cb590fc2c3e2485ea302204ad750d72234b2a50c6b63feab05b20829",
"0x902c592313d4bbd80e5d8d2df77385aa3558a4204278a017335e1025e91cfe84",
"0xc6a7f0bad0d1e8ddd04ad88b33e6be1b16b231fda3809b4e6b585a3da9733bc6",
"0x1271193ac613aa307336ebf94262cd0ac97059865ff78a71b4647edf681b6ac3",
"0xa4b97b015d6a101e9ac829c418252f958bc30129ead5929c23d71ec0b849aa5d",
"0x9ade0b244b8f2b6add9ab067d1e279cc321247ee20df225fe8077f796307aa37",
"0x625d291b57a775d0e2790259e310652b8c27cbc77980eacec3d389848aff7176"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


