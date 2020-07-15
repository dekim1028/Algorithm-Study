/*
 * 2020.07.15
 * Level 2
 * 프로그래머스 - 오픈채팅방
 */

// 첫번째 로직 : 정확성 통과, 효율성 미통과
function solution(record) {
    var answer = [];
    
    record = record.map(function(val,i){
        const arr = val.split(" ");
        return {"type":arr[0], "uid":arr[1], "name":arr[2]};
    });
    
    let person = [];
    for(var i=0;i<record.length;i++){
        const target = record[i];
        
        if(target.type=="Enter"){
            person.push({"name":target.name,"uid":target.uid});
            answer.push("들어왔습니다.");
            
            person = changeName(person, target);
            
        }else if(target.type=="Leave"){
            person.push({"name":findName(person, target.uid),"uid":target.uid});
            answer.push("나갔습니다.");
        }else{
            person = changeName(person, target);
        }
    }
    
    answer = answer.map(function(val,i){
        return person[i].name+"님이 "+val;
    })
    
    return answer;
}

function findName(person, uid){
    for(var i=0;i<person.length;i++){
        if(person[i].uid == uid){
            return person[i].name;
        }
    }
}
    
function changeName(person, target){
    
    person = person.map(function(val){
        if(val.uid==target.uid){
            val.name = target.name;
        }
        return val;
    });
    
    return person;
}