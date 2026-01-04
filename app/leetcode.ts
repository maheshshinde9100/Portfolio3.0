// leetcode stats type
export interface LeetCodeStats {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSubmissionNum: {
    difficulty: string;
    count: number;
    submissions: number;
  }[];
}

// leetcode profile type
export interface LeetCodeProfile {
  username: string;
  name: string;
  avatar: string;
  ranking: number;
  reputation: number;
  country: string;
}

//personal information 
export const getLeetcodeInfo = async (): Promise<LeetCodeProfile | null> => {
  try {
    const response = await fetch('https://alfa-leetcode-api.onrender.com/code-with-mahesh');
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error("Failed to fetch LeetCode info:", error);
    return null;
  }
};

//problems information
export const getLeetcodeStats = async (): Promise<LeetCodeStats | null> => {
  try {
    const response = await fetch('https://alfa-leetcode-api.onrender.com/code-with-mahesh/solved');
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error("Failed to fetch LeetCode stats:", error);
    return null;
  }
}