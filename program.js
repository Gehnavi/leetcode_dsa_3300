var minElement = function(nums) {
    let min = Infinity;
    for(const num of nums){
        let n = num;
        let digitSum = 0;
        while(n > 0){
            digitSum = digitSum + n%10;
            n = Math.floor(n/10);
        }
        if(min > digitSum){
            min = digitSum;
        }
    }
    return min;
}