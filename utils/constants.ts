import { createThirdwebClient, getContract } from "thirdweb";
import { xaiSepolia, sepolia } from "thirdweb/chains";
import  { createWallet, inAppWallet } from "thirdweb/wallets";

export const appMetadata = {
  name: "Fayhr",
  url: "https://catattack.thirdweb.com",
};

export const CLIENT_ID =  process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID|| "";
export const CHAIN = sepolia;
export const CONTRACT_ADDR = "0x870eceF7Ac6713B784Fee6159Cb25D99e40869fb";

export const client = createThirdwebClient({ clientId: CLIENT_ID });
export const contract = getContract({
  client,
  address: CONTRACT_ADDR,
  chain: CHAIN,
});

export const accountAbstraction = {
  chain: CHAIN,
  sponsorGas: false
};

export const wallets = [
    inAppWallet({
      auth: {
        options: ["google", "email"],
      },
    }),
   
  ];


  export const CrowdfundingThings= [
    {
      id: 1,
      title: 'Gadget Funding ',
      description: 'The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.',
      image: '/Images/dashboard/Gadget_image.svg',
      goal: 10000,
      raised: 5000,
      members: "10k",
      contribution: 100
    },
    {
      id: 2,
      title: "Men's Wear",
      description: 'The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.',
      image: '/Images/dashboard/men_wear_image.svg',
      goal: 20000,
      raised: 10000,
      members: "60k",
      contribution: 3000
    },
    {
      id: 3,
      title: 'Cow Funding',
      description: 'The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.',
      image: '/Images/dashboard/cow_image.svg',
      goal: 30000,
      raised: 15000,
      members: "50k",
      contribution: 10000
    },
    {
      id: 4,
      title: 'Merch Funding',
      description: 'The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.',
      image: '/Images/dashboard/merch_image.svg',
      goal: 40000,
      members: "20k",
      raised: 20000,
      contribution: 10000
    },
    {
      id: 5,
      title: 'Fashion Funding',
      description: 'The Technical community, we get to contribute for gadgets together and its quite cheaper and faster.',
      image: '/Images/dashboard/fashion_image.svg',
      goal: 50000,
      members: "10k",
      raised: 25000,
      contribution: 10000
    }
  ]