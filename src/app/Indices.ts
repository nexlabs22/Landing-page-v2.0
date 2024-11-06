import ANFILogo from '@assets/anfi.webp'
import CR5Logo from '@assets/cr5.webp'
import MAG7Logo from '@assets/mag7.webp'
import ARBEILogo from '@assets/arb.webp'

interface Index{
    name: string;
    logo: string;
    symbol: string;
    shortSymbol: string;
    description: string;
    mktCap: number;
    mktPrice: number;
    chg24h: number;
    tokenAddress: string;
    managementFee: string;
    totalSupply: string;
    tag: string;
}

const IndicesWithDetails: Index[] = [
    {
        name: "Anti Inflation Index",
        logo: ANFILogo.src,
        symbol: "ANFI",
        shortSymbol: "ANFI",
        description:
            "The Anti-inflation Index provides investors with an innovative and resilient strategy, combining two assets to offer a hedge against inflationary pressures.\nGold has traditionally been a reliable investment. Nevertheless, it's worth considering that Bitcoin, often referred to as 'digital gold,' has the potential to assume a prominent role in everyday life in the future.",
        mktCap: 0,
        mktPrice: 0,
        chg24h: 0,
        tokenAddress: "",
        managementFee: "1.00",
        totalSupply: "78622.32",
        tag: "RWA"
    },
    {
        name: "CRYPTO 5 Index",
        logo: CR5Logo.src,
        symbol: "CRYPTO5",
        shortSymbol: "CR5",
       description:
            'The "Crypto 5 Index" represents a meticulously curated basket of assets designed to provide investors with a secure and diversified entry into the digital assets industry. It not only offers stability through its carefully selected assets but also presents substantial growth potential. This makes it an ideal choice for crypto investors seeking a balanced and reliable investment option in the ever-evolving cryptocurrency landscape.',
        mktCap: 0,
        mktPrice: 0,
        chg24h: 0,
        tokenAddress: "",
        managementFee: "1.00",
        totalSupply: "78622.32",
        tag: "CRYPTO"
    },
    {
        name: "Magnificent 7 Index",
        logo: MAG7Logo.src,
        symbol: "MAG7",
        shortSymbol: "MAG7",
        description:
            "The Magnificent 7 (MG7) refers to the top seven tech-driven companies dominating the stock market: Meta Platforms, Amazon, Apple, Netflix, Alphabet, Microsoft, and Nvidia. These companies hold significant market power, robust pricing, and strong earnings potential. The term, coined in 2023 by Michael Hartnett of Bank of America, reflects their innovative capabilities and dominant positions. MG7 is the first tokenized stocks index of this type, offering new digital investment opportunities on blockchain platforms.",
        mktCap: 0,
        mktPrice: 0,
        chg24h: 0,
        tokenAddress: "0x955b3F0091414E7DBbe7bdf2c39d73695CDcDd95",
        managementFee: "1.00",
        totalSupply: "78622.32",
        tag: 'RWA'
    },
    {
        name: "Arbitrum Ecosystem Index",
        logo: ARBEILogo.src,
        symbol: "ARBEI",
        shortSymbol: "ARBEI",
        description:
            "The Arbitrum Ecostystem Index (ARBEI) includes protocols on the Arbitrum chain as its underlying assets. These protocols are evaluated based on their total value locked (TVL) on all chains, TVL on the Arbitrum chain, the number of active addresses on Arbitrum, and their total volume. The index price is determined by these factors, making up 85% of the final price, while the ARB token price contributes 15%. ARBEI allows investors to gain exposure to the growth of the Arbitrum ecosystem.",
        mktCap: 0,
        mktPrice: 0,
        chg24h: 0,
        tokenAddress: "0x58484111fC370bdb19AeaE6336cDb745A3006b4d",
        managementFee: "1.00",
        totalSupply: "78622.32",
        tag: 'CRYPTO'
    },
]

export default IndicesWithDetails