/*
 * 2020.07.09
 * Level 3
 * 프로그래머스 - 베스트 앨범
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(genres, plays) {
    
    var total = {};
    var mapping = [];
    for(var i=0;i<genres.length;i++){
        var obj = {};
        
        obj.index=i;
        obj.genres=genres[i];
        obj.plays=plays[i];
        
        if(total[genres[i]]>=1){
            total[genres[i]] += plays[i];
        }else{
            total[genres[i]] = plays[i];
        }
        mapping.push(obj);
    }
    
   mapping.sort(function (a, b) { 
	return a.plays > b.plays ? -1 : a.plays < b.plays ? 1 : 0;  
   });
    
    let sortTotal = [];
    for (let number in total) {
      sortTotal.push([number, total[number]]);
    }
    
    sortTotal.sort(function(a, b) {
      return b[1] - a[1];
    });

    var answer = [];
    for (var i=0;i<sortTotal.length;i++) {
        var cnt = 0;
        for(var j=0;j<2;j++){
            if(mapping[cnt].genres==sortTotal[i][0]){
                answer.push(mapping[cnt].index);
            }else{
                j--;
            }
            
            if(cnt>=mapping.length-1){
                break;
            }else{
                cnt++;
            }
        }
    }
    
    return answer;
}