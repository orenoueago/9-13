function hanoi(n,p1,p2,p3)
{
    if(n==1)
        console.log(n+"套環從"+p1+"移到"+p3);
    else{
        hanoi(n-1, p1, p3, p2);
        console.log(n+"套環從"+p1+"移到"+p3)
        hanoi(n-1, p2, p1, p3);
    }
}


hanoi(3,"p1", "p2", "p3")