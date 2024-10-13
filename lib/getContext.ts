const getContext = async (address: string) => {
  const BASE_URL = "https://api.myco.wtf";

  const [tokensResponse, scoreResponse, rewardsResponse] = await Promise.all([
    fetch(`${BASE_URL}/api/zora/tokens?creatorAddress=${address}`),
    fetch(`${BASE_URL}/api/zora/score?address=${address}`),
    fetch(
      `${BASE_URL}/api/zora/rewards?address=0x547a2e8d97Dc99BE21E509FA93C4FA5dd76b8ED0`
    ),
  ]);

  const tokens = await tokensResponse.json();
  const score = await scoreResponse.json();
  const rewards = await rewardsResponse.json();
  const { response } = rewards;

  const zoraTokens = tokens.tokens.map((token: any) => ({
    event: token.event,
    address: token.address,
    timestamp: token.timestamp,
    user: token.metadata.user,
    network: token.metadata.network,
    tokenId: token.metadata.tokenId,
    collection: token.metadata.collection,
    transactionHash: token.metadata.transactionHash,
  }));

  const zoraScore = {
    address: score.address,
    score: score.score,
    completeness: score.profile.completeness,
    followers: score.profile.followers,
    following: score.profile.following,
  };

  const totalZoraRewards =
    response.zoraCreateReferralRewards +
    response.zoraMintReferralRewards +
    response.zoraFirstMinterRewards +
    response.zoraCreatorRewards;

  const zoraRewards = `My createReferral earnings on zora are ${response.zoraCreateReferralRewards}
  My mintReferral earnings on zora are ${response.zoraMintReferralRewards}
  My firstMinter earnings on zora are ${response.zoraFirstMinterRewards}
  My creator earnings on zora are ${response.zoraCreatorRewards}
  My total earnings on zora are ${totalZoraRewards}`;

  const totalBaseRewards =
    response.baseCreateReferralRewards +
    response.baseMintReferralRewards +
    response.baseFirstMinterRewards +
    response.baseCreatorRewards;
  const baseRewards = `My createReferral earnings on base are ${response.baseCreateReferralRewards}
  My mintReferral earnings earning on base are ${response.baseMintReferralRewards}
  My firstMinter earnings earning on base are ${response.baseFirstMinterRewards}
  My creator earnings earning on base are ${response.baseCreatorRewards}
  My total earnings on base are ${totalBaseRewards}
  `;

  const collectorAddresses = response.events
    .filter((event: any) => event.metadata && event.metadata.collector)
    .map((event: any) => event.metadata.collector);

  const uniqueCollectors = [...new Set(collectorAddresses)];

  const collectorInfo = `You have ${uniqueCollectors.length} unique collectors.
Their addresses are: ${uniqueCollectors.join(
    ", "
  )} each occurance in the list is equivalent to one token purchased. you can count the number of times an address appears in the list to see how many tokens they purchased.`;
  console.log("SWEETS collectorInfo", collectorInfo);
  const context = {
    zoraTokens,
    zoraScore,
    zoraRewards,
    baseRewards,
    totalRewards: response.totalRewards,
    collectorInfo,
  };

  return context;
};

export default getContext;
