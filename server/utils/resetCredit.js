export const resetCreditsIfNeeded = async (user) => {
  const now = new Date();
  const lastReset = new Date(user.lastCreditReset);

  const hoursPassed = (now - lastReset) / (1000 * 60 * 60);

  if (hoursPassed >= 24) {
    user.creditBalance = 5;     // daily free credits
    user.lastCreditReset = now;
    await user.save();
  }
};
