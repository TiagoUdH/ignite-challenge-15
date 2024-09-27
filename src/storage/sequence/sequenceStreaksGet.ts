import { sequenceGet } from "./sequenceGet";

type StreaksAccumulator = {
  currentStreak: number;
  bestStreak: number;
};

export async function sequenceStreaksGet(){
  try{
    const storedSequence = await sequenceGet()

    const streaks = storedSequence.reduce<StreaksAccumulator>((acc, term) => {
      if(term.inDiet){
        acc.currentStreak++;

        if (acc.currentStreak > acc.bestStreak){
          acc.bestStreak = acc.currentStreak;
        }
      }
      else {
        acc.currentStreak = 0;
      }

      return acc
    }, {
      currentStreak: 0,
      bestStreak: 0,
    })

    return {
      currentStreak: streaks.currentStreak,
      bestStreak: streaks.bestStreak,
    }
  }
  catch(error){
    throw error
  }
}