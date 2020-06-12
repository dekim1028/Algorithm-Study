/*
 * 2020.06.11
 * Level 1
 * 프로그래머스 - 직사각형 별 찍기
 */

// 첫번째 로직 : 정확성 통과, 효율성 통과
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ")[0];
    const m = data.split(" ")[1];
    
    let star ="*".repeat(n)+"\n";
    
    console.log(star.repeat(m));
    
});