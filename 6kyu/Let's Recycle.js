function recycle(array) {
  const materials=['paper', 'glass', 'organic', 'plastic'];
  return materials.map(item=>array.filter(el=>(el.material=== item||el.secondMaterial===item)).map(el=>el.type));
}