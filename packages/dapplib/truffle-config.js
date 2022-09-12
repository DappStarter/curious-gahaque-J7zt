require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note outside code gesture merry flock gas'; 
let testAccounts = [
"0x815b29271efce615a075930168748efbd8bb1153885f55d4f72b17e72246da71",
"0x7f9c2b3e9f2e10dc725c01896cc13602ea1479c1520d223d5b03f9626736bbed",
"0x9e62c5ff425f31a39ab1e5719042ba34afa80959eb707c1a82c75ade08168165",
"0x041ef963a62cea4eafd39cedd2a113f669c18970c73254bd1984e2ef8c407a9e",
"0x5669b4a917f686237bffdb63d840d9c954cf28342366c3359af403212ab7a779",
"0x20a79c69baa10d17273ce9349afc74f66ad56e5fa95de5a365f2418edc7025ff",
"0x739935538f21373015a98441d04f223c3c19d4968019b363156faa3180e515d1",
"0xf08a10ead6105bbc607d0cf431137a1b60c0c0f282806917d147f15e77c2b1c3",
"0xad3f381349c98ffb729ed9fced273e0c07253e372c87c0249cdd0b74bbb2c476",
"0x8efc7bab764e558e79484dc09cc8a597b5ac353dbd33ca6072f8e6ed5726f7f0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

