const getContext = async (address: string) => {
    const BASE_URL = 'https://api.myco.wtf';

    const [tokensResponse, scoreResponse] = await Promise.all([
        fetch(`${BASE_URL}/api/zora/tokens?creatorAddress=${address}`),
        fetch(`${BASE_URL}/api/zora/score?address=${address}`)
    ]);

    const tokens = await tokensResponse.json();
    const score = await scoreResponse.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const zoraTokens = tokens.tokens.map((token: any) => ({
        event: token.event,
        address: token.address,
        timestamp: token.timestamp,
        user: token.metadata.user,
        network: token.metadata.network,
        tokenId: token.metadata.tokenId,
        collection: token.metadata.collection,
        transactionHash: token.metadata.transactionHash
    }))
    const zoraScore = {
        address: score.address,
        score: score.score,
        completeness: score.profile.completeness,
        followers: score.profile.followers,
        following: score.profile.following
    }

    const context = {
        zoraTokens,
        zoraScore
    };

    return context;
};

export default getContext;