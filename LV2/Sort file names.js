/*
 * 2020.08.20
 * Level 2
 * 프로그래머스 - 파일명 정렬
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(files) {
    let answer = [];
    let fileMap = files.map((file,index)=>({file,index}));
    
    const regexNum = /[0-9]/g;
    let compare = (a,b)=>{
        let fileA = a.file.toLowerCase();
        let fileB = b.file.toLowerCase();
        
        const numIndexA = fileA.indexOf((fileA.match(regexNum))[0]);
        const numIndexB = fileB.indexOf((fileB.match(regexNum))[0]);
        
        const headCompare = fileA.substring(0,numIndexA).localeCompare(fileB.substring(0,numIndexB));
        
        if(headCompare===0){
            const subStrA = parseInt(fileA.substring(numIndexA));
            const subStrB = parseInt(fileB.substring(numIndexB));
            
            if(subStrA<subStrB){
                return -1;
            }else if(subStrA>subStrB){
                return 1;
            }else{
                return 0;
            }
            
        }else if(headCompare===-1){
            return -1;
        }else{
            return 1;
        }
    };
    
    answer = fileMap.sort((a, b) => {
      const result = compare(a, b);
      return result === 0 ? a.index - b.index : result;
    }).map(val=>val.file);
    
    return answer;
}