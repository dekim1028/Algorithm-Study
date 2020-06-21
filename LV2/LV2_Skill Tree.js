/*
 * 2020.06.18
 * Level 2
 * 프로그래머스 - 스킬트리
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
function solution(skill, skill_trees) {
    let answer = 0;
    const skillArr = skill.split("");
    
    answer = skill_trees.filter(function(val,index){
        let skillTree = val.split("");
        let stack = [];
        let check = true;
        for(var i=0;i<skillTree.length;i++){
            if(skillArr.includes(skillTree[i])){
                stack.push(skillTree[i]);
                if(skill.indexOf(stack.join(""))==-1){
                    check=false;
                    break;
                }else if(skill.indexOf(stack.join(""))>0){
                        check=false;
                        break;
                }
            }
        }

        return check;
        
    }).length;
    
    return answer;
}