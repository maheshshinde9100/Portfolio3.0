//personal information 
export const getLeetcodeInfo = async () => {
  const response = await fetch('https://alfa-leetcode-api.onrender.com/code-with-mahesh');
  return response.json();
};

//problems information
export const getLeetcodeStats = async ()=>{
    const response = await fetch('https://alfa-leetcode-api.onrender.com/code-with-mahesh/solved');
    return response.json();
}