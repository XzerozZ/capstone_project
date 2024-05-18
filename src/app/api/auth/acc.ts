export const generateSequenceString = (start: number, end: number, round: number, sequence: string): string => {
    let result = "";
    for (let i = 0; i < round; i++) {
      result += sequence[i] || randomMath(start, end, 0).toString();
    }
    return result;
  };
  
  const randomMath = (start: number, end: number, round: number) => {
    return Math.floor(Math.random() * (end - start + 1) + start);
  };