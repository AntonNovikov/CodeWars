Object.prototype.hash = function(string) {
  string = string.split('.');
   let data = this;
   for (let i=0; data && i<string.length; i++) 
     data = data[string[i]] ;
   return data;
}
