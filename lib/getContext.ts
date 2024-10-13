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
  const { totalRewards } = rewards.response;
  console.log("SWEETS REWARDS", totalRewards);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  //   const zoraRewards = {
  //     address: rewards.address,
  //     totalRewards: rewards.totalRewards,
  //     rewardsBreakdown: rewards.rewardsBreakdown.map((reward: any) => ({
  //       rewardType: reward.rewardType,
  //       amount: reward.amount,
  //     })),
  //     claimStatus: rewards.claimStatus,
  //   }
  console.log("SWEETS REWARDS", totalRewards);

  const context = {
    zoraTokens,
    zoraScore,
    totalRewards: totalRewards,
  };

  return context;
};

export default getContext;
