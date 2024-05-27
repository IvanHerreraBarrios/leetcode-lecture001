/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

 //candies = [2] length = 1
 //extraCandoes = 5
 //result = []
 //totalCandies = 7
 //greaterValue = false
 //j = 0

 /*
 var kidsWithCandies = function(candies, extraCandies) {
    const result = []
    for(let i=0; i < candies.length; i++){
        let totalCandies = candies[i] + extraCandies
        let greaterValue = false
        for(let j=0; j < candies.length && !greaterValue; j++){
            if (candies[j] > totalCandies) {
                result[i] = false
                greaterValue = true
            }
        }
        if(!greaterValue){
            result[i] = true
        }
    }

    return result
};
*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

 //candies = [2] length = 1
 //extraCandoes = 5
 //result = []
 //totalCandies = 7
 //greaterValue = false
 //j = 0
 var kidsWithCandies = function(candies, extraCandies) {
    const result = []

    let max = 0
    for(let i=0; i < candies.length; i++){
        if (candies[i] > max){
            max = candies[i]
        }
    }

    for(let i = 0; i < candies.length; i++){
        const totalCandies = candies[i] + extraCandies
        //result[i] = max > totalCandies ? false : true
        result[i] = totalCandies >= max
    }

    return result
};