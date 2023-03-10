function barTriang(p1, p2, p3){
    //   console.log(p1,p2,p3)
      return [Number(((p1[0]+p2[0]+p3[0])/3).toFixed(4)),Number(((p1[1]+p2[1]+p3[1])/3).toFixed(4))]
      //your code here
    }


    const barTriang = ([xA, yA], [xB, yB], [xC, yC]) => [Math.round((xA + xB + xC) / .0003) / 10000, Math.round((yA + yB + yC) / .0003) / 10000];