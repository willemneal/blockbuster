import { collections, context, storage, near } from "./near";

// NFT for films
// Value built into the token
// (trade it on the open market)

// Leave to marketplace

// We'll transact here
// List the contributers by account name (TopN)
// Buy the token
// Sell the token


// BONUS
// List contributers by real name
// Optionally hide identity

const contributers = collections.TopN<>("c");






// --- contract code goes below

let balances = collections.map<string, u64>("b:");
let approves = collections.map<string, u64>("a:");

let TOTAL_SUPPLY: u64 = 100_000;
let CONVERSION_RATE:u32 = 1;


export function init(initialOwner: string): void {
  near.log("initialOwner: " + initialOwner);
  assert(storage.getItem("init") == null, "Already initialized token supply");
  balances.set(initialOwner, TOTAL_SUPPLY);
  storage.setItem("init", "done");
}

export function totalSupply(): string {
  return TOTAL_SUPPLY.toString();
}

export function balanceOf(tokenOwner: string): u64 {
  near.log("balanceOf: " + tokenOwner);
  let result = balances.get(tokenOwner);
  return result;
}

export function allowance(tokenOwner: string, spender: string): u64 {
  return approves.get(tokenOwner + ":" + spender);
}

export function transfer(to: string, tokens: u64): boolean {
  near.log("transfer from: " + context.sender + " to: " + to + " tokens: " + tokens.toString());
  let fromAmount = balances.get(context.sender);
  assert(fromAmount >= tokens, "not enough tokens on account");
  balances.set(context.sender, fromAmount - tokens);
  balances.set(to, balances.get(to) + tokens);
  return true;
}

export function approve(spender: string, tokens: u64): boolean {
  near.log("approve: " + spender + " tokens: " + tokens.toString());
  approves.set(context.sender + ":" + spender, tokens);
  return true;
}

export function transferFrom(from: string, to: string, tokens: u64): boolean {
  let fromAmount = balances.get(from);
  assert(fromAmount >= tokens, "not enough tokens on account");
  let approvedAmount = approves.get(from + ":" + to);
  assert(tokens <= approvedAmount, "not enough tokens approved to transfer");
  balances.set(from, fromAmount - tokens);
  balances.set(to, balances.get(to) + tokens);
  return true;
}
