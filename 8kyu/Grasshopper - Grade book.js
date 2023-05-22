function getGrade (s1, s2, s3) {
  // Code here
  let a = (s1+s2+s3)/3;
  return a >=90? "A": a>= 80? "B": a>= 70?"C": a>=60 ? "D" :"F"
}

// function getGrade (s1, s2, s3) {
//   avg = (s1+s2+s3)/3;
//   if (avg < 60)  return "F";
//     else if (avg < 70) return "D";
//     else if (avg < 80) return "C";
//     else if (avg < 90) return "B";
//     else return "A";
// }

